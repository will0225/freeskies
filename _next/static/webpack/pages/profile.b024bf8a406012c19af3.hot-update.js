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
  }, imageData),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3RvTGlzdC5qcyJdLCJuYW1lcyI6WyJJbWFnZUxpc3QiLCJpbWFnZXMiLCJvblJhdGVQb3N0Iiwib3RoZXJVc2VyIiwiZGVsZXRlUGhvdG8iLCJsaWtlQWN0aW9uIiwic2hhcmVBY3Rpb24iLCJvblVwZGF0ZVRpbWVsaW5lIiwiYXV0aCIsInVzZVN0YXRlIiwicGhvdG9JbmRleCIsInNldFBob3RvSW5kZXgiLCJpbWFnZURhdGEiLCJzZXRJbWFnZURhdGEiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlTW9kYWwiLCJzaG93TW9kYWwiLCJpIiwiSW1hZ2VTb3J0aW5nIiwiYWN0aXZlSW1hZ2VJZCIsImNhcm91c2VsRGF0YSIsImZpcnN0RGF0YSIsInNlY29uZERhdGEiLCJkYXRhIiwibGVuZ3RoIiwic3JjIiwic2xpY2UiLCJwdXNoIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsInBob3RvcyIsInNlY3Rpb25zX2NvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJtZW51IiwiaWQiLCJmb250U2l6ZSIsInBob3RvIiwicG9zaXRpb24iLCJtYXJnaW5Cb3R0b20iLCJibG9iX3RuIiwid2lkdGgiLCJoZWlnaHQiLCJlZGl0V3JhcHBlciIsImNvbG9yIiwiZGlzcGxheSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BU1Y7QUFBQTs7QUFBQSxNQVJOQyxNQVFNLFFBUk5BLE1BUU07QUFBQSxNQVBOQyxVQU9NLFFBUE5BLFVBT007QUFBQSxNQU5OQyxTQU1NLFFBTk5BLFNBTU07QUFBQSxNQUxOQyxXQUtNLFFBTE5BLFdBS007QUFBQSxNQUpOQyxVQUlNLFFBSk5BLFVBSU07QUFBQSxNQUhOQyxXQUdNLFFB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YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4vUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEcm9wZG93biwgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCwgRWRpdEZpbGxlZCwgRG93bk91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCAgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuXHJcbmNvbnN0IEltYWdlTGlzdCA9ICh7IFxyXG4gIGltYWdlcywgXHJcbiAgb25SYXRlUG9zdCwgXHJcbiAgb3RoZXJVc2VyLCBcclxuICBkZWxldGVQaG90bywgXHJcbiAgbGlrZUFjdGlvbiwgXHJcbiAgc2hhcmVBY3Rpb24sIFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsIFxyXG4gIGF1dGhcclxuICB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtwaG90b0luZGV4LCBzZXRQaG90b0luZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbWFnZURhdGEsIHNldEltYWdlRGF0YV0gPSB1c2VTdGF0ZShpbWFnZXMpO1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zUHJvdmlkZXI+XHJcbiAgICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgIGRhdGE9e2ltYWdlRGF0YX1cclxuICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIHBob3RvSW5kZXg9e3Bob3RvSW5kZXh9XHJcbiAgICAgICAgcHJvZmlsZVBob3RvPXt0cnVlfVxyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgLz5cclxuICAgIDwvUGhvdG9zUHJvdmlkZXI+XHJcbiAgKSwgaW1hZ2VEYXRhKTtcclxuXHJcbiAgdmFyIGk9MTtcclxuXHJcbiAgY29uc3QgSW1hZ2VTb3J0aW5nID0gKGFjdGl2ZUltYWdlSWQpID0+IHtcclxuICAgIGxldCBjYXJvdXNlbERhdGEgPSBbXTtcclxuICAgIGxldCBmaXJzdERhdGEgPSBbXTtcclxuICAgIGxldCBzZWNvbmREYXRhID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZihpbWFnZURhdGFbaV0uc3JjID09PSBhY3RpdmVJbWFnZUlkKSB7XHJcbiAgICAgICAgZmlyc3REYXRhID0gaW1hZ2VEYXRhLnNsaWNlKGksIGltYWdlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZERhdGEucHVzaChpbWFnZURhdGFbaV0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjYXJvdXNlbERhdGEgPSBbLi4uZmlyc3REYXRhLCAuLi5zZWNvbmREYXRhXTtcclxuICAgIHNldEltYWdlRGF0YShjYXJvdXNlbERhdGEpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLnBob3Rvcywgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnQpfT5cclxuICAgICAge2ltYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IFxyXG4gICAgICAgIGNvbnN0IG1lbnUgPSAoXHJcbiAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBkZWxldGVQaG90byhpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+IDxzcGFuPkRlbGV0ZSBQaG90bzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30ga2V5PXtpbmRleH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbkJvdHRvbTogMjB9fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uYmxvYl90bn1gfSBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0gXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFBob3RvSW5kZXgoaW5kZXgpOyBzaG93TW9kYWwoKSB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeyFvdGhlclVzZXI/XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRGaWxsZWQgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDRcclxuICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==