webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/profile/styles/market_section.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/profile/styles/market_section.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".market_section_market_sction__3HRVt {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\n  gap: 10px 10px;\n}\n\n@media (max-width: 767px) {\n  .market_section_market_sction__3HRVt {\n    display: block;\n  }\n}\n\n.market_section_market_item_image__xqrXR {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.market_section_market_item_image__xqrXR .market_section_price__vcSBT {\n  display: block;\n  font-weight: bold;\n  font-size: 20px;\n  color: black;\n  padding: 2px 10px;\n}\n\n.market_section_market_item_image__xqrXR .market_section_image__2dGG8 {\n  border-radius: 7px;\n  margin: 0 auto;\n}\n\n.market_section_market_item__39xd7 {\n  display: block;\n  background: white;\n  padding: 7px;\n  margin-bottom: 20px;\n  position: relative;\n  cursor: pointer;\n  border: 2px solid #ccd3dc;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.market_section_market_item__39xd7:hover {\n  background-color: #cbd5e0;\n}\n\n.market_section_market_item_model__16YWe {\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n}\n\n.market_section_market_item_des__1fjZ2 {\n  font-size: 15px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n}\n\n.market_section_market_item_category__3IqRA {\n  font-size: 14px;\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.market_section_editWrapper__3uUGi {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  background-color: black;\n  border-radius: 100%;\n  padding: 7px;\n  opacity: 0.7;\n  cursor: pointer;\n}\n\n.market_section_editWrapper__3uUGi:active {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://components/profile/styles/market_section.module.scss","webpack://css/mixins/_responsive.scss"],"names":[],"mappings":"AAEA;EAEI,aAAA;EACA,kCAAA;EACA,yDAAA;EACA,cAAA;AAFJ;;ACQE;EDXF;IAOQ,cAAA;EAAN;AACF;;AAGA;EACI,kBAAA;EACA,cAAA;EACA,WAAA;AAAJ;;AAEI;EACI,cAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AAAR;;AAGI;EAGI,kBAAA;EACA,cAAA;AAHR;;AAOA;EACI,cAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,4EAAA;AAJJ;;AAOA;EACI,yBAAA;AAJJ;;AAOA;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;AAJJ;;AAOA;EACI,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;AAJJ;;AAOA;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;AAJJ;;AAOA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;AAJJ;;AAOA;EACE,YAAA;AAJF","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.market_sction{\r\n    // padding: 0 15px 15px 15px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\r\n    gap: 10px 10px;\r\n    @include mobile {\r\n        display: block;\r\n    }\r\n}\r\n\r\n.market_item_image {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    // height: 30vh;\r\n    .price {\r\n        display: block;\r\n        font-weight: bold;\r\n        font-size: 20px;\r\n        color: black;\r\n        padding: 2px 10px;\r\n    }\r\n\r\n    .image {\r\n        // width: 100%;\r\n        // height: 100%;\r\n        border-radius: 7px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n.market_item{\r\n    display: block;\r\n    background: white;\r\n    padding: 7px;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    cursor: pointer;\r\n    border: 2px solid #ccd3dc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\r\n}\r\n\r\n.market_item:hover {\r\n    background-color: #cbd5e0;\r\n}\r\n\r\n.market_item_model {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.market_item_des {\r\n    font-size: 15px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.market_item_category {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    padding-left: 10px;\r\n}\r\n\r\n.editWrapper {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 5px;\r\n    background-color: black;\r\n    border-radius: 100%;\r\n    padding: 7px;\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n}\r\n\r\n.editWrapper:active {\r\n  opacity: 0.5;\r\n}\r\n","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"market_sction": "market_section_market_sction__3HRVt",
	"market_item_image": "market_section_market_item_image__xqrXR",
	"price": "market_section_price__vcSBT",
	"image": "market_section_image__2dGG8",
	"market_item": "market_section_market_item__39xd7",
	"market_item_model": "market_section_market_item_model__16YWe",
	"market_item_des": "market_section_market_item_des__1fjZ2",
	"market_item_category": "market_section_market_item_category__3IqRA",
	"editWrapper": "market_section_editWrapper__3uUGi"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3N0eWxlcy9tYXJrZXRfc2VjdGlvbi5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLCtJQUF3RTtBQUNsSDtBQUNBO0FBQ0EsOEJBQThCLFFBQVMseUNBQXlDLGtCQUFrQix1Q0FBdUMsOERBQThELG1CQUFtQixHQUFHLCtCQUErQiwwQ0FBMEMscUJBQXFCLEtBQUssR0FBRyw4Q0FBOEMsdUJBQXVCLG1CQUFtQixnQkFBZ0IsR0FBRywyRUFBMkUsbUJBQW1CLHNCQUFzQixvQkFBb0IsaUJBQWlCLHNCQUFzQixHQUFHLDJFQUEyRSx1QkFBdUIsbUJBQW1CLEdBQUcsd0NBQXdDLG1CQUFtQixzQkFBc0IsaUJBQWlCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLDhCQUE4Qix1QkFBdUIsaUZBQWlGLEdBQUcsOENBQThDLDhCQUE4QixHQUFHLDhDQUE4QyxvQkFBb0Isc0JBQXNCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLEdBQUcsNENBQTRDLG9CQUFvQix1QkFBdUIsd0JBQXdCLHdCQUF3QixHQUFHLGlEQUFpRCxvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLHdDQUF3QyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixnQkFBZ0IsYUFBYSw0QkFBNEIsd0JBQXdCLGlCQUFpQixpQkFBaUIsb0JBQW9CLEdBQUcsK0NBQStDLGlCQUFpQixHQUFHLE9BQU8sNkpBQTZKLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLHlEQUF5RCx1QkFBdUIscUNBQXFDLHNCQUFzQiwyQ0FBMkMsa0VBQWtFLHVCQUF1Qix5QkFBeUIsMkJBQTJCLFNBQVMsS0FBSyw0QkFBNEIsMkJBQTJCLHVCQUF1QixvQkFBb0Isd0JBQXdCLGdCQUFnQiwyQkFBMkIsOEJBQThCLDRCQUE0Qix5QkFBeUIsOEJBQThCLFNBQVMsb0JBQW9CLDJCQUEyQiw0QkFBNEIsK0JBQStCLDJCQUEyQixTQUFTLEtBQUsscUJBQXFCLHVCQUF1QiwwQkFBMEIscUJBQXFCLDRCQUE0QiwyQkFBMkIsd0JBQXdCLGtDQUFrQywyQkFBMkIseUZBQXlGLDRCQUE0QixrQ0FBa0MsS0FBSyw0QkFBNEIsd0JBQXdCLDBCQUEwQiwyQkFBMkIsNEJBQTRCLDRCQUE0QixLQUFLLDBCQUEwQix3QkFBd0IsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsS0FBSywrQkFBK0Isd0JBQXdCLDBCQUEwQiwyQkFBMkIsS0FBSyxzQkFBc0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsb0JBQW9CLGlCQUFpQixnQ0FBZ0MsNEJBQTRCLHFCQUFxQixxQkFBcUIsd0JBQXdCLEtBQUssNkJBQTZCLG1CQUFtQixLQUFLLGlDQUFpQyx5QkFBeUIseUJBQXlCLDJCQUEyQiwrQkFBK0IsMkJBQTJCLGlEQUFpRCx5QkFBeUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QiwyQkFBMkIsY0FBYyxHQUFHLGlCQUFpQixPQUFPLEtBQUssdUJBQXVCLDJCQUEyQixjQUFjLG9CQUFvQixxQkFBcUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHdCQUF3QiwyQkFBMkIsZUFBZSxvQkFBb0IseUJBQXlCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSywyQkFBMkIsMkJBQTJCLG1CQUFtQixHQUFHLGlCQUFpQixPQUFPLEtBQUssdUJBQXVCO0FBQzNxSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJrZXRwbGFjZS40ZGY3OWUwYTlmMGViMzEyZGIxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hcmtldF9zZWN0aW9uX21hcmtldF9zY3Rpb25fXzNIUlZ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxZnIsIDFmcikpO1xcbiAgZ2FwOiAxMHB4IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLm1hcmtldF9zZWN0aW9uX21hcmtldF9zY3Rpb25fXzNIUlZ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5tYXJrZXRfc2VjdGlvbl9tYXJrZXRfaXRlbV9pbWFnZV9feHFyWFIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX2ltYWdlX194cXJYUiAubWFya2V0X3NlY3Rpb25fcHJpY2VfX3ZjU0JUIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX2ltYWdlX194cXJYUiAubWFya2V0X3NlY3Rpb25faW1hZ2VfXzJkR0c4IHtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFya2V0X3NlY3Rpb25fbWFya2V0X2l0ZW1fXzM5eGQ3IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjZDNkYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbi5tYXJrZXRfc2VjdGlvbl9tYXJrZXRfaXRlbV9fMzl4ZDc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMDtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX21vZGVsX18xNllXZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubWFya2V0X3NlY3Rpb25fbWFya2V0X2l0ZW1fZGVzX18xZmpaMiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX2NhdGVnb3J5X18zSXFSQSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX2VkaXRXcmFwcGVyX18zdVVHaSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXJrZXRfc2VjdGlvbl9lZGl0V3JhcHBlcl9fM3VVR2k6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvcHJvZmlsZS9zdHlsZXMvbWFya2V0X3NlY3Rpb24ubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9jc3MvbWl4aW5zL19yZXNwb25zaXZlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFFSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx5REFBQTtFQUNBLGNBQUE7QUFGSjs7QUNRRTtFRFhGO0lBT1EsY0FBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQVI7O0FBR0k7RUFHSSxrQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQUpKOztBQU9BO0VBQ0kseUJBQUE7QUFKSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNFLFlBQUE7QUFKRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdjc3MvbWl4aW5zL3Jlc3BvbnNpdmUnO1xcclxcblxcclxcbi5tYXJrZXRfc2N0aW9ue1xcclxcbiAgICAvLyBwYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDFmciwgMWZyKSk7XFxyXFxuICAgIGdhcDogMTBweCAxMHB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1hcmtldF9pdGVtX2ltYWdlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8vIGhlaWdodDogMzB2aDtcXHJcXG4gICAgLnByaWNlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW1hZ2Uge1xcclxcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFya2V0X2l0ZW17XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjZDNkYztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpXFxyXFxufVxcclxcblxcclxcbi5tYXJrZXRfaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTA7XFxyXFxufVxcclxcblxcclxcbi5tYXJrZXRfaXRlbV9tb2RlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmtldF9pdGVtX2RlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFya2V0X2l0ZW1fY2F0ZWdvcnkge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0V3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRXcmFwcGVyOmFjdGl2ZSB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblwiLFwiJGV4dHJhLXNtYWxsLXdpZHRoOiA0ODBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA3NjdweDtcXHJcXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcXHJcXG4kZGVza3RvcC13aWR0aDogMTA3NHB4O1xcclxcbiRiaWctZGVza3RvcC13aWR0aDogMTQ0MHB4O1xcclxcblxcclxcbkBtaXhpbiBleHRyYVNtYWxsIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyMHB4KSBhbmQgKG1heC13aWR0aDogI3skZXh0cmEtc21hbGwtd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtb2JpbGUtd2lkdGh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdGFibGV0IHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGJpZy1kZXNrdG9wLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJpZ0Rlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGJpZy1kZXNrdG9wLXdpZHRofSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFya2V0X3NjdGlvblwiOiBcIm1hcmtldF9zZWN0aW9uX21hcmtldF9zY3Rpb25fXzNIUlZ0XCIsXG5cdFwibWFya2V0X2l0ZW1faW1hZ2VcIjogXCJtYXJrZXRfc2VjdGlvbl9tYXJrZXRfaXRlbV9pbWFnZV9feHFyWFJcIixcblx0XCJwcmljZVwiOiBcIm1hcmtldF9zZWN0aW9uX3ByaWNlX192Y1NCVFwiLFxuXHRcImltYWdlXCI6IFwibWFya2V0X3NlY3Rpb25faW1hZ2VfXzJkR0c4XCIsXG5cdFwibWFya2V0X2l0ZW1cIjogXCJtYXJrZXRfc2VjdGlvbl9tYXJrZXRfaXRlbV9fMzl4ZDdcIixcblx0XCJtYXJrZXRfaXRlbV9tb2RlbFwiOiBcIm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX21vZGVsX18xNllXZVwiLFxuXHRcIm1hcmtldF9pdGVtX2Rlc1wiOiBcIm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX2Rlc19fMWZqWjJcIixcblx0XCJtYXJrZXRfaXRlbV9jYXRlZ29yeVwiOiBcIm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX2NhdGVnb3J5X18zSXFSQVwiLFxuXHRcImVkaXRXcmFwcGVyXCI6IFwibWFya2V0X3NlY3Rpb25fZWRpdFdyYXBwZXJfXzN1VUdpXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==