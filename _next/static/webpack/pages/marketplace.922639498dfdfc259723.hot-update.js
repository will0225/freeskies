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
___CSS_LOADER_EXPORT___.push([module.i, ".market_section_market_sction__3HRVt {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\n  gap: 10px 10px;\n}\n\n@media (max-width: 767px) {\n  .market_section_market_sction__3HRVt {\n    display: block;\n  }\n}\n\n.market_section_market_item_image__xqrXR {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.market_section_market_item_image__xqrXR .market_section_price__vcSBT {\n  display: block;\n  font-weight: bold;\n  font-size: 20px;\n  color: black;\n  padding: 2px 10px;\n}\n\n.market_section_market_item_image__xqrXR .market_section_image__2dGG8 {\n  border-radius: 7px;\n  margin: 0 auto;\n}\n\n.market_section_market_item__39xd7 {\n  display: block;\n  background: white;\n  padding: 7px;\n  margin-bottom: 20px;\n  position: relative;\n  cursor: pointer;\n  border: 2px solid #ccd3dc;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.market_section_market_item__39xd7:hover {\n  background-color: #cbd5e0;\n}\n\n.market_section_market_item_model__16YWe {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 20px;\n}\n\n.market_section_editWrapper__3uUGi {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  background-color: black;\n  border-radius: 100%;\n  padding: 7px;\n  opacity: 0.7;\n  cursor: pointer;\n}\n\n.market_section_editWrapper__3uUGi:active {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://components/profile/styles/market_section.module.scss","webpack://css/mixins/_responsive.scss"],"names":[],"mappings":"AAEA;EAEI,aAAA;EACA,kCAAA;EACA,yDAAA;EACA,cAAA;AAFJ;;ACQE;EDXF;IAOQ,cAAA;EAAN;AACF;;AAGA;EACI,kBAAA;EACA,cAAA;EACA,WAAA;AAAJ;;AAEI;EACI,cAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AAAR;;AAGI;EAGI,kBAAA;EACA,cAAA;AAHR;;AAOA;EACI,cAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,4EAAA;AAJJ;;AAOA;EACI,yBAAA;AAJJ;;AAOA;EACI,eAAA;EACA,iBAAA;EACA,aAAA;AAJJ;;AAOA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;AAJJ;;AAOA;EACE,YAAA;AAJF","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.market_sction{\r\n    // padding: 0 15px 15px 15px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\r\n    gap: 10px 10px;\r\n    @include mobile {\r\n        display: block;\r\n    }\r\n}\r\n\r\n.market_item_image {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    // height: 30vh;\r\n    .price {\r\n        display: block;\r\n        font-weight: bold;\r\n        font-size: 20px;\r\n        color: black;\r\n        padding: 2px 10px;\r\n    }\r\n\r\n    .image {\r\n        // width: 100%;\r\n        // height: 100%;\r\n        border-radius: 7px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n.market_item{\r\n    display: block;\r\n    background: white;\r\n    padding: 7px;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    cursor: pointer;\r\n    border: 2px solid #ccd3dc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\r\n}\r\n\r\n.market_item:hover {\r\n    background-color: #cbd5e0;\r\n}\r\n\r\n.market_item_model {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    padding: 20px;\r\n}\r\n\r\n.editWrapper {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 5px;\r\n    background-color: black;\r\n    border-radius: 100%;\r\n    padding: 7px;\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n}\r\n\r\n.editWrapper:active {\r\n  opacity: 0.5;\r\n}\r\n","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"market_sction": "market_section_market_sction__3HRVt",
	"market_item_image": "market_section_market_item_image__xqrXR",
	"price": "market_section_price__vcSBT",
	"image": "market_section_image__2dGG8",
	"market_item": "market_section_market_item__39xd7",
	"market_item_model": "market_section_market_item_model__16YWe",
	"editWrapper": "market_section_editWrapper__3uUGi"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3N0eWxlcy9tYXJrZXRfc2VjdGlvbi5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLCtJQUF3RTtBQUNsSDtBQUNBO0FBQ0EsOEJBQThCLFFBQVMseUNBQXlDLGtCQUFrQix1Q0FBdUMsOERBQThELG1CQUFtQixHQUFHLCtCQUErQiwwQ0FBMEMscUJBQXFCLEtBQUssR0FBRyw4Q0FBOEMsdUJBQXVCLG1CQUFtQixnQkFBZ0IsR0FBRywyRUFBMkUsbUJBQW1CLHNCQUFzQixvQkFBb0IsaUJBQWlCLHNCQUFzQixHQUFHLDJFQUEyRSx1QkFBdUIsbUJBQW1CLEdBQUcsd0NBQXdDLG1CQUFtQixzQkFBc0IsaUJBQWlCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLDhCQUE4Qix1QkFBdUIsaUZBQWlGLEdBQUcsOENBQThDLDhCQUE4QixHQUFHLDhDQUE4QyxvQkFBb0Isc0JBQXNCLGtCQUFrQixHQUFHLHdDQUF3QyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixnQkFBZ0IsYUFBYSw0QkFBNEIsd0JBQXdCLGlCQUFpQixpQkFBaUIsb0JBQW9CLEdBQUcsK0NBQStDLGlCQUFpQixHQUFHLE9BQU8sNkpBQTZKLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSx5REFBeUQsdUJBQXVCLHFDQUFxQyxzQkFBc0IsMkNBQTJDLGtFQUFrRSx1QkFBdUIseUJBQXlCLDJCQUEyQixTQUFTLEtBQUssNEJBQTRCLDJCQUEyQix1QkFBdUIsb0JBQW9CLHdCQUF3QixnQkFBZ0IsMkJBQTJCLDhCQUE4Qiw0QkFBNEIseUJBQXlCLDhCQUE4QixTQUFTLG9CQUFvQiwyQkFBMkIsNEJBQTRCLCtCQUErQiwyQkFBMkIsU0FBUyxLQUFLLHFCQUFxQix1QkFBdUIsMEJBQTBCLHFCQUFxQiw0QkFBNEIsMkJBQTJCLHdCQUF3QixrQ0FBa0MsMkJBQTJCLHlGQUF5Riw0QkFBNEIsa0NBQWtDLEtBQUssNEJBQTRCLHdCQUF3QiwwQkFBMEIsc0JBQXNCLEtBQUssc0JBQXNCLG9CQUFvQixxQkFBcUIsMkJBQTJCLG9CQUFvQixpQkFBaUIsZ0NBQWdDLDRCQUE0QixxQkFBcUIscUJBQXFCLHdCQUF3QixLQUFLLDZCQUE2QixtQkFBbUIsS0FBSyxpQ0FBaUMseUJBQXlCLHlCQUF5QiwyQkFBMkIsK0JBQStCLDJCQUEyQixpREFBaUQseUJBQXlCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUIsMkJBQTJCLGNBQWMsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QiwyQkFBMkIsY0FBYyxvQkFBb0IscUJBQXFCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx3QkFBd0IsMkJBQTJCLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLGlCQUFpQixPQUFPLEtBQUssMkJBQTJCLDJCQUEyQixtQkFBbUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QjtBQUN2OEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJrZXRwbGFjZS45MjI2Mzk0OThkZmRmYzI1OTcyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hcmtldF9zZWN0aW9uX21hcmtldF9zY3Rpb25fXzNIUlZ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxZnIsIDFmcikpO1xcbiAgZ2FwOiAxMHB4IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLm1hcmtldF9zZWN0aW9uX21hcmtldF9zY3Rpb25fXzNIUlZ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5tYXJrZXRfc2VjdGlvbl9tYXJrZXRfaXRlbV9pbWFnZV9feHFyWFIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX2ltYWdlX194cXJYUiAubWFya2V0X3NlY3Rpb25fcHJpY2VfX3ZjU0JUIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX2ltYWdlX194cXJYUiAubWFya2V0X3NlY3Rpb25faW1hZ2VfXzJkR0c4IHtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFya2V0X3NlY3Rpb25fbWFya2V0X2l0ZW1fXzM5eGQ3IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjZDNkYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbi5tYXJrZXRfc2VjdGlvbl9tYXJrZXRfaXRlbV9fMzl4ZDc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMDtcXG59XFxuXFxuLm1hcmtldF9zZWN0aW9uX21hcmtldF9pdGVtX21vZGVsX18xNllXZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYXJrZXRfc2VjdGlvbl9lZGl0V3JhcHBlcl9fM3VVR2kge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgb3BhY2l0eTogMC43O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFya2V0X3NlY3Rpb25fZWRpdFdyYXBwZXJfXzN1VUdpOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3Byb2ZpbGUvc3R5bGVzL21hcmtldF9zZWN0aW9uLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vY3NzL21peGlucy9fcmVzcG9uc2l2ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBRUksYUFBQTtFQUNBLGtDQUFBO0VBQ0EseURBQUE7RUFDQSxjQUFBO0FBRko7O0FDUUU7RURYRjtJQU9RLGNBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFSOztBQUdJO0VBR0ksa0JBQUE7RUFDQSxjQUFBO0FBSFI7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEVBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDRSxZQUFBO0FBSkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnY3NzL21peGlucy9yZXNwb25zaXZlJztcXHJcXG5cXHJcXG4ubWFya2V0X3NjdGlvbntcXHJcXG4gICAgLy8gcGFkZGluZzogMCAxNXB4IDE1cHggMTVweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxZnIsIDFmcikpO1xcclxcbiAgICBnYXA6IDEwcHggMTBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tYXJrZXRfaXRlbV9pbWFnZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvLyBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgIC5wcmljZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmltYWdlIHtcXHJcXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1hcmtldF9pdGVte1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2QzZGM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KVxcclxcbn1cXHJcXG5cXHJcXG4ubWFya2V0X2l0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFya2V0X2l0ZW1fbW9kZWwge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdFdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0V3JhcHBlcjphY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cIixcIiRleHRyYS1zbWFsbC13aWR0aDogNDgwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNzY3cHg7XFxyXFxuJHRhYmxldC13aWR0aDogNzY4cHg7XFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEwNzRweDtcXHJcXG4kYmlnLWRlc2t0b3Atd2lkdGg6IDE0NDBweDtcXHJcXG5cXHJcXG5AbWl4aW4gZXh0cmFTbWFsbCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMjBweCkgYW5kIChtYXgtd2lkdGg6ICN7JGV4dHJhLXNtYWxsLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogI3skbW9iaWxlLXdpZHRofSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBiaWdEZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1hcmtldF9zY3Rpb25cIjogXCJtYXJrZXRfc2VjdGlvbl9tYXJrZXRfc2N0aW9uX18zSFJWdFwiLFxuXHRcIm1hcmtldF9pdGVtX2ltYWdlXCI6IFwibWFya2V0X3NlY3Rpb25fbWFya2V0X2l0ZW1faW1hZ2VfX3hxclhSXCIsXG5cdFwicHJpY2VcIjogXCJtYXJrZXRfc2VjdGlvbl9wcmljZV9fdmNTQlRcIixcblx0XCJpbWFnZVwiOiBcIm1hcmtldF9zZWN0aW9uX2ltYWdlX18yZEdHOFwiLFxuXHRcIm1hcmtldF9pdGVtXCI6IFwibWFya2V0X3NlY3Rpb25fbWFya2V0X2l0ZW1fXzM5eGQ3XCIsXG5cdFwibWFya2V0X2l0ZW1fbW9kZWxcIjogXCJtYXJrZXRfc2VjdGlvbl9tYXJrZXRfaXRlbV9tb2RlbF9fMTZZV2VcIixcblx0XCJlZGl0V3JhcHBlclwiOiBcIm1hcmtldF9zZWN0aW9uX2VkaXRXcmFwcGVyX18zdVVHaVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=