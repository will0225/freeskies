_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"W+IF":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var o=a("q1tI"),s=a.n(o),n=a("rePB"),c=a("G9ce"),l=a.n(c),r=a("TSYQ"),i=a.n(r),d=a("5rEg"),m=a("tsqr"),u=a("GzdX"),p=a("2/Rp"),h=a("uoqP"),b=a("o3/p"),v=a("Bfm4"),f=a("A9a1"),g=a("+eX/"),y=a("jL+W"),N=a("ZvkC"),O=a("67A/"),w=a("ffwR"),k=(a("4nr2"),a("rOC1")),j=(a("VIWY"),a("Lp5N")),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"}}]},name:"audio",theme:"outlined"},C=a("6VBw"),S=function(e,t){return o.createElement(C.a,Object.assign({},e,{ref:t,icon:x}))};S.displayName="AudioOutlined";var P=o.forwardRef(S),T=a("wd/R"),E=a.n(T),R=a("B3wi"),D=a("nOHt"),I=s.a.createElement;function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const{Search:V}=d.a,B=(I(P,{style:{fontSize:16,color:"#1890ff"}}),e=>console.log(e));var M=Object(y.a)((function({authServices:e,auth:t}){var a,n;const{0:c,1:r}=Object(o.useState)([]),{0:d,1:y}=Object(o.useContext)(N.a),{0:x,1:C}=Object(o.useState)(1),{0:S,1:P}=Object(o.useState)(!1),{0:T,1:A}=Object(o.useState)(!1),{0:M,1:Y}=Object(o.useState)([]),{0:W,1:H}=Object(o.useState)([]),{0:L,1:G}=Object(o.useState)([]),{0:U,1:F}=Object(o.useState)(!1),q=(Object(D.useRouter)(),async(a,o=!1)=>{try{o||y(Object(O.c)(!0));const a=await Object(h.a)({method:"post",url:"/accounts/timeline",headers:{"x-token":t.token}}),{data:s,status:n}=a;200===n?y(Object(O.b)(s)):403===n?e.refreshToken(q):m.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),o||y(Object(O.c)(!1))}catch(s){console.log(s),o||y(Object(O.c)(!1))}}),X=async(a,o=!1)=>{try{o||y(Object(O.c)(!0));const a=await Object(h.a)({method:"get",url:"/accounts",headers:{"x-token":t.token}}),{data:s,status:n}=a;200===n?(console.log(s),s.activity=s.activity.map(e=>e=J(e)),y(Object(O.a)(s))):403===n?e.refreshToken(q):m.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),o||y(Object(O.c)(!1))}catch(s){console.log(s),o||y(Object(O.c)(!1))}},J=e=>"Comment"===e.type?"Post"==e.commented.type?z(z({},e.commented),{},{comments:[z(z({},e),{},{account:e.account})]}):"Comment"==e.commented.type?z(z({},e.commented.commented),{},{comments:[z(z({},e.commented),{},{comments:[e]})]}):"Share"==e.commented.type?z(z({},e.commented.shared),{},{comments:[z(z({},e),{},{account:e.account})]}):z(z({},e.commented),{},{comments:[z(z({},e),{},{account:e.account})]}):"Post"===e.type?e:"Share"===e.type?z(z({},e.shared),{},{comments:[z(z({},e),{},{account:e.account})]}):e,Q=async()=>{try{const a=await Object(h.a)({method:"post",url:"/accounts/photos",data:{offset:0,first:10},headers:{"x-token":t.token}}),{data:o,status:s}=a;200===s?Y(o):403===s&&e.refreshToken(Q)}catch(a){console.log(a)}},Z=async()=>{try{const a=await Object(h.a)({method:"post",url:"/accounts/rated",data:{offset:0,first:10},headers:{"x-token":t.token}}),{data:o,status:s}=a;200===s?H(o):403===s&&e.refreshToken(Z)}catch(a){console.log(a)}},K=async()=>{try{const a=await Object(h.a)({method:"post",url:"/accounts/trending",data:{offset:0,first:3},headers:{"x-token":t.token}}),{data:o,status:s}=a;200==s?y(Object(O.d)(o)):403==s&&e.refreshToken(K)}catch(a){console.log(a)}},$=async(e,a="Post")=>{var o="";"Photo"===a?o="/photos":"VideoClip"===a?o="/video-clips":"Item"===a?o="/items":"Post"===a?o="/posts":"Comment"===a?o="/comments":"Share"===a&&(o="/posts");try{const a=await Object(h.a)({method:"delete",url:o,data:{id:e},headers:{"x-token":t.token}}),{data:n,status:c}=a;if(400!==c){var s=te.activity.filter(t=>t.id!==e);y(Object(O.a)(z(z({},te),{},{activity:s}))),m.b.success("Deleted successfully!")}else m.b.error("This post deleting does not allowed!")}catch(n){console.log(n)}},ee=async(e,a,o)=>{try{y(Object(O.c)(!0,"posting"));let s="";"Photo"===e?s="/photos/rate":"VideoClip"===e?s="/video-clips/rate":"Item"===e?s="/items/rate":"Post"===e?s="/posts/rate":"Comment"===e?s="/comments/rate":"Share"===e&&(s="/shares/rate");const n=await Object(h.a)({method:"post",url:s,data:{rated:a,rating:o},headers:{"x-token":t.token}}),{data:c,status:l}=n;return 201===l&&(te.activity.map(t=>{if(t.id===a&&t.type===e)return t.rating=o,t}),y(Object(O.a)(te))),y(Object(O.c)(!1,"posting")),await n}catch(s){y(Object(O.c)(!1,"posting"))}};Object(o.useEffect)(()=>{X(t.token),K(),Q(),Z(),(async()=>{try{const e=await Object(h.a)({method:"post",url:"/accounts/top-rated",data:{offset:0,first:130},headers:{"x-token":t.token}}),{data:a,status:o}=e;G(a)}catch(e){console.log(e)}})(),window.addEventListener("scroll",_.throttle(()=>{const e=window.pageYOffset;F(e>100)},250))},[]);const{accountData:te,trendingData:ae,friendData:oe}=d,se=window.matchMedia("only screen and (max-width: 640px)").matches,ne=(null!==te&&void 0!==te&&"url(https://www.freeskies.com/static/".concat(null===(a=te.profileBackgroundImage)||void 0===a?void 0:a.src,")"),null!==te&&void 0!==te?"".concat(null===(n=te.profilePhoto)||void 0===n?void 0:n.src):null),ce=null===te||void 0===te?void 0:te.rating,le=()=>{P(!0)},re=async e=>{if(""!==e)try{y(Object(O.c)(!0));const a=await Object(h.a)({method:"DELETE",url:"/accounts/friendship",data:{username:e},headers:{"x-token":t.token}}),{data:o,status:s}=a;return 201===s?X():m.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),y(Object(O.c)(!1)),await a}catch(a){y(Object(O.c)(!1))}},ie=async(a,o,s)=>{var n="";"Photo"===a?n="/photos/react":"VideoClip"===a?n="/video-clips/react":"Item"===a?n="/items/react":"Post"===a?n="/posts/react":"Comment"===a?n="/comments/react":"Share"===a&&(n="/shares/react");try{const a=await Object(h.a)({method:"post",url:n,data:{reacted:o,reaction:s},headers:{"x-token":t.token}}),{data:c,status:l}=a;if(201===l)te.activity.map((e,t)=>{if(e.id===o)return e.reactions[0].reaction,e;y(Object(O.a)(te))});else{if(403!=l)throw m.b.error((null===c||void 0===c?void 0:c.message)||"Something wrong"),new Error;e.refreshToken()}}catch(c){console.log(c)}},de=async(a,o)=>{var s="";"Photo"===a?s="/photos/share":"VideoClip"===a?s="/video-clips/share":"Item"===a?s="/items/share":"Post"===a?s="/posts/share":"Comment"===a?s="/comments/share":"Share"===a&&(s="/posts/share");try{const a=await Object(h.a)({method:"post",url:s,data:{shared:o},headers:{"x-token":t.token}}),{data:n,status:c}=a;if(201===c)m.b.success("Shared successfully");else{if(403!=satus)throw m.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong"),new Error;e.refreshToken()}}catch(n){console.log(n)}},me=e=>{te.activity.map(t=>{if(t.id==e.id){let a=z({account:te},e.comments[0]);return t.comments.push(a),t.commentsCount+=e.commentsCount,t}}),y(Object(O.a)(te))};return I(s.a.Fragment,null,I("div",{className:l.a.header},I(R.a,null)),I("div",{className:l.a.container},I("div",{className:l.a.left},"undefined"!==typeof te?I("div",{className:l.a.profile},I("div",{className:l.a.avatar},I("div",{className:l.a.avatar_image,onClick:()=>A(!0)},I(w.a,{size:se?100:140,url:ne,text:null===te||void 0===te?void 0:te.username}))),I("div",{className:l.a.user_content},I("div",{className:l.a.user_info},I("div",{className:l.a.heade_section},I("div",{className:l.a.left_side},I("p",{className:l.a.fullname,style:{cursor:"pointer"},onClick:()=>A(!0)},I("span",null,"".concat(null===te||void 0===te?void 0:te.firstName," ").concat(null===te||void 0===te?void 0:te.lastName)))),I("div",{className:l.a.right_side},I("p",{className:l.a.rating},I(u.a,{disabled:!0,defaultValue:ce,style:{color:"#fadb14",fontSize:"30px"}}),I("span",{className:l.a.rating_text},ce))))))):I("div",{className:"border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"},I("div",{className:"animate-pulse flex space-x-4"},I("div",{className:"rounded-full bg-gray-400 h-12 w-12"}),I("div",{className:"flex-1 space-y-4 py-1"},I("div",{className:"h-4 bg-gray-400 rounded w-3/4"}),I("div",{className:"space-y-2"},I("div",{className:"h-4 bg-gray-400 rounded"}),I("div",{className:"h-4 bg-gray-400 rounded w-5/6"}))))),I("div",{className:l.a.profile_content},I("ul",{className:i()("flex border-b",l.a.profileTabs)},I("li",{className:i()("mr-1",l.a.tab),onClick:()=>C(1),style:{borderBottom:1==x?"5px solid white":"none"}},I("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"ACTIVITY")),I("li",{className:i()("mr-1",l.a.tab),onClick:()=>C(2),style:{borderBottom:2==x?"5px solid white":"none"}},I("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"Groups")),I("li",{className:i()("mr-1",l.a.tab),onClick:()=>C(6),style:{borderBottom:6==x?"5px solid white":"none"}},I("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"Marketplace")),I("li",{className:i()("mr-1",l.a.tab),onClick:()=>C(3),style:{borderBottom:3==x?"5px solid white":"none"}},I("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"PHOTOS")),I("li",{className:i()("mr-1",l.a.tab),onClick:()=>{C(4),Z()},style:{borderBottom:4==x?"5px solid white":"none"}},I("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"RATES")),I("li",{className:i()("mr-1",l.a.tab),onClick:()=>C(5),style:{borderBottom:5==x?"5px solid white":"none"}},I("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"FRIENDS"))),1==x?I("div",{className:l.a.activity},I("h2",{className:l.a.mobile_activity_label},"ACTIVITY"),I("div",{className:l.a.createPostDiv},I(w.a,{size:50,url:ne}),I("input",{className:l.a.createPostInput,placeholder:"What's on your mind?",onClick:le})),I(v.a,{user:te,onRatePost:ee,onUpdateTimeline:me,likeAction:ie,shareAction:de,deleteAction:$})):null,5==x?I("div",{className:i()(l.a.friends_list,l.a.sections_content)},null===te||void 0===te?void 0:te.friends.map((e,t)=>I("div",{className:l.a.friend,key:t},I(w.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),I("div",{className:l.a.friend_name},I("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),I(u.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),I(p.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:()=>re(e.username)},"Unfriend"))))):null,3==x?I("div",{className:l.a.photoSection},I(b.a,{user:M,onRatePost:ee})):null,4==x?I("div",{className:l.a.ratedSection},I(g.a,{user:{recentRated:W},onRatePost:ee})):null,I("div",{className:l.a.mobile_activity},I("h2",{className:l.a.mobile_activity_label},"ACTIVITY"),I("div",{className:l.a.createPostDiv},I(w.a,{size:50,url:ne}),I("input",{className:l.a.createPostInput,placeholder:"What's on your mind?",onClick:le})),I(v.a,{user:te,onRatePost:ee,onUpdateTimeline:me,likeAction:ie,deleteAction:$,shareAction:de})),I("div",{className:i()(l.a.mobile_friends_list)},I("h2",{style:{fontWeight:"bold"}},"FRIENDS"),null===te||void 0===te?void 0:te.friends.map((e,t)=>I("div",{className:l.a.friend,key:t},I(w.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),I("div",{className:l.a.friend_name},I("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),I(u.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),I(p.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:()=>re(e.username)},"Unfriend"))))),I("hr",null),I("div",{className:l.a.mobile_groups},I("h2",{style:{fontWeight:"bold"}},"GROUPS")),I("div",{className:l.a.mobile_markets},I("h2",{style:{fontWeight:"bold"}},"Marketplace")),I("div",{className:l.a.mobile_ratesection},I("h2",{style:{fontWeight:"bold"}},"RATES"),I(g.a,{user:{recentRated:W},onRatePost:ee})),I("div",{className:l.a.mobile_photosection},I("h2",{style:{fontWeight:"bold"}},"PHOTOS"),I(b.a,{user:M,onRatePost:ee})))),I("div",{className:l.a.right},I("div",{className:l.a.search},I("p",null,"Search:"),I(V,{placeholder:"Search",onSearch:B,style:{width:200,borderColor:"white",backgroundColor:"transparent"}})),I("div",{className:l.a.trending},I("h1",{className:l.a.trendingText},"TRENDING"),I("div",{className:l.a.trending_content},ae.length>0&&(null===ae||void 0===ae?void 0:ae.map((e,t)=>I("div",{key:t,className:l.a.trendingContent},I("p",null,"Type: ",e.type),I("p",null,"Date: ",E()(e.createdAt).format("MMM DD, YYYY - HH:mm A")),I("p",null,"Content: ",e.text),I("p",null,"Comments: ",e.commentsCount),I("p",null,"Reactions: ",e.reactionsCount),I("p",null,"Rating: ",e.rating),I("p",null,"Share: ",e.sharesCount),I("br",null))))),I("h1",{className:l.a.trendingText},"TOP RATED"),I("div",{className:l.a.trending_content},L.length>0&&(null===L||void 0===L?void 0:L.map((e,t)=>I("div",{key:t,className:l.a.trendingContent},I("p",null,"Type: ",e.type),I("p",null,"Date: ",E()(e.createdAt).format("MMM DD, YYYY - HH:mm A")),I("p",null,"Content: ",e.text),I("p",null,"Comments: ",e.commentsCount),I("p",null,"Reactions: ",e.reactionsCount),I("p",null,"Rating: ",e.rating),I("p",null,"Share: ",e.sharesCount),I("br",null))))))),I(k.a,{title:"Create Post",showModal:S,onClose:()=>P(0)},I(f.a,{loading:d.postingLoading,onPosting:async e=>{try{y(Object(O.c)(!0,"posting"));const o=await Object(h.a)({method:"post",url:"/posts",data:e,headers:{"x-token":t.token}}),{data:s,status:n}=o;if(201===n){P(0);var a=z(z({type:"Post"},s),{},{comments:[],commentsCount:0,rating:null,reactions:[],reactionsCount:0,shares:[],sharesCount:0});te.activity=[a,...te.activity],y(Object(O.a)(te))}else m.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong");return y(Object(O.c)(!1,"posting")),await o}catch(o){y(Object(O.c)(!1,"posting"))}},modalPopup:le})),I(k.a,{title:"Edit Profile",showModal:T,onClose:()=>A(0)},I(j.a,{onUpdate:async e=>{try{y(Object(O.c)(!0));const a=await Object(h.a)({method:"PUT",url:"/accounts",data:e,headers:{"x-token":t.token}}),{data:o,status:s}=a;return 200===s?(console.log(o),A(0),y(Object(O.a)(z(z({},te),{},{lastName:o.lastName,profilePhoto:o.profilePhoto,profileBackgroundImage:o.profileBackgroundImage}))),m.b.success("Successfully updated")):m.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),y(Object(O.c)(!1)),await a}catch(a){y(Object(O.c)(!1))}},loading:d.postingLoading}))),I("div",{className:l.a.mobile_header},I(R.a,null)))})),Y=s.a.createElement;function W(){return Y("div",null,Y(N.b,null,Y(M,null)))}},rOC1:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var o=a("rePB"),s=a("Ff2n"),n=a("q1tI"),c=a.n(n),l=a("9rZX"),r=a.n(l),i=a("4i/N"),d=a("a/fa"),m=a.n(d),u=a("TSYQ"),p=a.n(u),h=c.a.createElement;r.a.setAppElement("#modal_place");var b={content:{},overlay:{backgroundColor:"rgba(50, 50, 50, .8)"}};function v(e){var t=e.children,a=e.showModal,n=e.narrow_container,c=e.title,l=Object(s.a)(e,["children","showModal","narrow_container","title"]);return h(r.a,{isOpen:a,style:b,className:p()(m.a.modal_content,Object(o.a)({},m.a.narrow,n)),shouldCloseOnOverlayClick:!0,onRequestClose:l.onClose},h("div",{className:m.a.header},h("div",{className:m.a.title},h("p",{style:{color:"white"}},c)),h("button",{className:m.a.close,type:"button",onClick:l.onClose},h(i.a,null))),h("div",{className:m.a.content},t))}},u1GD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a("W+IF")}])}},[["u1GD",0,2,5,12,1,3,4,6,7,9,8,10,11,13]]]);