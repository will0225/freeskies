_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"Dx8+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var r=n("q1tI"),a=n.n(r),o=n("KQm4"),s=n("rePB"),c=n("o0o1"),i=n.n(c),u=n("HaE+"),l=n("B3wi"),p=n("PObt"),m=n("A9a1"),d=n("qg42"),f=n.n(d),h=n("uoqP"),b=n("tsqr"),v=a.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={loading:!1,postingLoading:!1,timelineData:[]};function y(e,t){var n=t.type,r=t.payload;switch(n){case"timeline/SET_LOADING":return O(O({},e),{},{loading:r});case"timeline/SET_POSTING_LOADING":return O(O({},e),{},{postingLoading:r});case"timeline/SET_TIMELINE_DATA":return O(O({},e),{},{timelineData:r});default:return e}}var j=Object(r.createContext)([{},function(){}]),k=function(e){var t=e.children,n=Object(r.useReducer)(y,w);return v(j.Provider,{value:n},t)};function P(e){switch(e){case"timeline":return"timeline/SET_LOADING";case"posting":return"timeline/SET_POSTING_LOADING";default:return""}}var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"timeline";return{type:P(t),payload:e}},D=function(e){return{type:"timeline/SET_TIMELINE_DATA",payload:e}},S=n("FVaq"),E=n("jL+W"),T=n("rOC1"),I=n("ffwR"),C=a.a.createElement;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=Object(E.a)((function(e){var t,n=e.authServices,s=e.auth,c=Object(r.useContext)(j),d=c[0],v=c[1],g=Object(r.useState)(!1),O=g[0],w=g[1],y=Object(r.useState)(!1),k=(y[0],y[1]),P=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,a,o,s,c,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],e.prev=1,r||v(x(!0)),e.next=5,Object(h.b)({method:"post",url:"/accounts/timeline",headers:{"x-token":t}});case 5:a=e.sent,o=a.data,200===(s=a.status)?(c=o.map((function(e){return e=E(e)})),v(D(c)),console.log("=========")):403===s?(console.log("================= Refresh token !"),n.refreshToken(P)):b.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),r||v(x(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),r||v(x(!1));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){return"Comment"===e.type?"Post"==e.commented.type?A(A({},e.commented),{},{comments:[A({},e)]}):"Comment"==e.commented.type?A(A({},e.commented.commented),{},{comments:[A(A({},e.commented),{},{comments:[e]})]}):"Share"==e.commented.type?A(A({},e.commented.shared),{},{comments:[A({},e)]}):A(A({},e.commented),{},{comments:[A({},e)]}):"Post"===e.type?e:"Share"===e.type?A(A({},e.shared),{},{shares:[A({},e)]}):e},N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(x(!0,"posting")),e.next=4,Object(h.b)({method:"post",url:"/posts",data:t,headers:{"x-token":s.token}});case 4:return n=e.sent,r=n.data,201===n.status?(w(!1),a=A(A({type:"Post"},r),{},{comments:[],commentsCount:0,rating:null,reactions:[],reactionsCount:0,shares:[],sharesCount:0,account:s.user}),c=[a].concat(Object(o.a)(d.timelineData)),console.log(c),v(D(c))):b.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),v(x(!1,"posting")),e.next=10,n;case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(0),v(x(!1,"posting"));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r){var a,o,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(x(!0,"posting")),a="","Photo"===t?a="/photos/rate":"VideoClip"===t?a="/video-clips/rate":"Item"===t?a="/items/rate":"Post"===t?a="/posts/rate":"Comment"===t?a="/comments/rate":"MarketplaceItemForSale"===t?a="/marketplace/items-for-sale/rate":"MarketplaceItemToBuy"===t&&(a="/marketplace/items-to-buy/rate"),e.next=6,Object(h.b)({method:"post",url:a,data:{id:n,rating:r},headers:{"x-token":s.token}});case 6:return o=e.sent,c=o.data,u=o.status,console.warn("ratePost",c,u),201===u?(d.timelineData.map((function(e){if(e.id===n&&e.type===t)return e.rating=r,e})),v(D(d.timelineData))):b.b.error((null===c||void 0===c?void 0:c.message)||"Something wrong"),v(x(!1,"posting")),e.next=13,o;case 13:return e.abrupt("return",e.sent);case 16:e.prev=16,e.t0=e.catch(0),v(x(!1,"posting"));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n,r){return e.apply(this,arguments)}}(),M=function(){w(!0)},q=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r){var a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="","Photo"===t?a="/photos/react":"VideoClip"===t?a="/video-clips/react":"Item"===t?a="/items/react":"Post"===t?a="/posts/react":"Comment"===t?a="/comments/react":"Share"===t?a="/shares/react":"MarketplaceItemForSale"===t?a="/marketplace/items-for-sale/react":"MarketplaceItemToBuy"===t&&(a="/marketplace/items-to-buy/react"),e.prev=2,e.next=5,Object(h.b)({method:"post",url:a,data:{reacted:n,reaction:r},headers:{"x-token":s.token}});case 5:if(o=e.sent,c=o.data,201!==o.status){e.next=11;break}b.b.success("Added successfully"),e.next=13;break;case 11:throw b.b.error((null===c||void 0===c?void 0:c.message)||"Something wrong"),new Error;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="","Photo"===t?r="/photos/share":"VideoClip"===t?r="/video-clips/share":"Item"===t?r="/items/share":"Post"===t?r="/posts/share":"Comment"===t?r="/comments/share":"Share"===t?r="/posts/share":"MarketplaceItemForSale"===t?r="/marketplace/items-for-sale/share":"MarketplaceItemToBuy"===t&&(r="/marketplace/items-to-buy/share"),e.prev=2,e.next=5,Object(h.b)({method:"post",url:r,data:{shared:n},headers:{"x-token":s.token}});case 5:if(a=e.sent,o=a.data,201!==a.status){e.next=11;break}b.b.success("Shared successfully"),e.next=13;break;case 11:throw b.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),new Error;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.b)({method:"delete",url:"/posts",data:{id:t},headers:{"x-token":s.token}});case 3:n=e.sent,n.data,400!==n.status?(r=d.timelineData.filter((function(e){return e.id!==t})),v(D(r)),b.b.success("Deleted successfully!")):b.b.error("This post deleting does not allowed!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){P(s.token),window.addEventListener("scroll",_.throttle((function(){var e=window.pageYOffset;k(e>100)}),250))}),[]);var J=s.user;return C(a.a.Fragment,null,C(l.a,null),C("div",{className:f.a.timeline},C("div",{className:f.a.feed_container},C("div",{className:f.a.createPostDiv},C(I.a,{size:50,url:null===J||void 0===J||null===(t=J.profilePhoto)||void 0===t?void 0:t.src,username:null===J||void 0===J?void 0:J.username}),C("input",{className:f.a.createPostInput,placeholder:"What's on your mind?",onClick:M})),C(S.a,{loading:d.loading},C(p.a,{data:d.timelineData,onUpdateTimeline:function(e){d.timelineData.map((function(t){if(t.id==e.id){var n=A({account:s.user},e.comments[0]);return"undefined"==typeof t.comments?t.comments=[n]:t.comments.push(n),t.commentsCount+=e.commentsCount,t}})),v(D(d.timelineData))},processedVideoUpdate:B,onRatePost:L,likeAction:q,shareAction:F,deleteAction:G,auth:s})))),C(T.a,{title:"Create Post",showModal:O,onClose:function(){return w(!1)}},C(m.a,{loading:d.postingLoading,onPosting:N,modalPopup:M})))})),M=a.a.createElement;function q(){return M("div",null,M(k,null,M(L,null)))}},mDtT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return n("Dx8+")}])},qg42:function(e,t,n){e.exports={timeline:"timeline_timeline__mY-nJ",createPostInput:"timeline_createPostInput__Xrg8W",createPostDiv:"timeline_createPostDiv__1JJhj",mobile_profile_header:"timeline_mobile_profile_header__TFfnT"}}},[["mDtT",0,1,6,13,16,2,3,4,5,7,8,9,12,10,11,14]]]);