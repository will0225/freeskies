webpackHotUpdate_N_E("pages/timeline",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./containers/Timeline/styles/timeline.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./containers/Timeline/styles/timeline.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timeline_timeline__mY-nJ {\n  width: 50%;\n  margin: 20px auto;\n}\n\n@media (max-width: 767px) {\n  .timeline_timeline__mY-nJ {\n    width: 90%;\n    margin-top: 100px;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1073px) {\n  .timeline_timeline__mY-nJ {\n    width: 80%;\n  }\n}\n\n@media (min-width: 1074px) and (max-width: 1439px) {\n  .timeline_timeline__mY-nJ {\n    width: 60%;\n  }\n}\n\n.timeline_createPostInput__Xrg8W {\n  border-radius: 50px;\n  height: 50px;\n  color: black;\n  flex: 3;\n  padding: 5px;\n  color: black;\n  padding-left: 20px;\n  background-color: #dae1e8;\n  margin-left: 15px;\n}\n\n.timeline_createPostInput__Xrg8W:hover {\n  background-color: #b3bbc3;\n}\n\n.timeline_createPostInput__Xrg8W::-moz-placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W:-ms-input-placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W::placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W::-moz-placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W::-webkit-input-placeholder {\n  color: black;\n}\n\n.timeline_createPostDiv__1JJhj {\n  display: flex;\n  background: white;\n  border-radius: 7px;\n  padding: 6px;\n}\n\n.timeline_mobile_profile_header__TFfnT {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .timeline_mobile_profile_header__TFfnT {\n    display: block;\n    position: fixed;\n    width: 100%;\n    z-index: 900;\n    background: #4490d6;\n    color: white;\n    top: 0;\n    text-align: center;\n    transition: top 0.6s;\n  }\n}", "",{"version":3,"sources":["webpack://containers/Timeline/styles/timeline.module.scss","webpack://css/mixins/_responsive.scss"],"names":[],"mappings":"AAEA;EACE,UAAA;EACA,iBAAA;AADF;;ACUE;EDXF;IAKI,UAAA;IACA,iBAAA;EAAF;AACF;;ACUE;EDjBF;IAUI,UAAA;EACF;AACF;;ACWE;EDvBF;IAcI,UAAA;EAEF;AACF;;AACA;EACE,mBAAA;EACA,YAAA;EACA,YAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;AAEF;;AAAA;EACE,yBAAA;AAGF;;AAAA;EACE,YAAA;AAGF;;AAJA;EACE,YAAA;AAGF;;AAJA;EACE,YAAA;AAGF;;AADA;EACE,YAAA;AAIF;;AADA;EACE,YAAA;AAIF;;AADA;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;AAIF;;AADA;EACE,aAAA;AAIF;;AC7CE;EDwCF;IAGK,cAAA;IACA,eAAA;IACA,WAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;IACA,MAAA;IACA,kBAAA;IACA,oBAAA;EAMH;AACF","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.timeline {\r\n  width: 50%;\r\n  margin: 20px auto;\r\n\r\n  @include mobile {\r\n    width: 90%;\r\n    margin-top: 100px;\r\n  }\r\n\r\n  @include tablet {\r\n    width: 80%;\r\n  }\r\n\r\n  @include desktop {\r\n    width: 60%;\r\n  }\r\n}\r\n\r\n.createPostInput {\r\n  border-radius: 50px;\r\n  height: 50px;\r\n  color: black;\r\n  flex: 3;\r\n  padding: 5px;\r\n  color: black;\r\n  padding-left: 20px;\r\n  background-color: #dae1e8;\r\n  margin-left: 15px;\r\n}\r\n.createPostInput:hover {\r\n  background-color: #b3bbc3;\r\n}\r\n\r\n.createPostInput::placeholder{\r\n  color: black;\r\n}\r\n.createPostInput::-moz-placeholder {\r\n  color: black;\r\n}\r\n\r\n.createPostInput::-webkit-input-placeholder {\r\n  color: black\r\n}\r\n\r\n.createPostDiv {\r\n  display: flex;\r\n  background: white;\r\n  border-radius: 7px;\r\n  padding: 6px;\r\n}\r\n\r\n.mobile_profile_header{\r\n  display: none;\r\n   @include mobile {\r\n     display: block;\r\n     position: fixed;\r\n     width: 100%;\r\n     z-index: 900;\r\n     background: #4490d6;\r\n     color: white;\r\n     top: 0;\r\n     text-align: center;\r\n     transition: top 0.6s;\r\n   }\r\n}","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"timeline": "timeline_timeline__mY-nJ",
	"createPostInput": "timeline_createPostInput__Xrg8W",
	"createPostDiv": "timeline_createPostDiv__1JJhj",
	"mobile_profile_header": "timeline_mobile_profile_header__TFfnT"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9zdHlsZXMvdGltZWxpbmUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrSUFBd0U7QUFDbEg7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDhCQUE4QixlQUFlLHNCQUFzQixHQUFHLCtCQUErQiwrQkFBK0IsaUJBQWlCLHdCQUF3QixLQUFLLEdBQUcsdURBQXVELCtCQUErQixpQkFBaUIsS0FBSyxHQUFHLHdEQUF3RCwrQkFBK0IsaUJBQWlCLEtBQUssR0FBRyxzQ0FBc0Msd0JBQXdCLGlCQUFpQixpQkFBaUIsWUFBWSxpQkFBaUIsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsc0JBQXNCLEdBQUcsNENBQTRDLDhCQUE4QixHQUFHLHdEQUF3RCxpQkFBaUIsR0FBRyw0REFBNEQsaUJBQWlCLEdBQUcsbURBQW1ELGlCQUFpQixHQUFHLHdEQUF3RCxpQkFBaUIsR0FBRyxpRUFBaUUsaUJBQWlCLEdBQUcsb0NBQW9DLGtCQUFrQixzQkFBc0IsdUJBQXVCLGlCQUFpQixHQUFHLDRDQUE0QyxrQkFBa0IsR0FBRywrQkFBK0IsNENBQTRDLHFCQUFxQixzQkFBc0Isa0JBQWtCLG1CQUFtQiwwQkFBMEIsbUJBQW1CLGFBQWEseUJBQXlCLDJCQUEyQixLQUFLLEdBQUcsT0FBTyx3SkFBd0osVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLE1BQU0sS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUsseURBQXlELG1CQUFtQixpQkFBaUIsd0JBQXdCLDJCQUEyQixtQkFBbUIsMEJBQTBCLE9BQU8sMkJBQTJCLG1CQUFtQixPQUFPLDRCQUE0QixtQkFBbUIsT0FBTyxLQUFLLDBCQUEwQiwwQkFBMEIsbUJBQW1CLG1CQUFtQixjQUFjLG1CQUFtQixtQkFBbUIseUJBQXlCLGdDQUFnQyx3QkFBd0IsS0FBSyw0QkFBNEIsZ0NBQWdDLEtBQUssc0NBQXNDLG1CQUFtQixLQUFLLHdDQUF3QyxtQkFBbUIsS0FBSyxxREFBcUQsdUJBQXVCLHdCQUF3QixvQkFBb0Isd0JBQXdCLHlCQUF5QixtQkFBbUIsS0FBSywrQkFBK0Isb0JBQW9CLHdCQUF3Qix3QkFBd0IseUJBQXlCLHFCQUFxQixzQkFBc0IsNkJBQTZCLHNCQUFzQixnQkFBZ0IsNEJBQTRCLDhCQUE4QixRQUFRLEtBQUssNkJBQTZCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLCtCQUErQiwyQkFBMkIsaURBQWlELHlCQUF5QixHQUFHLGlCQUFpQixPQUFPLEtBQUssdUJBQXVCLDJCQUEyQixjQUFjLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUIsMkJBQTJCLGNBQWMsb0JBQW9CLHFCQUFxQixHQUFHLGlCQUFpQixPQUFPLEtBQUssd0JBQXdCLDJCQUEyQixlQUFlLG9CQUFvQix5QkFBeUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLDJCQUEyQiwyQkFBMkIsbUJBQW1CLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcHNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuZDIxZDVkZGFmMzI3MTBkMjg5N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50aW1lbGluZV90aW1lbGluZV9fbVktbkoge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC50aW1lbGluZV90aW1lbGluZV9fbVktbkoge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTA3M3B4KSB7XFxuICAudGltZWxpbmVfdGltZWxpbmVfX21ZLW5KIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNzRweCkgYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xcbiAgLnRpbWVsaW5lX3RpbWVsaW5lX19tWS1uSiB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmbGV4OiAzO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTFlODtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4udGltZWxpbmVfY3JlYXRlUG9zdElucHV0X19Ycmc4Vzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiYmMzO1xcbn1cXG5cXG4udGltZWxpbmVfY3JlYXRlUG9zdElucHV0X19Ycmc4Vzo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpbWVsaW5lX2NyZWF0ZVBvc3RJbnB1dF9fWHJnOFc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGltZWxpbmVfY3JlYXRlUG9zdERpdl9fMUpKaGoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4udGltZWxpbmVfbW9iaWxlX3Byb2ZpbGVfaGVhZGVyX19URmZuVCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC50aW1lbGluZV9tb2JpbGVfcHJvZmlsZV9oZWFkZXJfX1RGZm5UIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDkwMDtcXG4gICAgYmFja2dyb3VuZDogIzQ0OTBkNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuNnM7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb250YWluZXJzL1RpbWVsaW5lL3N0eWxlcy90aW1lbGluZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL2Nzcy9taXhpbnMvX3Jlc3BvbnNpdmUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQURGOztBQ1VFO0VEWEY7SUFLSSxVQUFBO0lBQ0EsaUJBQUE7RUFBRjtBQUNGOztBQ1VFO0VEakJGO0lBVUksVUFBQTtFQUNGO0FBQ0Y7O0FDV0U7RUR2QkY7SUFjSSxVQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBSkE7RUFDRSxZQUFBO0FBR0Y7O0FBSkE7RUFDRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7QUFJRjs7QUM3Q0U7RUR3Q0Y7SUFHSyxjQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsTUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUFNSDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2Nzcy9taXhpbnMvcmVzcG9uc2l2ZSc7XFxyXFxuXFxyXFxuLnRpbWVsaW5lIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlUG9zdElucHV0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmbGV4OiAzO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTFlODtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG4uY3JlYXRlUG9zdElucHV0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2JiYzM7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVQb3N0SW5wdXQ6OnBsYWNlaG9sZGVye1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uY3JlYXRlUG9zdElucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZVBvc3RJbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZVBvc3REaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlX3Byb2ZpbGVfaGVhZGVye1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgIHotaW5kZXg6IDkwMDtcXHJcXG4gICAgIGJhY2tncm91bmQ6ICM0NDkwZDY7XFxyXFxuICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICB0b3A6IDA7XFxyXFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICB0cmFuc2l0aW9uOiB0b3AgMC42cztcXHJcXG4gICB9XFxyXFxufVwiLFwiJGV4dHJhLXNtYWxsLXdpZHRoOiA0ODBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA3NjdweDtcXHJcXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcXHJcXG4kZGVza3RvcC13aWR0aDogMTA3NHB4O1xcclxcbiRiaWctZGVza3RvcC13aWR0aDogMTQ0MHB4O1xcclxcblxcclxcbkBtaXhpbiBleHRyYVNtYWxsIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyMHB4KSBhbmQgKG1heC13aWR0aDogI3skZXh0cmEtc21hbGwtd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtb2JpbGUtd2lkdGh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdGFibGV0IHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGJpZy1kZXNrdG9wLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJpZ0Rlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGJpZy1kZXNrdG9wLXdpZHRofSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGltZWxpbmVcIjogXCJ0aW1lbGluZV90aW1lbGluZV9fbVktbkpcIixcblx0XCJjcmVhdGVQb3N0SW5wdXRcIjogXCJ0aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXXCIsXG5cdFwiY3JlYXRlUG9zdERpdlwiOiBcInRpbWVsaW5lX2NyZWF0ZVBvc3REaXZfXzFKSmhqXCIsXG5cdFwibW9iaWxlX3Byb2ZpbGVfaGVhZGVyXCI6IFwidGltZWxpbmVfbW9iaWxlX3Byb2ZpbGVfaGVhZGVyX19URmZuVFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=