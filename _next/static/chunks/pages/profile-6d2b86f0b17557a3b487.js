_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"W+IF":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a("q1tI"),o=a.n(n),s=(a("KQm4"),a("o0o1")),r=a.n(s),l=a("HaE+"),c=a("G9ce"),i=a.n(c),u=a("TSYQ"),d=a.n(u),m=a("tsqr"),p=a("GzdX"),v=a("2/Rp"),f=a("uoqP"),b=a("o3/p"),h=a("Bfm4"),g=a("A9a1"),x=a("+eX/"),N=a("jL+W"),w=a("ZvkC"),k=a("67A/"),y=a("ffwR"),O=(a("4nr2"),a("rePB")),j=a("Ff2n"),_=a("9rZX"),C=a.n(_),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},S=a("6VBw"),E=function(e,t){return n.createElement(S.a,Object.assign({},e,{ref:t,icon:P}))};E.displayName="CloseCircleFilled";var R=n.forwardRef(E),B=a("a/fa"),T=a.n(B),z=o.a.createElement;C.a.setAppElement("#modal_place");var I={content:{},overlay:{backgroundColor:"rgba(50, 50, 50, .8)"}};function L(e){var t=e.children,a=e.showModal,n=e.narrow_container,o=e.title,s=Object(j.a)(e,["children","showModal","narrow_container","title"]);return console.log(o,t,a),z(C.a,{isOpen:a,style:I,className:d()(T.a.modal_content,Object(O.a)({},T.a.narrow,n)),shouldCloseOnOverlayClick:!0,onRequestClose:s.onClose},z("div",{className:T.a.header},z("div",{className:T.a.title},z("p",null,o)),z("button",{className:T.a.close,type:"button",onClick:s.onClose},z(R,null))),z("div",{className:T.a.content},t))}a("VIWY");var A=a("Lp5N"),M=o.a.createElement;var F=Object(N.a)((function(e){var t,a,o=e.auth,s=Object(n.useState)([]),c=(s[0],s[1],Object(n.useContext)(w.a)),u=c[0],N=c[1],O=Object(n.useState)(1),j=O[0],_=O[1],C=Object(n.useState)(!1),P=C[0],S=C[1],E=Object(n.useState)(!1),R=E[0],B=E[1],T=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n,s,l,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]&&c[1],e.prev=1,a||N(Object(k.c)(!0)),e.next=5,Object(f.a)({method:"post",url:"/accounts/timeline",headers:{"x-token":o.token}});case 5:n=e.sent,s=n.data,l=n.status,console.log("getFriends_data=",s,"getFriends_status=",l),200===l?(N(Object(k.b)(s)),console.log("=========")):403===l?(console.log("================= Refresh token !"),authServices.refreshToken(T)):m.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),a||N(Object(k.c)(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),a||N(Object(k.c)(!1));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n,s,l,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]&&c[1],e.prev=1,a||N(Object(k.c)(!0)),e.next=5,Object(f.a)({method:"get",url:"/accounts",headers:{"x-token":o.token}});case 5:n=e.sent,s=n.data,l=n.status,console.log("getAccount_data=",s,"getAccount_status=",l),200===l?(N(Object(k.a)(s)),console.log("=========")):403===l?(console.log("================= Refresh token !"),authServices.refreshToken(T)):m.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),a||N(Object(k.c)(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),a||N(Object(k.c)(!1));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(Object(k.c)(!0,"posting")),e.next=4,Object(f.a)({method:"post",url:"/posts",data:t,headers:{"x-token":o.token}});case 4:return a=e.sent,n=a.data,s=a.status,console.log(n,s),201===s?z():m.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong"),N(Object(k.c)(!1,"posting")),e.next=11,a;case 11:return e.abrupt("return",e.sent);case 14:e.prev=14,e.t0=e.catch(0),N(Object(k.c)(!1,"posting"));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(r.a.mark((function e(t,a,n){var s,l,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a,n),e.prev=1,N(Object(k.c)(!0,"posting")),s="","Photo"===t?s="/photos/rate":"VideoClip"===t?s="/video-clips/rate":"Item"===t?s="/items/rate":"Post"===t?s="/posts/rate":"Comment"===t&&(s="/comments/rate"),e.next=7,Object(f.a)({method:"post",url:s,data:{rated:a,rating:n},headers:{"x-token":o.token}});case 7:return l=e.sent,c=l.data,i=l.status,console.warn("ratePost",c,i),201===i?(z(),m.b.success("Evaluate successfully")):m.b.error((null===c||void 0===c?void 0:c.message)||"Something wrong"),N(Object(k.c)(!1,"posting")),e.next=14,l;case 14:return e.abrupt("return",e.sent);case 17:e.prev=17,e.t0=e.catch(1),N(Object(k.c)(!1,"posting"));case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,a,n){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){T(o.token),z(o.token)}),[]);var V=u.accountData,D=window.matchMedia("only screen and (max-width: 640px)").matches,G=(null!==V&&void 0!==V&&"url(https://www.freeskies.com/static/".concat(null===(t=V.profileBackgroundImage)||void 0===t?void 0:t.src,")"),null!==V&&void 0!==V?"".concat(null===(a=V.profilePhoto)||void 0===a?void 0:a.src):null),W=Math.round((null===V||void 0===V?void 0:V.rating)||0),X=function(){S(!0)},q=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(Object(k.c)(!0)),e.next=4,Object(f.a)({method:"PUT",url:"/accounts",data:t,headers:{"x-token":o.token}});case 4:return a=e.sent,n=a.data,201===a.status?z():m.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong"),N(Object(k.c)(!1)),e.next=10,a;case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(0),N(Object(k.c)(!1));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return M("div",{className:i.a.container},M("div",{className:i.a.left},"undefined"!==typeof V?M("div",{className:i.a.profile},M("div",{className:i.a.avatar},M("div",{className:i.a.avatar_image},M(y.a,{size:D?100:140,url:G,text:null===V||void 0===V?void 0:V.username}))),M("div",{className:i.a.user_content},M("div",{className:i.a.user_info},M("div",{className:i.a.heade_section},M("div",{className:i.a.left_side},M("p",{className:i.a.fullname,style:{cursor:"pointer"},onClick:function(){return B(!0)}},M("span",null,"".concat(null===V||void 0===V?void 0:V.firstName," ").concat(null===V||void 0===V?void 0:V.lastName)))),M("div",{className:i.a.right_side},M("p",{className:i.a.rating},M(p.a,{defaultValue:W,style:{color:"#fadb14",fontSize:"30px"}}),M("span",{className:i.a.rating_text},W))))))):M("div",{className:"border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"},M("div",{className:"animate-pulse flex space-x-4"},M("div",{className:"rounded-full bg-gray-400 h-12 w-12"}),M("div",{className:"flex-1 space-y-4 py-1"},M("div",{className:"h-4 bg-gray-400 rounded w-3/4"}),M("div",{className:"space-y-2"},M("div",{className:"h-4 bg-gray-400 rounded"}),M("div",{className:"h-4 bg-gray-400 rounded w-5/6"}))))),M("div",{className:i.a.profile_content},M("ul",{className:"flex border-b"},M("li",{className:d()("mr-1",i.a.tab),onClick:function(){return _(1)},style:{borderBottom:1==j?"5px solid white":"none"}},M("a",{className:"inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"},"ACTIVITY")),M("li",{className:d()("mr-1",i.a.tab),onClick:function(){return _(2)},style:{borderBottom:2==j?"5px solid white":"none"}},M("a",{className:"inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"},"Groups")),M("li",{className:d()("mr-1",i.a.tab),onClick:function(){return _(6)},style:{borderBottom:6==j?"5px solid white":"none"}},M("a",{className:"inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"},"Markets")),M("li",{className:d()("mr-1",i.a.tab),onClick:function(){return _(3)},style:{borderBottom:3==j?"5px solid white":"none"}},M("a",{className:"inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"},"PHOTOS")),M("li",{className:d()("mr-1",i.a.tab),onClick:function(){return _(4)},style:{borderBottom:4==j?"5px solid white":"none"}},M("a",{className:"inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"},"RATES")),M("li",{className:d()("mr-1",i.a.tab),onClick:function(){return _(5)},style:{borderBottom:5==j?"5px solid white":"none"}},M("a",{className:"inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"},"FRIENDS"))),1==j?M("div",{className:i.a.activity},M("div",{className:i.a.createPostDiv},M(y.a,{size:50,url:G}),M("input",{className:i.a.createPostInput,placeholder:"What's on your mind?",onClick:X})),M(h.a,{user:V,onRatePost:F,onUpdateTimeline:z})):null,5==j?M("div",{className:d()(i.a.friends_list,i.a.sections_content)},null===V||void 0===V?void 0:V.friends.map((function(e,t){return M("div",{className:i.a.friend,key:t},M(y.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),M("div",{className:i.a.friend_name},M("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),M(p.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),M(v.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5}},"Unfriend")))}))):null,3==j?M(b.a,{user:V,onRatePost:F}):null,4==j?M(x.a,{user:V,onRatePost:F}):null)),M("div",{className:i.a.right}),M(L,{title:"Create Post",showModal:P,onClose:function(){return S(0)}},M(g.a,{loading:u.postingLoading,onPosting:I,modalPopup:X})),M(L,{title:"Edit Profile",showModal:R,onClose:function(){return B(0)}},M(A.a,{onUpdate:q,loading:u.postingLoading})))})),V=o.a.createElement;function D(){return V("div",null,V(w.b,null,V(F,null)))}},u1GD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a("W+IF")}])}},[["u1GD",0,2,5,11,1,4,3,7,6,9,8,10,12,13]]]);