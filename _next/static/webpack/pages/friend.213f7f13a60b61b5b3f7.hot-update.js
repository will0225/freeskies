webpackHotUpdate_N_E("pages/friend",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./containers/Friend/styles/friends.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./containers/Friend/styles/friends.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".friends_friends_list__3o_JQ .friends_friend__7Omqr {\n  display: flex;\n}\n\n@media (max-width: 767px) {\n  .friends_friends_list__3o_JQ .friends_friend__7Omqr {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n  }\n}\n\n.friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_avatar__jtbhB {\n  width: 140px;\n  height: 140px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 5px;\n  background: #cccccc25;\n}\n\n@media (max-width: 767px) {\n  .friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_avatar__jtbhB {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n  }\n}\n\n.friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_avatar__jtbhB img {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_friend_name__nRueN {\n  font-size: 0.9em;\n  text-align: center;\n  padding: 0.5em 0.2em;\n}\n\n@media (max-width: 767px) {\n  .friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_friend_name__nRueN {\n    padding-left: 0.8em;\n  }\n}\n\n.friends_sections_content__3dw5c {\n  padding: 20px 15px 15px 15px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\n  gap: 10px 10px;\n}\n\n@media (max-width: 767px) {\n  .friends_sections_content__3dw5c {\n    grid-template-columns: 1fr 1fr;\n    height: 180px;\n    overflow-y: auto;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1073px) {\n  .friends_sections_content__3dw5c {\n    grid-template-columns: 1fr 1fr;\n  }\n}", "",{"version":3,"sources":["E:/freeskies_fe_code/containers/Friend/styles/friends.module.scss","E:/freeskies_fe_code/css/mixins/_responsive.scss"],"names":[],"mappings":"AAGI;EACE,aAAA;AAFN;;ACWE;EDVE;IAGI,aAAA;IACA,mBAAA;IACA,mBAAA;EAAN;AACF;;AAEM;EACE,YAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AAAR;;ACJE;EDFI;IASI,WAAA;IACA,YAAA;IACA,kBAAA;EACR;AACF;;AACQ;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,2BAAA;AACV;;AAGM;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;AADR;;ACvBE;EDqBI;IAMI,mBAAA;EAAR;AACF;;AAKA;EACI,4BAAA;EACA,aAAA;EACA,kCAAA;EACA,yDAAA;EACA,cAAA;AAFJ;;ACpCE;EDiCF;IAQQ,8BAAA;IACA,aAAA;IACA,gBAAA;EADN;AACF;;ACrCE;ED2BF;IAcQ,8BAAA;EAAN;AACF","file":"friends.module.scss","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.friends_list {\r\n    .friend {\r\n      display: flex;\r\n      @include mobile {\r\n        display: flex;\r\n        align-items: center;\r\n        margin-bottom: 10px;\r\n      }\r\n\r\n      .avatar {\r\n        width: 140px;\r\n        height: 140px;\r\n        overflow: hidden;\r\n        position: relative;\r\n        border-radius: 5px;\r\n        background: #cccccc25;\r\n\r\n        @include mobile {\r\n          width: 60px;\r\n          height: 60px;\r\n          border-radius: 50%;\r\n        }\r\n\r\n        img {\r\n          width: 100%;\r\n          height: auto;\r\n          position: absolute;\r\n          top: 50%;\r\n          transform: translateY(-50%);\r\n        }\r\n      }\r\n\r\n      .friend_name {\r\n        font-size: 0.9em;\r\n        text-align: center;\r\n        padding: 0.5em 0.2em;\r\n\r\n        @include mobile {\r\n          padding-left: 0.8em;\r\n        }\r\n      }\r\n    }\r\n}\r\n\r\n.sections_content {\r\n    padding: 20px 15px 15px 15px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\r\n    gap: 10px 10px;\r\n\r\n    @include mobile {\r\n        grid-template-columns: 1fr 1fr;\r\n        height: 180px;\r\n        overflow-y: auto;\r\n    }\r\n\r\n    @include tablet {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\r\n","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"friends_list": "friends_friends_list__3o_JQ",
	"friend": "friends_friend__7Omqr",
	"avatar": "friends_avatar__jtbhB",
	"friend_name": "friends_friend_name__nRueN",
	"sections_content": "friends_sections_content__3dw5c"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvc3R5bGVzL2ZyaWVuZHMubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx3REFBd0Qsa0JBQWtCLEdBQUcsK0JBQStCLHlEQUF5RCxvQkFBb0IsMEJBQTBCLDBCQUEwQixLQUFLLEdBQUcsZ0ZBQWdGLGlCQUFpQixrQkFBa0IscUJBQXFCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEdBQUcsK0JBQStCLGdGQUFnRixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLEdBQUcsb0ZBQW9GLGdCQUFnQixpQkFBaUIsdUJBQXVCLGFBQWEsZ0NBQWdDLEdBQUcscUZBQXFGLHFCQUFxQix1QkFBdUIseUJBQXlCLEdBQUcsK0JBQStCLHFGQUFxRiwwQkFBMEIsS0FBSyxHQUFHLHNDQUFzQyxpQ0FBaUMsa0JBQWtCLHVDQUF1Qyw4REFBOEQsbUJBQW1CLEdBQUcsK0JBQStCLHNDQUFzQyxxQ0FBcUMsb0JBQW9CLHVCQUF1QixLQUFLLEdBQUcsdURBQXVELHNDQUFzQyxxQ0FBcUMsS0FBSyxHQUFHLE9BQU8sMktBQTJLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxzRkFBc0YsdUJBQXVCLGlCQUFpQix3QkFBd0IsMkJBQTJCLDBCQUEwQixnQ0FBZ0MsZ0NBQWdDLFdBQVcsdUJBQXVCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLCtCQUErQiwrQkFBK0Isa0NBQWtDLGlDQUFpQywwQkFBMEIsMkJBQTJCLGlDQUFpQyxhQUFhLHFCQUFxQiwwQkFBMEIsMkJBQTJCLGlDQUFpQyx1QkFBdUIsMENBQTBDLGFBQWEsV0FBVyw0QkFBNEIsNkJBQTZCLCtCQUErQixpQ0FBaUMsaUNBQWlDLGtDQUFrQyxhQUFhLFdBQVcsU0FBUyxLQUFLLDJCQUEyQixxQ0FBcUMsc0JBQXNCLDJDQUEyQyxrRUFBa0UsdUJBQXVCLDZCQUE2QiwyQ0FBMkMsMEJBQTBCLDZCQUE2QixTQUFTLDZCQUE2QiwyQ0FBMkMsU0FBUyxLQUFLLGlDQUFpQyx5QkFBeUIseUJBQXlCLDJCQUEyQiwrQkFBK0IsMkJBQTJCLGlEQUFpRCx5QkFBeUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QiwyQkFBMkIsY0FBYyxHQUFHLGlCQUFpQixPQUFPLEtBQUssdUJBQXVCLDJCQUEyQixjQUFjLG9CQUFvQixxQkFBcUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHdCQUF3QiwyQkFBMkIsZUFBZSxvQkFBb0IseUJBQXlCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSywyQkFBMkIsMkJBQTJCLG1CQUFtQixHQUFHLGlCQUFpQixPQUFPLEtBQUssT0FBTztBQUM3OEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZyaWVuZC4yMTNmN2YxM2E2MGI2MWI1YjNmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZyaWVuZHNfZnJpZW5kc19saXN0X18zb19KUSAuZnJpZW5kc19mcmllbmRfXzdPbXFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZyaWVuZHNfZnJpZW5kc19saXN0X18zb19KUSAuZnJpZW5kc19mcmllbmRfXzdPbXFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuLmZyaWVuZHNfZnJpZW5kc19saXN0X18zb19KUSAuZnJpZW5kc19mcmllbmRfXzdPbXFyIC5mcmllbmRzX2F2YXRhcl9fanRiaEIge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjY2NjY2NjMjU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZyaWVuZHNfZnJpZW5kc19saXN0X18zb19KUSAuZnJpZW5kc19mcmllbmRfXzdPbXFyIC5mcmllbmRzX2F2YXRhcl9fanRiaEIge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9XFxufVxcblxcbi5mcmllbmRzX2ZyaWVuZHNfbGlzdF9fM29fSlEgLmZyaWVuZHNfZnJpZW5kX183T21xciAuZnJpZW5kc19hdmF0YXJfX2p0YmhCIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uZnJpZW5kc19mcmllbmRzX2xpc3RfXzNvX0pRIC5mcmllbmRzX2ZyaWVuZF9fN09tcXIgLmZyaWVuZHNfZnJpZW5kX25hbWVfX25SdWVOIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVlbSAwLjJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuZnJpZW5kc19mcmllbmRzX2xpc3RfXzNvX0pRIC5mcmllbmRzX2ZyaWVuZF9fN09tcXIgLmZyaWVuZHNfZnJpZW5kX25hbWVfX25SdWVOIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhlbTtcXG4gIH1cXG59XFxuXFxuLmZyaWVuZHNfc2VjdGlvbnNfY29udGVudF9fM2R3NWMge1xcbiAgcGFkZGluZzogMjBweCAxNXB4IDE1cHggMTVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxZnIsIDFmcikpO1xcbiAgZ2FwOiAxMHB4IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZyaWVuZHNfc2VjdGlvbnNfY29udGVudF9fM2R3NWMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwNzNweCkge1xcbiAgLmZyaWVuZHNfc2VjdGlvbnNfY29udGVudF9fM2R3NWMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L2ZyZWVza2llc19mZV9jb2RlL2NvbnRhaW5lcnMvRnJpZW5kL3N0eWxlcy9mcmllbmRzLm1vZHVsZS5zY3NzXCIsXCJFOi9mcmVlc2tpZXNfZmVfY29kZS9jc3MvbWl4aW5zL19yZXNwb25zaXZlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0k7RUFDRSxhQUFBO0FBRk47O0FDV0U7RURWRTtJQUdJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBQU47QUFDRjs7QUFFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBUjs7QUNKRTtFREZJO0lBU0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUNSO0FBQ0Y7O0FBQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ1Y7O0FBR007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUN2QkU7RURxQkk7SUFNSSxtQkFBQTtFQUFSO0FBQ0Y7O0FBS0E7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHlEQUFBO0VBQ0EsY0FBQTtBQUZKOztBQ3BDRTtFRGlDRjtJQVFRLDhCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VBRE47QUFDRjs7QUNyQ0U7RUQyQkY7SUFjUSw4QkFBQTtFQUFOO0FBQ0ZcIixcImZpbGVcIjpcImZyaWVuZHMubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnY3NzL21peGlucy9yZXNwb25zaXZlJztcXHJcXG5cXHJcXG4uZnJpZW5kc19saXN0IHtcXHJcXG4gICAgLmZyaWVuZCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYXZhdGFyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxNDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTQwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2NjY2NjYzI1O1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZnJpZW5kX25hbWUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuMmVtO1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjhlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25zX2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMTVweCAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDFmciwgMWZyKSk7XFxyXFxuICAgIGdhcDogMTBweCAxMHB4O1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIiRleHRyYS1zbWFsbC13aWR0aDogNDgwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNzY3cHg7XFxyXFxuJHRhYmxldC13aWR0aDogNzY4cHg7XFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEwNzRweDtcXHJcXG4kYmlnLWRlc2t0b3Atd2lkdGg6IDE0NDBweDtcXHJcXG5cXHJcXG5AbWl4aW4gZXh0cmFTbWFsbCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMjBweCkgYW5kIChtYXgtd2lkdGg6ICN7JGV4dHJhLXNtYWxsLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogI3skbW9iaWxlLXdpZHRofSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBiaWdEZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImZyaWVuZHNfbGlzdFwiOiBcImZyaWVuZHNfZnJpZW5kc19saXN0X18zb19KUVwiLFxuXHRcImZyaWVuZFwiOiBcImZyaWVuZHNfZnJpZW5kX183T21xclwiLFxuXHRcImF2YXRhclwiOiBcImZyaWVuZHNfYXZhdGFyX19qdGJoQlwiLFxuXHRcImZyaWVuZF9uYW1lXCI6IFwiZnJpZW5kc19mcmllbmRfbmFtZV9fblJ1ZU5cIixcblx0XCJzZWN0aW9uc19jb250ZW50XCI6IFwiZnJpZW5kc19zZWN0aW9uc19jb250ZW50X18zZHc1Y1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==