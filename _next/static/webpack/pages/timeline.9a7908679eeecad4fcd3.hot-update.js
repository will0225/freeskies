webpackHotUpdate_N_E("pages/timeline",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./containers/Timeline/styles/timeline.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./containers/Timeline/styles/timeline.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".timeline_timeline__mY-nJ {\n  width: 50%;\n  margin: 20px auto;\n}\n\n@media (max-width: 767px) {\n  .timeline_timeline__mY-nJ {\n    width: 90%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1073px) {\n  .timeline_timeline__mY-nJ {\n    width: 80%;\n  }\n}\n\n@media (min-width: 1074px) and (max-width: 1439px) {\n  .timeline_timeline__mY-nJ {\n    width: 60%;\n  }\n}\n\n.timeline_createPostInput__Xrg8W {\n  border-radius: 50px;\n  height: 50px;\n  color: black;\n  flex: 3;\n  padding: 5px;\n  color: black;\n  padding-left: 20px;\n  background-color: #dae1e8;\n  margin-left: 15px;\n}\n\n.timeline_createPostInput__Xrg8W:hover {\n  background-color: #b3bbc3;\n}\n\n.timeline_createPostInput__Xrg8W::-moz-placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W:-ms-input-placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W::placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W::-moz-placeholder {\n  color: black;\n}\n\n.timeline_createPostInput__Xrg8W::-webkit-input-placeholder {\n  color: black;\n}\n\n.timeline_createPostDiv__1JJhj {\n  display: flex;\n  background: white;\n  border-radius: 7px;\n  padding: 6px;\n}\n\n.timeline_mobile_profile_header__TFfnT {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .timeline_mobile_profile_header__TFfnT {\n    display: block;\n    position: fixed;\n    width: 100%;\n    z-index: 900;\n    background: #4490d6;\n    color: white;\n    top: 0;\n    text-align: center;\n    transition: top 0.6s;\n  }\n}", "",{"version":3,"sources":["E:/freeskies_fe_code/containers/Timeline/styles/timeline.module.scss","E:/freeskies_fe_code/css/mixins/_responsive.scss"],"names":[],"mappings":"AAEA;EACE,UAAA;EACA,iBAAA;AADF;;ACUE;EDXF;IAKI,UAAA;EAAF;AACF;;ACWE;EDjBF;IASI,UAAA;EACF;AACF;;ACYE;EDvBF;IAaI,UAAA;EAEF;AACF;;AACA;EACE,mBAAA;EACA,YAAA;EACA,YAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;AAEF;;AAAA;EACE,yBAAA;AAGF;;AAAA;EACE,YAAA;AAGF;;AAJA;EACE,YAAA;AAGF;;AAJA;EACE,YAAA;AAGF;;AADA;EACE,YAAA;AAIF;;AADA;EACE,YAAA;AAIF;;AADA;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;AAIF;;AADA;EACE,aAAA;AAIF;;AC5CE;EDuCF;IAGK,cAAA;IACA,eAAA;IACA,WAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;IACA,MAAA;IACA,kBAAA;IACA,oBAAA;EAMH;AACF","file":"timeline.module.scss","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.timeline {\r\n  width: 50%;\r\n  margin: 20px auto;\r\n\r\n  @include mobile {\r\n    width: 90%;\r\n  }\r\n\r\n  @include tablet {\r\n    width: 80%;\r\n  }\r\n\r\n  @include desktop {\r\n    width: 60%;\r\n  }\r\n}\r\n\r\n.createPostInput {\r\n  border-radius: 50px;\r\n  height: 50px;\r\n  color: black;\r\n  flex: 3;\r\n  padding: 5px;\r\n  color: black;\r\n  padding-left: 20px;\r\n  background-color: #dae1e8;\r\n  margin-left: 15px;\r\n}\r\n.createPostInput:hover {\r\n  background-color: #b3bbc3;\r\n}\r\n\r\n.createPostInput::placeholder{\r\n  color: black;\r\n}\r\n.createPostInput::-moz-placeholder {\r\n  color: black;\r\n}\r\n\r\n.createPostInput::-webkit-input-placeholder {\r\n  color: black\r\n}\r\n\r\n.createPostDiv {\r\n  display: flex;\r\n  background: white;\r\n  border-radius: 7px;\r\n  padding: 6px;\r\n}\r\n\r\n.mobile_profile_header{\r\n  display: none;\r\n   @include mobile {\r\n     display: block;\r\n     position: fixed;\r\n     width: 100%;\r\n     z-index: 900;\r\n     background: #4490d6;\r\n     color: white;\r\n     top: 0;\r\n     text-align: center;\r\n     transition: top 0.6s;\r\n   }\r\n}","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"timeline": "timeline_timeline__mY-nJ",
	"createPostInput": "timeline_createPostInput__Xrg8W",
	"createPostDiv": "timeline_createPostDiv__1JJhj",
	"mobile_profile_header": "timeline_mobile_profile_header__TFfnT"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9zdHlsZXMvdGltZWxpbmUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyw4QkFBOEIsZUFBZSxzQkFBc0IsR0FBRywrQkFBK0IsK0JBQStCLGlCQUFpQixLQUFLLEdBQUcsdURBQXVELCtCQUErQixpQkFBaUIsS0FBSyxHQUFHLHdEQUF3RCwrQkFBK0IsaUJBQWlCLEtBQUssR0FBRyxzQ0FBc0Msd0JBQXdCLGlCQUFpQixpQkFBaUIsWUFBWSxpQkFBaUIsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsc0JBQXNCLEdBQUcsNENBQTRDLDhCQUE4QixHQUFHLHdEQUF3RCxpQkFBaUIsR0FBRyw0REFBNEQsaUJBQWlCLEdBQUcsbURBQW1ELGlCQUFpQixHQUFHLHdEQUF3RCxpQkFBaUIsR0FBRyxpRUFBaUUsaUJBQWlCLEdBQUcsb0NBQW9DLGtCQUFrQixzQkFBc0IsdUJBQXVCLGlCQUFpQixHQUFHLDRDQUE0QyxrQkFBa0IsR0FBRywrQkFBK0IsNENBQTRDLHFCQUFxQixzQkFBc0Isa0JBQWtCLG1CQUFtQiwwQkFBMEIsbUJBQW1CLGFBQWEseUJBQXlCLDJCQUEyQixLQUFLLEdBQUcsT0FBTyw4S0FBOEssVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLHVGQUF1RixtQkFBbUIsaUJBQWlCLHdCQUF3QiwyQkFBMkIsbUJBQW1CLE9BQU8sMkJBQTJCLG1CQUFtQixPQUFPLDRCQUE0QixtQkFBbUIsT0FBTyxLQUFLLDBCQUEwQiwwQkFBMEIsbUJBQW1CLG1CQUFtQixjQUFjLG1CQUFtQixtQkFBbUIseUJBQXlCLGdDQUFnQyx3QkFBd0IsS0FBSyw0QkFBNEIsZ0NBQWdDLEtBQUssc0NBQXNDLG1CQUFtQixLQUFLLHdDQUF3QyxtQkFBbUIsS0FBSyxxREFBcUQsdUJBQXVCLHdCQUF3QixvQkFBb0Isd0JBQXdCLHlCQUF5QixtQkFBbUIsS0FBSywrQkFBK0Isb0JBQW9CLHdCQUF3Qix3QkFBd0IseUJBQXlCLHFCQUFxQixzQkFBc0IsNkJBQTZCLHNCQUFzQixnQkFBZ0IsNEJBQTRCLDhCQUE4QixRQUFRLEtBQUssNkJBQTZCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLCtCQUErQiwyQkFBMkIsaURBQWlELHlCQUF5QixHQUFHLGlCQUFpQixPQUFPLEtBQUssdUJBQXVCLDJCQUEyQixjQUFjLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUIsMkJBQTJCLGNBQWMsb0JBQW9CLHFCQUFxQixHQUFHLGlCQUFpQixPQUFPLEtBQUssd0JBQXdCLDJCQUEyQixlQUFlLG9CQUFvQix5QkFBeUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLDJCQUEyQiwyQkFBMkIsbUJBQW1CLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyxPQUFPO0FBQzNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjlhNzkwODY3OWVlZWNhZDRmY2QzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGltZWxpbmVfdGltZWxpbmVfX21ZLW5KIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAudGltZWxpbmVfdGltZWxpbmVfX21ZLW5KIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTA3M3B4KSB7XFxuICAudGltZWxpbmVfdGltZWxpbmVfX21ZLW5KIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNzRweCkgYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xcbiAgLnRpbWVsaW5lX3RpbWVsaW5lX19tWS1uSiB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmbGV4OiAzO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTFlODtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4udGltZWxpbmVfY3JlYXRlUG9zdElucHV0X19Ycmc4Vzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiYmMzO1xcbn1cXG5cXG4udGltZWxpbmVfY3JlYXRlUG9zdElucHV0X19Ycmc4Vzo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50aW1lbGluZV9jcmVhdGVQb3N0SW5wdXRfX1hyZzhXOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpbWVsaW5lX2NyZWF0ZVBvc3RJbnB1dF9fWHJnOFc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGltZWxpbmVfY3JlYXRlUG9zdERpdl9fMUpKaGoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4udGltZWxpbmVfbW9iaWxlX3Byb2ZpbGVfaGVhZGVyX19URmZuVCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC50aW1lbGluZV9tb2JpbGVfcHJvZmlsZV9oZWFkZXJfX1RGZm5UIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDkwMDtcXG4gICAgYmFja2dyb3VuZDogIzQ0OTBkNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuNnM7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L2ZyZWVza2llc19mZV9jb2RlL2NvbnRhaW5lcnMvVGltZWxpbmUvc3R5bGVzL3RpbWVsaW5lLm1vZHVsZS5zY3NzXCIsXCJFOi9mcmVlc2tpZXNfZmVfY29kZS9jc3MvbWl4aW5zL19yZXNwb25zaXZlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUNVRTtFRFhGO0lBS0ksVUFBQTtFQUFGO0FBQ0Y7O0FDV0U7RURqQkY7SUFTSSxVQUFBO0VBQ0Y7QUFDRjs7QUNZRTtFRHZCRjtJQWFJLFVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7QUFHRjs7QUFKQTtFQUNFLFlBQUE7QUFHRjs7QUFKQTtFQUNFLFlBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQzVDRTtFRHVDRjtJQUdLLGNBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxNQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtFQU1IO0FBQ0ZcIixcImZpbGVcIjpcInRpbWVsaW5lLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2Nzcy9taXhpbnMvcmVzcG9uc2l2ZSc7XFxyXFxuXFxyXFxuLnRpbWVsaW5lIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSB0YWJsZXQge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVQb3N0SW5wdXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZsZXg6IDM7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMWU4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcbi5jcmVhdGVQb3N0SW5wdXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYmJjMztcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZVBvc3RJbnB1dDo6cGxhY2Vob2xkZXJ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5jcmVhdGVQb3N0SW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlUG9zdElucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiBibGFja1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlUG9zdERpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGVfcHJvZmlsZV9oZWFkZXJ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgei1pbmRleDogOTAwO1xcclxcbiAgICAgYmFja2dyb3VuZDogIzQ0OTBkNjtcXHJcXG4gICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgIHRvcDogMDtcXHJcXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgIHRyYW5zaXRpb246IHRvcCAwLjZzO1xcclxcbiAgIH1cXHJcXG59XCIsXCIkZXh0cmEtc21hbGwtd2lkdGg6IDQ4MHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDc2N3B4O1xcclxcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xcclxcbiRkZXNrdG9wLXdpZHRoOiAxMDc0cHg7XFxyXFxuJGJpZy1kZXNrdG9wLXdpZHRoOiAxNDQwcHg7XFxyXFxuXFxyXFxuQG1peGluIGV4dHJhU21hbGwge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDIwcHgpIGFuZCAobWF4LXdpZHRoOiAjeyRleHRyYS1zbWFsbC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtb2JpbGUge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JG1vYmlsZS13aWR0aH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiB0YWJsZXQge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skYmlnLWRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYmlnRGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skYmlnLWRlc2t0b3Atd2lkdGh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aW1lbGluZVwiOiBcInRpbWVsaW5lX3RpbWVsaW5lX19tWS1uSlwiLFxuXHRcImNyZWF0ZVBvc3RJbnB1dFwiOiBcInRpbWVsaW5lX2NyZWF0ZVBvc3RJbnB1dF9fWHJnOFdcIixcblx0XCJjcmVhdGVQb3N0RGl2XCI6IFwidGltZWxpbmVfY3JlYXRlUG9zdERpdl9fMUpKaGpcIixcblx0XCJtb2JpbGVfcHJvZmlsZV9oZWFkZXJcIjogXCJ0aW1lbGluZV9tb2JpbGVfcHJvZmlsZV9oZWFkZXJfX1RGZm5UXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9