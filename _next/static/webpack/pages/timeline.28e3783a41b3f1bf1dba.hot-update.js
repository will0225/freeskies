webpackHotUpdate_N_E("pages/timeline",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/timeline/styles/comment.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/timeline/styles/comment.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".comment_comments__3sogy {\n  border-top: 1px solid #e9e8e880;\n  border-bottom: 1px solid #e9e8e880;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment_comments__3sogy.comment_modal_mode__g8sR7 {\n  border-color: #fff;\n  border-bottom: none;\n  border-radius: 0;\n}\n\n.comment_comments__3sogy .comment_comments_wrapper__1uF_N {\n  flex-grow: 1;\n  overflow-y: auto;\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O {\n  display: flex;\n  align-items: flex-start;\n  margin: 1em 1.5em;\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O .comment_avatar__3hjFf {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O .comment_message__15_GF {\n  font-size: 0.9em;\n  background: #e2e2e2;\n  border-radius: 10px;\n  padding: 0.7em 1em;\n  position: relative;\n  min-height: 40px;\n  margin-left: 1em;\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O .comment_message__15_GF:last-child {\n  margin-bottom: 0;\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O .comment_message__15_GF::after {\n  content: \"\";\n  position: absolute;\n  top: 16px;\n  left: 0;\n  width: 0;\n  height: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid transparent;\n  border-right: 5px solid #e2e2e2;\n  transform: translateX(-100%);\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O .comment_message__15_GF .comment_author__1NBCf {\n  display: block;\n  font-weight: bold;\n  font-size: 0.8em;\n  cursor: pointer;\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O.comment_not_mine__1ZsKI .comment_message__15_GF {\n  background: #f0f0f0;\n}\n\n.comment_comments__3sogy .comment_comment_item__7ez8O.comment_not_mine__1ZsKI .comment_message__15_GF::after {\n  border-right: 5px solid #f0f0f0;\n}\n\n.comment_comment_box__3D9h- {\n  border-top: 1px solid #e9e8e880;\n  padding: 1em 1.5em;\n  display: flex;\n}\n\n.comment_comment_box__3D9h- .comment_avatar__3hjFf {\n  margin-right: 1em;\n}\n\n.comment_comment_box__3D9h- .comment_input__2970u {\n  flex: 1;\n}", "",{"version":3,"sources":["E:/freeskies_fe_code/components/timeline/styles/comment.module.scss"],"names":[],"mappings":"AAAA;EACE,+BAAA;EACA,kCAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;AACF;;AACE;EACE,kBAAA;EACA,mBAAA;EACA,gBAAA;AACJ;;AAGE;EACE,YAAA;EACA,gBAAA;AADJ;;AAIE;EACE,aAAA;EACA,uBAAA;EACA,iBAAA;AAFJ;;AAMI;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAJN;;AAOI;EACE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EAGA,gBAAA;AAPN;;AASM;EACE,gBAAA;AAPR;;AAUM;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,QAAA;EACA,SAAA;EACA,iCAAA;EACA,oCAAA;EACA,kCAAA;EACA,+BAAA;EACA,4BAAA;AATR;;AAYM;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AAVR;;AAeM;EACE,mBAAA;AAbR;;AAeQ;EACE,+BAAA;AAbV;;AAoBA;EACE,+BAAA;EACA,kBAAA;EACA,aAAA;AAjBF;;AAmBE;EAKE,iBAAA;AArBJ;;AAwBE;EACE,OAAA;AAtBJ","file":"comment.module.scss","sourcesContent":[".comments {\r\n  border-top: 1px solid #e9e8e880;\r\n  border-bottom: 1px solid #e9e8e880;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  &.modal_mode {\r\n    border-color: #fff;\r\n    border-bottom: none;\r\n    border-radius: 0;\r\n    // background: #000;\r\n  }\r\n\r\n  .comments_wrapper {\r\n    flex-grow: 1;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .comment_item {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    margin: 1em 1.5em;\r\n    // align-items: center;\r\n    // justify-content: center;\r\n\r\n    .avatar {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n\r\n    .message {\r\n      font-size: 0.9em;\r\n      background: #e2e2e2;\r\n      border-radius: 10px;\r\n      padding: 0.7em 1em;\r\n      position: relative;\r\n      min-height: 40px;\r\n      // margin-bottom: 20px;\r\n      // margin-right: 1em;\r\n      margin-left: 1em;\r\n\r\n      &:last-child {\r\n        margin-bottom: 0;\r\n      }\r\n\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 16px;\r\n        left: 0;\r\n        // margin: auto;\r\n        width: 0;\r\n        height: 0;\r\n        border-top: 5px solid transparent;\r\n        border-bottom: 5px solid transparent;\r\n        border-left: 5px solid transparent;\r\n        border-right: 5px solid #e2e2e2;\r\n        transform: translateX(-100%);\r\n      }\r\n\r\n      .author {\r\n        display: block;\r\n        font-weight: bold;\r\n        font-size: 0.8em;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n\r\n    &.not_mine {\r\n      .message {\r\n        background: #f0f0f0;\r\n\r\n        &::after {\r\n          border-right: 5px solid #f0f0f0;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.comment_box {\r\n  border-top: 1px solid #e9e8e880;\r\n  padding: 1em 1.5em;\r\n  display: flex;\r\n\r\n  .avatar {\r\n    // border-radius: 50%;\r\n    // overflow: hidden;\r\n    // width: 35px;\r\n    // height: 35px;\r\n    margin-right: 1em;\r\n  }\r\n\r\n  .input {\r\n    flex: 1;\r\n  }\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"comments": "comment_comments__3sogy",
	"modal_mode": "comment_modal_mode__g8sR7",
	"comments_wrapper": "comment_comments_wrapper__1uF_N",
	"comment_item": "comment_comment_item__7ez8O",
	"avatar": "comment_avatar__3hjFf",
	"message": "comment_message__15_GF",
	"author": "comment_author__1NBCf",
	"not_mine": "comment_not_mine__1ZsKI",
	"comment_box": "comment_comment_box__3D9h-",
	"input": "comment_input__2970u"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9zdHlsZXMvY29tbWVudC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2QixvQ0FBb0MsdUNBQXVDLFlBQVksa0JBQWtCLDJCQUEyQixHQUFHLHdEQUF3RCx1QkFBdUIsd0JBQXdCLHFCQUFxQixHQUFHLCtEQUErRCxpQkFBaUIscUJBQXFCLEdBQUcsMkRBQTJELGtCQUFrQiw0QkFBNEIsc0JBQXNCLEdBQUcsa0ZBQWtGLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsbUZBQW1GLHFCQUFxQix3QkFBd0Isd0JBQXdCLHVCQUF1Qix1QkFBdUIscUJBQXFCLHFCQUFxQixHQUFHLDhGQUE4RixxQkFBcUIsR0FBRywwRkFBMEYsa0JBQWtCLHVCQUF1QixjQUFjLFlBQVksYUFBYSxjQUFjLHNDQUFzQyx5Q0FBeUMsdUNBQXVDLG9DQUFvQyxpQ0FBaUMsR0FBRywwR0FBMEcsbUJBQW1CLHNCQUFzQixxQkFBcUIsb0JBQW9CLEdBQUcsMkdBQTJHLHdCQUF3QixHQUFHLGtIQUFrSCxvQ0FBb0MsR0FBRyxpQ0FBaUMsb0NBQW9DLHVCQUF1QixrQkFBa0IsR0FBRyx3REFBd0Qsc0JBQXNCLEdBQUcsdURBQXVELFlBQVksR0FBRyxPQUFPLDBIQUEwSCxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxrRUFBa0Usc0NBQXNDLHlDQUF5QyxjQUFjLG9CQUFvQiw2QkFBNkIsd0JBQXdCLDJCQUEyQiw0QkFBNEIseUJBQXlCLDRCQUE0QixPQUFPLDZCQUE2QixxQkFBcUIseUJBQXlCLE9BQU8seUJBQXlCLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLCtCQUErQixtQ0FBbUMscUJBQXFCLHdCQUF3QixpQ0FBaUMsOEJBQThCLFNBQVMsc0JBQXNCLDJCQUEyQiw4QkFBOEIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsMkJBQTJCLGlDQUFpQywrQkFBK0IsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsV0FBVyx3QkFBd0Isd0JBQXdCLCtCQUErQixzQkFBc0Isb0JBQW9CLDRCQUE0QixxQkFBcUIsc0JBQXNCLDhDQUE4QyxpREFBaUQsK0NBQStDLDRDQUE0Qyx5Q0FBeUMsV0FBVyx1QkFBdUIsMkJBQTJCLDhCQUE4Qiw2QkFBNkIsNEJBQTRCLFdBQVcsU0FBUyx3QkFBd0Isb0JBQW9CLGdDQUFnQywwQkFBMEIsOENBQThDLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxzQkFBc0Isc0NBQXNDLHlCQUF5QixvQkFBb0IsbUJBQW1CLDhCQUE4Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsT0FBTyxrQkFBa0IsZ0JBQWdCLE9BQU8sS0FBSyxPQUFPO0FBQ3ovSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjI4ZTM3ODNhNDFiM2YxYmYxZGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29tbWVudF9jb21tZW50c19fM3NvZ3kge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU4ZTg4MDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOGU4ODA7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50X2NvbW1lbnRzX18zc29neS5jb21tZW50X21vZGFsX21vZGVfX2c4c1I3IHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4uY29tbWVudF9jb21tZW50c19fM3NvZ3kgLmNvbW1lbnRfY29tbWVudHNfd3JhcHBlcl9fMXVGX04ge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNvbW1lbnRfY29tbWVudHNfXzNzb2d5IC5jb21tZW50X2NvbW1lbnRfaXRlbV9fN2V6OE8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxZW0gMS41ZW07XFxufVxcblxcbi5jb21tZW50X2NvbW1lbnRzX18zc29neSAuY29tbWVudF9jb21tZW50X2l0ZW1fXzdlejhPIC5jb21tZW50X2F2YXRhcl9fM2hqRmYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudF9jb21tZW50c19fM3NvZ3kgLmNvbW1lbnRfY29tbWVudF9pdGVtX183ZXo4TyAuY29tbWVudF9tZXNzYWdlX18xNV9HRiB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjdlbSAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuLmNvbW1lbnRfY29tbWVudHNfXzNzb2d5IC5jb21tZW50X2NvbW1lbnRfaXRlbV9fN2V6OE8gLmNvbW1lbnRfbWVzc2FnZV9fMTVfR0Y6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uY29tbWVudF9jb21tZW50c19fM3NvZ3kgLmNvbW1lbnRfY29tbWVudF9pdGVtX183ZXo4TyAuY29tbWVudF9tZXNzYWdlX18xNV9HRjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2cHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2UyZTJlMjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi5jb21tZW50X2NvbW1lbnRzX18zc29neSAuY29tbWVudF9jb21tZW50X2l0ZW1fXzdlejhPIC5jb21tZW50X21lc3NhZ2VfXzE1X0dGIC5jb21tZW50X2F1dGhvcl9fMU5CQ2Yge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50X2NvbW1lbnRzX18zc29neSAuY29tbWVudF9jb21tZW50X2l0ZW1fXzdlejhPLmNvbW1lbnRfbm90X21pbmVfXzFac0tJIC5jb21tZW50X21lc3NhZ2VfXzE1X0dGIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcblxcbi5jb21tZW50X2NvbW1lbnRzX18zc29neSAuY29tbWVudF9jb21tZW50X2l0ZW1fXzdlejhPLmNvbW1lbnRfbm90X21pbmVfXzFac0tJIC5jb21tZW50X21lc3NhZ2VfXzE1X0dGOjphZnRlciB7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZjBmMGYwO1xcbn1cXG5cXG4uY29tbWVudF9jb21tZW50X2JveF9fM0Q5aC0ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU4ZTg4MDtcXG4gIHBhZGRpbmc6IDFlbSAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb21tZW50X2NvbW1lbnRfYm94X18zRDloLSAuY29tbWVudF9hdmF0YXJfXzNoakZmIHtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4uY29tbWVudF9jb21tZW50X2JveF9fM0Q5aC0gLmNvbW1lbnRfaW5wdXRfXzI5NzB1IHtcXG4gIGZsZXg6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L2ZyZWVza2llc19mZV9jb2RlL2NvbXBvbmVudHMvdGltZWxpbmUvc3R5bGVzL2NvbW1lbnQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBTUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpOOztBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7QUFQTjs7QUFTTTtFQUNFLGdCQUFBO0FBUFI7O0FBVU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQVRSOztBQVlNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVlI7O0FBZU07RUFDRSxtQkFBQTtBQWJSOztBQWVRO0VBQ0UsK0JBQUE7QUFiVjs7QUFvQkE7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWpCRjs7QUFtQkU7RUFLRSxpQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxPQUFBO0FBdEJKXCIsXCJmaWxlXCI6XCJjb21tZW50Lm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb21tZW50cyB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZThlODgwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU4ZTg4MDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICYubW9kYWxfbW9kZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50c193cmFwcGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW46IDFlbSAxLjVlbTtcXHJcXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC5hdmF0YXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZXNzYWdlIHtcXHJcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjdlbSAxZW07XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDFlbTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xcclxcblxcclxcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMTZweDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZTJlMmUyO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmF1dGhvciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5ub3RfbWluZSB7XFxyXFxuICAgICAgLm1lc3NhZ2Uge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG5cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2YwZjBmMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfYm94IHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOGU4ODA7XFxyXFxuICBwYWRkaW5nOiAxZW0gMS41ZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgLmF2YXRhciB7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgLy8gd2lkdGg6IDM1cHg7XFxyXFxuICAgIC8vIGhlaWdodDogMzVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5wdXQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb21tZW50c1wiOiBcImNvbW1lbnRfY29tbWVudHNfXzNzb2d5XCIsXG5cdFwibW9kYWxfbW9kZVwiOiBcImNvbW1lbnRfbW9kYWxfbW9kZV9fZzhzUjdcIixcblx0XCJjb21tZW50c193cmFwcGVyXCI6IFwiY29tbWVudF9jb21tZW50c193cmFwcGVyX18xdUZfTlwiLFxuXHRcImNvbW1lbnRfaXRlbVwiOiBcImNvbW1lbnRfY29tbWVudF9pdGVtX183ZXo4T1wiLFxuXHRcImF2YXRhclwiOiBcImNvbW1lbnRfYXZhdGFyX18zaGpGZlwiLFxuXHRcIm1lc3NhZ2VcIjogXCJjb21tZW50X21lc3NhZ2VfXzE1X0dGXCIsXG5cdFwiYXV0aG9yXCI6IFwiY29tbWVudF9hdXRob3JfXzFOQkNmXCIsXG5cdFwibm90X21pbmVcIjogXCJjb21tZW50X25vdF9taW5lX18xWnNLSVwiLFxuXHRcImNvbW1lbnRfYm94XCI6IFwiY29tbWVudF9jb21tZW50X2JveF9fM0Q5aC1cIixcblx0XCJpbnB1dFwiOiBcImNvbW1lbnRfaW5wdXRfXzI5NzB1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9