webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./containers/Marketplace/styles/marketplace.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./containers/Marketplace/styles/marketplace.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".marketplace_body__38Una {\n  display: flex;\n}\n\n@media (max-width: 767px) {\n  .marketplace_body__38Una {\n    display: block;\n  }\n}\n\n.marketplace_menu__33F2d {\n  flex: 0.2;\n  min-height: 100vh;\n  background-color: #001529;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 250px;\n  padding-top: 100px;\n}\n\n@media (max-width: 767px) {\n  .marketplace_menu__33F2d {\n    display: none;\n  }\n}\n\n.marketplace_mobile_menu__2fg-H {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .marketplace_mobile_menu__2fg-H {\n    display: block;\n    width: 100%;\n    padding-top: 100px;\n  }\n}\n\n.marketplace_content__V9m43 {\n  flex: 1;\n  padding: 10px;\n  padding-left: 265px;\n}\n\n@media (max-width: 767px) {\n  .marketplace_content__V9m43 {\n    padding-left: 10px;\n  }\n}\n\n.marketplace_content__V9m43 .marketplace_marketMenu__2QhTU {\n  height: 50px;\n  background-color: blue;\n}\n\n.marketplace_addMarketContainer__2cIrq {\n  width: 100%;\n}\n\n.marketplace_market_detailContainer__17mSB {\n  color: white;\n  width: 100%;\n}\n\n.marketplace_market_detailContainer__17mSB .marketplace_detail_title__am_fz {\n  margin-top: 10px;\n}\n\n.marketplace_market_detailContainer__17mSB .marketplace_detail_category__wteXq {\n  margin-top: 10px;\n}\n\n.marketplace_market_detailContainer__17mSB .marketplace_detail_description__pV4ZS {\n  margin-top: 10px;\n}\n\n.marketplace_market_detailContainer__17mSB .marketplace_detail_price__39sxe {\n  margin-top: 10px;\n}\n\n.marketplace_market_detailContainer__17mSB .marketplace_detail_user__1kxYj {\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.marketplace_market_detailContainer__17mSB .marketplace_detail_username__3QXoE {\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\n.marketplace_market_detailContainer__17mSB .marketplace_detail_rating__18S2k {\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://containers/Marketplace/styles/marketplace.module.scss","webpack://css/mixins/_responsive.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;AADJ;;ACWE;EDXF;IAGM,cAAA;EACJ;AACF;;AAEA;EACI,SAAA;EACA,iBAAA;EACA,yBAAA;EACA,aAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,YAAA;EACA,kBAAA;AACJ;;ACNE;EDJF;IAWM,aAAA;EAGJ;AACF;;AADA;EACE,aAAA;AAIF;;ACfE;EDUF;IAGI,cAAA;IACA,WAAA;IACA,kBAAA;EAMF;AACF;;AAHA;EACI,OAAA;EACA,aAAA;EACA,mBAAA;AAMJ;;AC5BE;EDmBF;IAKM,kBAAA;EAQJ;AACF;;AAPI;EACE,YAAA;EACA,sBAAA;AASN;;AALA;EACI,WAAA;AAQJ;;AALA;EACI,YAAA;EACA,WAAA;AAQJ;;AAPK;EACE,gBAAA;AASP;;AAPK;EACE,gBAAA;AASP;;AAPK;EACC,gBAAA;AASN;;AAPK;EACC,gBAAA;AASN;;AAPK;EACE,aAAA;EACA,gBAAA;EACA,mBAAA;AASP;;AAPK;EACE,iBAAA;EACA,gBAAA;AASP;;AAPK;EACE,mBAAA;AASP","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.body {\r\n    display: flex;\r\n    @include mobile {\r\n      display: block;\r\n    }\r\n}\r\n\r\n.menu {\r\n    flex: 0.2;\r\n    min-height: 100vh;\r\n    background-color: #001529;\r\n    height: 100vh;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 250px;\r\n    padding-top: 100px;\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n}\r\n.mobile_menu {\r\n  display: none;\r\n  @include mobile {\r\n    display: block;\r\n    width: 100%;\r\n    padding-top: 100px\r\n  };\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n    padding: 10px;\r\n    padding-left: 265px;\r\n    @include mobile {\r\n      padding-left: 10px;\r\n    }\r\n    .marketMenu {\r\n      height: 50px;\r\n      background-color: blue;\r\n    }\r\n}\r\n\r\n.addMarketContainer{\r\n    width: 100%;\r\n}\r\n\r\n.market_detailContainer {\r\n    color: white;\r\n    width: 100%;\r\n     .detail_title {\r\n       margin-top: 10px;\r\n     }\r\n     .detail_category {\r\n       margin-top: 10px;\r\n     }\r\n     .detail_description {\r\n      margin-top: 10px;\r\n     }\r\n     .detail_price {\r\n      margin-top: 10px;\r\n     }\r\n     .detail_user{\r\n       display: flex;\r\n       margin-top: 10px;\r\n       margin-bottom: 20px;\r\n     }\r\n     .detail_username{\r\n       margin-left: 20px;\r\n       margin-top: 10px;\r\n     }\r\n     .detail_rating{\r\n       margin-bottom: 10px;\r\n     }\r\n     \r\n  }","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"body": "marketplace_body__38Una",
	"menu": "marketplace_menu__33F2d",
	"mobile_menu": "marketplace_mobile_menu__2fg-H",
	"content": "marketplace_content__V9m43",
	"marketMenu": "marketplace_marketMenu__2QhTU",
	"addMarketContainer": "marketplace_addMarketContainer__2cIrq",
	"market_detailContainer": "marketplace_market_detailContainer__17mSB",
	"detail_title": "marketplace_detail_title__am_fz",
	"detail_category": "marketplace_detail_category__wteXq",
	"detail_description": "marketplace_detail_description__pV4ZS",
	"detail_price": "marketplace_detail_price__39sxe",
	"detail_user": "marketplace_detail_user__1kxYj",
	"detail_username": "marketplace_detail_username__3QXoE",
	"detail_rating": "marketplace_detail_rating__18S2k"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9zdHlsZXMvbWFya2V0cGxhY2UubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrSUFBd0U7QUFDbEg7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZCQUE2QixrQkFBa0IsR0FBRywrQkFBK0IsOEJBQThCLHFCQUFxQixLQUFLLEdBQUcsOEJBQThCLGNBQWMsc0JBQXNCLDhCQUE4QixrQkFBa0Isb0JBQW9CLFlBQVksV0FBVyxpQkFBaUIsdUJBQXVCLEdBQUcsK0JBQStCLDhCQUE4QixvQkFBb0IsS0FBSyxHQUFHLHFDQUFxQyxrQkFBa0IsR0FBRywrQkFBK0IscUNBQXFDLHFCQUFxQixrQkFBa0IseUJBQXlCLEtBQUssR0FBRyxpQ0FBaUMsWUFBWSxrQkFBa0Isd0JBQXdCLEdBQUcsK0JBQStCLGlDQUFpQyx5QkFBeUIsS0FBSyxHQUFHLGdFQUFnRSxpQkFBaUIsMkJBQTJCLEdBQUcsNENBQTRDLGdCQUFnQixHQUFHLGdEQUFnRCxpQkFBaUIsZ0JBQWdCLEdBQUcsaUZBQWlGLHFCQUFxQixHQUFHLG9GQUFvRixxQkFBcUIsR0FBRyx1RkFBdUYscUJBQXFCLEdBQUcsaUZBQWlGLHFCQUFxQixHQUFHLGdGQUFnRixrQkFBa0IscUJBQXFCLHdCQUF3QixHQUFHLG9GQUFvRixzQkFBc0IscUJBQXFCLEdBQUcsa0ZBQWtGLHdCQUF3QixHQUFHLE9BQU8sOEpBQThKLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyx5REFBeUQsZUFBZSxzQkFBc0IseUJBQXlCLHlCQUF5QixTQUFTLEtBQUssZUFBZSxrQkFBa0IsMEJBQTBCLGtDQUFrQyxzQkFBc0Isd0JBQXdCLGdCQUFnQixlQUFlLHFCQUFxQiwyQkFBMkIseUJBQXlCLHdCQUF3QixTQUFTLEtBQUssa0JBQWtCLG9CQUFvQix1QkFBdUIsdUJBQXVCLG9CQUFvQixrQ0FBa0MsS0FBSyxrQkFBa0IsZ0JBQWdCLHNCQUFzQiw0QkFBNEIseUJBQXlCLDZCQUE2QixTQUFTLHFCQUFxQix1QkFBdUIsaUNBQWlDLFNBQVMsS0FBSyw0QkFBNEIsb0JBQW9CLEtBQUssaUNBQWlDLHFCQUFxQixvQkFBb0Isd0JBQXdCLDRCQUE0QixVQUFVLDJCQUEyQiw0QkFBNEIsVUFBVSw4QkFBOEIsMkJBQTJCLFVBQVUsd0JBQXdCLDJCQUEyQixVQUFVLHNCQUFzQix5QkFBeUIsNEJBQTRCLCtCQUErQixVQUFVLDBCQUEwQiw2QkFBNkIsNEJBQTRCLFVBQVUsd0JBQXdCLCtCQUErQixVQUFVLGdCQUFnQiw2QkFBNkIseUJBQXlCLHlCQUF5QiwyQkFBMkIsK0JBQStCLDJCQUEyQixpREFBaUQseUJBQXlCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUIsMkJBQTJCLGNBQWMsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QiwyQkFBMkIsY0FBYyxvQkFBb0IscUJBQXFCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx3QkFBd0IsMkJBQTJCLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLGlCQUFpQixPQUFPLEtBQUssMkJBQTJCLDJCQUEyQixtQkFBbUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QjtBQUN2MUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcmtldHBsYWNlLjIxNGZjZDM1Yjk3YmJiNDQyMTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFya2V0cGxhY2VfYm9keV9fMzhVbmEge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAubWFya2V0cGxhY2VfYm9keV9fMzhVbmEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLm1hcmtldHBsYWNlX21lbnVfXzMzRjJkIHtcXG4gIGZsZXg6IDAuMjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTUyOTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5tYXJrZXRwbGFjZV9tZW51X18zM0YyZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5tYXJrZXRwbGFjZV9tb2JpbGVfbWVudV9fMmZnLUgge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAubWFya2V0cGxhY2VfbW9iaWxlX21lbnVfXzJmZy1IIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICB9XFxufVxcblxcbi5tYXJrZXRwbGFjZV9jb250ZW50X19WOW00MyB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMjY1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLm1hcmtldHBsYWNlX2NvbnRlbnRfX1Y5bTQzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4ubWFya2V0cGxhY2VfY29udGVudF9fVjltNDMgLm1hcmtldHBsYWNlX21hcmtldE1lbnVfXzJRaFRVIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5tYXJrZXRwbGFjZV9hZGRNYXJrZXRDb250YWluZXJfXzJjSXJxIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFya2V0cGxhY2VfbWFya2V0X2RldGFpbENvbnRhaW5lcl9fMTdtU0Ige1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYXJrZXRwbGFjZV9tYXJrZXRfZGV0YWlsQ29udGFpbmVyX18xN21TQiAubWFya2V0cGxhY2VfZGV0YWlsX3RpdGxlX19hbV9meiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWFya2V0cGxhY2VfbWFya2V0X2RldGFpbENvbnRhaW5lcl9fMTdtU0IgLm1hcmtldHBsYWNlX2RldGFpbF9jYXRlZ29yeV9fd3RlWHEge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm1hcmtldHBsYWNlX21hcmtldF9kZXRhaWxDb250YWluZXJfXzE3bVNCIC5tYXJrZXRwbGFjZV9kZXRhaWxfZGVzY3JpcHRpb25fX3BWNFpTIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tYXJrZXRwbGFjZV9tYXJrZXRfZGV0YWlsQ29udGFpbmVyX18xN21TQiAubWFya2V0cGxhY2VfZGV0YWlsX3ByaWNlX18zOXN4ZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWFya2V0cGxhY2VfbWFya2V0X2RldGFpbENvbnRhaW5lcl9fMTdtU0IgLm1hcmtldHBsYWNlX2RldGFpbF91c2VyX18xa3hZaiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tYXJrZXRwbGFjZV9tYXJrZXRfZGV0YWlsQ29udGFpbmVyX18xN21TQiAubWFya2V0cGxhY2VfZGV0YWlsX3VzZXJuYW1lX18zUVhvRSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tYXJrZXRwbGFjZV9tYXJrZXRfZGV0YWlsQ29udGFpbmVyX18xN21TQiAubWFya2V0cGxhY2VfZGV0YWlsX3JhdGluZ19fMThTMmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbnRhaW5lcnMvTWFya2V0cGxhY2Uvc3R5bGVzL21hcmtldHBsYWNlLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vY3NzL21peGlucy9fcmVzcG9uc2l2ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksYUFBQTtBQURKOztBQ1dFO0VEWEY7SUFHTSxjQUFBO0VBQ0o7QUFDRjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQ05FO0VESkY7SUFXTSxhQUFBO0VBR0o7QUFDRjs7QUFEQTtFQUNFLGFBQUE7QUFJRjs7QUNmRTtFRFVGO0lBR0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTUo7O0FDNUJFO0VEbUJGO0lBS00sa0JBQUE7RUFRSjtBQUNGOztBQVBJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBU047O0FBTEE7RUFDSSxXQUFBO0FBUUo7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVFKOztBQVBLO0VBQ0UsZ0JBQUE7QUFTUDs7QUFQSztFQUNFLGdCQUFBO0FBU1A7O0FBUEs7RUFDQyxnQkFBQTtBQVNOOztBQVBLO0VBQ0MsZ0JBQUE7QUFTTjs7QUFQSztFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBU1A7O0FBUEs7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBU1A7O0FBUEs7RUFDRSxtQkFBQTtBQVNQXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2Nzcy9taXhpbnMvcmVzcG9uc2l2ZSc7XFxyXFxuXFxyXFxuLmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgZmxleDogMC4yO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTUyOTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm1vYmlsZV9tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDBweFxcclxcbiAgfTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI2NXB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFya2V0TWVudSB7XFxyXFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZE1hcmtldENvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYXJrZXRfZGV0YWlsQ29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgIC5kZXRhaWxfdGl0bGUge1xcclxcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgfVxcclxcbiAgICAgLmRldGFpbF9jYXRlZ29yeSB7XFxyXFxuICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICB9XFxyXFxuICAgICAuZGV0YWlsX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgfVxcclxcbiAgICAgLmRldGFpbF9wcmljZSB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgIH1cXHJcXG4gICAgIC5kZXRhaWxfdXNlcntcXHJcXG4gICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgIH1cXHJcXG4gICAgIC5kZXRhaWxfdXNlcm5hbWV7XFxyXFxuICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgfVxcclxcbiAgICAgLmRldGFpbF9yYXRpbmd7XFxyXFxuICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICB9XFxyXFxuICAgICBcXHJcXG4gIH1cIixcIiRleHRyYS1zbWFsbC13aWR0aDogNDgwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNzY3cHg7XFxyXFxuJHRhYmxldC13aWR0aDogNzY4cHg7XFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEwNzRweDtcXHJcXG4kYmlnLWRlc2t0b3Atd2lkdGg6IDE0NDBweDtcXHJcXG5cXHJcXG5AbWl4aW4gZXh0cmFTbWFsbCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMjBweCkgYW5kIChtYXgtd2lkdGg6ICN7JGV4dHJhLXNtYWxsLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogI3skbW9iaWxlLXdpZHRofSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBiaWdEZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJvZHlcIjogXCJtYXJrZXRwbGFjZV9ib2R5X18zOFVuYVwiLFxuXHRcIm1lbnVcIjogXCJtYXJrZXRwbGFjZV9tZW51X18zM0YyZFwiLFxuXHRcIm1vYmlsZV9tZW51XCI6IFwibWFya2V0cGxhY2VfbW9iaWxlX21lbnVfXzJmZy1IXCIsXG5cdFwiY29udGVudFwiOiBcIm1hcmtldHBsYWNlX2NvbnRlbnRfX1Y5bTQzXCIsXG5cdFwibWFya2V0TWVudVwiOiBcIm1hcmtldHBsYWNlX21hcmtldE1lbnVfXzJRaFRVXCIsXG5cdFwiYWRkTWFya2V0Q29udGFpbmVyXCI6IFwibWFya2V0cGxhY2VfYWRkTWFya2V0Q29udGFpbmVyX18yY0lycVwiLFxuXHRcIm1hcmtldF9kZXRhaWxDb250YWluZXJcIjogXCJtYXJrZXRwbGFjZV9tYXJrZXRfZGV0YWlsQ29udGFpbmVyX18xN21TQlwiLFxuXHRcImRldGFpbF90aXRsZVwiOiBcIm1hcmtldHBsYWNlX2RldGFpbF90aXRsZV9fYW1fZnpcIixcblx0XCJkZXRhaWxfY2F0ZWdvcnlcIjogXCJtYXJrZXRwbGFjZV9kZXRhaWxfY2F0ZWdvcnlfX3d0ZVhxXCIsXG5cdFwiZGV0YWlsX2Rlc2NyaXB0aW9uXCI6IFwibWFya2V0cGxhY2VfZGV0YWlsX2Rlc2NyaXB0aW9uX19wVjRaU1wiLFxuXHRcImRldGFpbF9wcmljZVwiOiBcIm1hcmtldHBsYWNlX2RldGFpbF9wcmljZV9fMzlzeGVcIixcblx0XCJkZXRhaWxfdXNlclwiOiBcIm1hcmtldHBsYWNlX2RldGFpbF91c2VyX18xa3hZalwiLFxuXHRcImRldGFpbF91c2VybmFtZVwiOiBcIm1hcmtldHBsYWNlX2RldGFpbF91c2VybmFtZV9fM1FYb0VcIixcblx0XCJkZXRhaWxfcmF0aW5nXCI6IFwibWFya2V0cGxhY2VfZGV0YWlsX3JhdGluZ19fMThTMmtcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9