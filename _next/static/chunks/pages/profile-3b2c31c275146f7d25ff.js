_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{B3wi:function(e,t,a){"use strict";var o=a("q1tI"),s=a.n(o),n=a("Tyw5"),c=a.n(n),l=a("nOHt"),r=a("TSYQ"),i=a.n(r),d=a("LvDl"),m=a.n(d),u=a("/MKj"),h=a("ffwR"),p=s.a.createElement;function v({user:e={}}){const t=Object(l.useRouter)();return p("div",{className:c.a.profile,onClick:()=>{t.push("/profile")}},p("div",{className:c.a.avatar},(null===e||void 0===e?void 0:e.profilePhoto)?p(h.a,{size:40,url:null===e||void 0===e?void 0:e.profilePhoto.src,text:null===e||void 0===e?void 0:e.username}):p(h.a,{size:40,text:null===e||void 0===e?void 0:e.firstName})),p("span",{className:c.a.name},"".concat(null===e||void 0===e?void 0:e.firstName)))}t.a=Object(u.b)(e=>({user:e.auth.user}))((function({withoutSearch:e,user:t}){const{0:a,1:n}=Object(o.useState)(0),{0:l,1:r}=Object(o.useState)(!0);let d=null;const u=()=>{try{window.pageYOffset;d&&clearTimeout(d),d=setTimeout(()=>{d=null,r(!0)},500),l&&r(!1)}catch(e){console.log(e)}};return Object(o.useEffect)(()=>{try{window.addEventListener("scroll",m.a.throttle(u,250))}catch(e){console.log(e)}return()=>{try{window.removeEventListener("scroll",u)}catch(e){console.log(e)}}},[a]),p(s.a.Fragment,null,p("div",{className:i()(c.a.header,{[c.a.header_hidden]:!l})},p("div",{className:c.a.container},p("div",{className:c.a.logo},p("img",{src:"/logo.png",alt:"logo"})),p("div",{className:c.a.search},!e&&p(s.a.Fragment,null,p("input",{name:"search",placeholder:"Search Freeskies"}),p(v,null))),p(v,{user:t}))),p("div",{className:c.a.additional_header}),p("div",{className:i()(c.a.mobile_profile_header,{[c.a.header_hidden]:!l})},p("div",{className:c.a.container},p(v,{user:t}))),p("div",{className:i()(c.a.mobile_top_header,{[c.a.header_hidden]:!l})},p("div",{className:c.a.container},p("div",{className:c.a.logo},p("img",{src:"/logo.png",alt:"logo"})),p("div",{className:c.a.search},!e&&p(s.a.Fragment,null,p("input",{name:"search",placeholder:"Search Freeskies"}))))))}))},Tyw5:function(e,t,a){e.exports={additional_header:"header_additional_header__Wyu42",header:"header_header__ecC39",header_hidden:"header_header_hidden__2Q2DD",container:"header_container__bXWQQ",logo:"header_logo__2MPw_",search:"header_search__sw4Be",profile:"header_profile__1JSwu",name:"header_name__3HhTm",avatar:"header_avatar__boSZH",mobile_profile_header:"header_mobile_profile_header__2TJiv",mobile_top_header:"header_mobile_top_header__3ihGH"}},"W+IF":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var o=a("q1tI"),s=a.n(o),n=a("rePB"),c=a("G9ce"),l=a.n(c),r=a("TSYQ"),i=a.n(r),d=a("5rEg"),m=a("tsqr"),u=a("GzdX"),h=a("2/Rp"),p=a("uoqP"),v=a("o3/p"),b=a("Bfm4"),f=a("A9a1"),g=a("+eX/"),y=a("jL+W"),N=a("ZvkC"),w=a("67A/"),O=a("ffwR"),j=(a("4nr2"),a("rOC1")),k=(a("VIWY"),a("Lp5N")),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"}}]},name:"audio",theme:"outlined"},C=a("6VBw"),S=function(e,t){return o.createElement(C.a,Object.assign({},e,{ref:t,icon:x}))};S.displayName="AudioOutlined";var P=o.forwardRef(S),T=a("wd/R"),E=a.n(T),R=a("B3wi"),D=s.a.createElement;function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const{Search:z}=d.a,M=(D(P,{style:{fontSize:16,color:"#1890ff"}}),e=>console.log(e));var Y=Object(y.a)((function({auth:e}){var t,a;const{0:n,1:c}=Object(o.useState)([]),{0:r,1:d}=Object(o.useContext)(N.a),{0:y,1:x}=Object(o.useState)(1),{0:C,1:S}=Object(o.useState)(!1),{0:P,1:T}=Object(o.useState)(!1),{0:A,1:Y}=Object(o.useState)([]),{0:B,1:V}=Object(o.useState)([]),{0:W,1:H}=Object(o.useState)([]),{0:F,1:L}=Object(o.useState)(!1),G=async(t,a=!1)=>{try{a||d(Object(w.c)(!0));const t=await Object(p.a)({method:"post",url:"/accounts/timeline",headers:{"x-token":e.token}}),{data:o,status:s}=t;200===s?d(Object(w.b)(o)):403===s?authServices.refreshToken(G):m.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),a||d(Object(w.c)(!1))}catch(o){console.log(o),a||d(Object(w.c)(!1))}},U=async(t,a=!1)=>{try{a||d(Object(w.c)(!0));const t=await Object(p.a)({method:"get",url:"/accounts",headers:{"x-token":e.token}}),{data:o,status:s}=t;200===s?(console.log(o),o.activity=o.activity.map(e=>e=q(e)),d(Object(w.a)(o))):403===s?authServices.refreshToken(G):m.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),a||d(Object(w.c)(!1))}catch(o){console.log(o),a||d(Object(w.c)(!1))}},q=e=>"Comment"===e.type?"Post"==e.commented.type?I(I({},e.commented),{},{comments:[I(I({},e),{},{account:e.account})]}):"Comment"==e.commented.type?I(I({},e.commented.commented),{},{comments:[I(I({},e.commented),{},{comments:[e],account:e.account})]}):"Share"==e.commented.type?I(I({},e.commented.shared),{},{comments:[I(I({},e),{},{account:e.account})]}):I(I({},e.commented),{},{comments:[I(I({},e),{},{account:e.account})]}):"Post"===e.type?e:"Share"===e.type?I(I({},e.shared),{},{comments:[I(I({},e),{},{account:e.account})]}):e,Q=async()=>{try{const t=await Object(p.a)({method:"post",url:"/accounts/rated",data:{offset:0,first:10},headers:{"x-token":e.token}}),{data:a,status:o}=t;200===o&&V(a)}catch(t){console.log(t)}},X=async t=>{try{const a=await Object(p.a)({method:"delete",url:"/posts",data:{id:t},headers:{"x-token":e.token}}),{data:o,status:s}=a;console.log(o),m.b.success("Deleted successfully!")}catch(a){console.log(a)}},J=async(t,a,o)=>{try{d(Object(w.c)(!0,"posting"));let s="";"Photo"===t?s="/photos/rate":"VideoClip"===t?s="/video-clips/rate":"Item"===t?s="/items/rate":"Post"===t?s="/posts/rate":"Comment"===t?s="/comments/rate":"Share"===t&&(s="/shares/rate");const n=await Object(p.a)({method:"post",url:s,data:{rated:a,rating:o},headers:{"x-token":e.token}}),{data:c,status:l}=n;return 201===l&&(Z.activity.map(e=>{if(e.id===a&&e.type===t)return e.rating=o,e}),d(Object(w.a)(Z))),d(Object(w.c)(!1,"posting")),await n}catch(s){d(Object(w.c)(!1,"posting"))}};Object(o.useEffect)(()=>{U(e.token),(async()=>{try{const t=await Object(p.a)({method:"post",url:"/accounts/trending",data:{offset:0,first:3},headers:{"x-token":e.token}}),{data:a,status:o}=t;d(Object(w.d)(a))}catch(t){console.log(t)}})(),(async()=>{try{const t=await Object(p.a)({method:"post",url:"/accounts/photos",data:{offset:0,first:10},headers:{"x-token":e.token}}),{data:a,status:o}=t;200===o&&Y(a)}catch(t){console.log(t)}})(),Q(),(async()=>{try{const t=await Object(p.a)({method:"post",url:"/accounts/top-rated",data:{offset:0,first:130},headers:{"x-token":e.token}}),{data:a,status:o}=t;H(a)}catch(t){console.log(t)}})(),window.addEventListener("scroll",_.throttle(()=>{const e=window.pageYOffset;L(e>100)},250))},[]);const{accountData:Z,trendingData:K,friendData:$}=r,ee=window.matchMedia("only screen and (max-width: 640px)").matches,te=(null!==Z&&void 0!==Z&&"url(https://www.freeskies.com/static/".concat(null===(t=Z.profileBackgroundImage)||void 0===t?void 0:t.src,")"),null!==Z&&void 0!==Z?"".concat(null===(a=Z.profilePhoto)||void 0===a?void 0:a.src):null),ae=null===Z||void 0===Z?void 0:Z.rating,oe=()=>{S(!0)},se=async t=>{if(""!==t)try{d(Object(w.c)(!0));const a=await Object(p.a)({method:"DELETE",url:"/accounts/friendship",data:{username:t},headers:{"x-token":e.token}}),{data:o,status:s}=a;return 201===s?U():m.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),d(Object(w.c)(!1)),await a}catch(a){d(Object(w.c)(!1))}},ne=async(t,a,o)=>{var s="";"Photo"===t?s="/photos/react":"VideoClip"===t?s="/video-clips/react":"Item"===t?s="/items/react":"Post"===t?s="/posts/react":"Comment"===t?s="/comments/react":"Share"===t&&(s="/shares/react");try{const t=await Object(p.a)({method:"post",url:s,data:{reacted:a,reaction:o},headers:{"x-token":e.token}}),{data:n,status:c}=t;if(201!==c)throw m.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong"),new Error;m.b.success("Evaluate successfully")}catch(n){console.log(n)}},ce=async(t,a)=>{var o="";"Photo"===t?o="/photos/share":"VideoClip"===t?o="/video-clips/share":"Item"===t?o="/items/share":"Post"===t?o="/posts/share":"Comment"===t?o="/comments/share":"Share"===t&&(o="/posts/share");try{const t=await Object(p.a)({method:"post",url:o,data:{shared:a},headers:{"x-token":e.token}}),{data:s,status:n}=t;if(201!==n)throw m.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),new Error;m.b.success("Evaluate successfully")}catch(s){console.log(s)}},le=e=>{Z.activity.map(t=>{if(t.id==e.id){let a=I({account:Z},e.comments[0]);return t.comments.push(a),t.commentsCount+=e.commentsCount,t}}),d(Object(w.a)(Z))};return D(s.a.Fragment,null,D("div",{className:l.a.header},D(R.a,null)),D("div",{className:l.a.container},D("div",{className:l.a.left},"undefined"!==typeof Z?D("div",{className:l.a.profile},D("div",{className:l.a.avatar},D("div",{className:l.a.avatar_image,onClick:()=>T(!0)},D(O.a,{size:ee?100:140,url:te,text:null===Z||void 0===Z?void 0:Z.username}))),D("div",{className:l.a.user_content},D("div",{className:l.a.user_info},D("div",{className:l.a.heade_section},D("div",{className:l.a.left_side},D("p",{className:l.a.fullname,style:{cursor:"pointer"},onClick:()=>T(!0)},D("span",null,"".concat(null===Z||void 0===Z?void 0:Z.firstName," ").concat(null===Z||void 0===Z?void 0:Z.lastName)))),D("div",{className:l.a.right_side},D("p",{className:l.a.rating},D(u.a,{disabled:!0,defaultValue:ae,style:{color:"#fadb14",fontSize:"30px"}}),D("span",{className:l.a.rating_text},ae))))))):D("div",{className:"border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"},D("div",{className:"animate-pulse flex space-x-4"},D("div",{className:"rounded-full bg-gray-400 h-12 w-12"}),D("div",{className:"flex-1 space-y-4 py-1"},D("div",{className:"h-4 bg-gray-400 rounded w-3/4"}),D("div",{className:"space-y-2"},D("div",{className:"h-4 bg-gray-400 rounded"}),D("div",{className:"h-4 bg-gray-400 rounded w-5/6"}))))),D("div",{className:l.a.profile_content},D("ul",{className:i()("flex border-b",l.a.profileTabs)},D("li",{className:i()("mr-1",l.a.tab),onClick:()=>x(1),style:{borderBottom:1==y?"5px solid white":"none"}},D("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"ACTIVITY")),D("li",{className:i()("mr-1",l.a.tab),onClick:()=>x(2),style:{borderBottom:2==y?"5px solid white":"none"}},D("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"Groups")),D("li",{className:i()("mr-1",l.a.tab),onClick:()=>x(6),style:{borderBottom:6==y?"5px solid white":"none"}},D("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"Marketplace")),D("li",{className:i()("mr-1",l.a.tab),onClick:()=>x(3),style:{borderBottom:3==y?"5px solid white":"none"}},D("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"PHOTOS")),D("li",{className:i()("mr-1",l.a.tab),onClick:()=>{x(4),Q()},style:{borderBottom:4==y?"5px solid white":"none"}},D("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"RATES")),D("li",{className:i()("mr-1",l.a.tab),onClick:()=>x(5),style:{borderBottom:5==y?"5px solid white":"none"}},D("a",{className:"inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold"},"FRIENDS"))),1==y?D("div",{className:l.a.activity},D("h2",{className:l.a.mobile_activity_label},"ACTIVITY"),D("div",{className:l.a.createPostDiv},D(O.a,{size:50,url:te}),D("input",{className:l.a.createPostInput,placeholder:"What's on your mind?",onClick:oe})),D(b.a,{user:Z,onRatePost:J,onUpdateTimeline:le,likeAction:ne,shareAction:ce,deleteAction:X})):null,5==y?D("div",{className:i()(l.a.friends_list,l.a.sections_content)},null===Z||void 0===Z?void 0:Z.friends.map((e,t)=>D("div",{className:l.a.friend,key:t},D(O.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),D("div",{className:l.a.friend_name},D("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),D(u.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),D(h.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:()=>se(e.username)},"Unfriend"))))):null,3==y?D("div",{className:l.a.photoSection},D(v.a,{user:A,onRatePost:J})):null,4==y?D("div",{className:l.a.ratedSection},D(g.a,{user:{recentRated:B},onRatePost:J})):null,D("div",{className:l.a.mobile_activity},D("h2",{className:l.a.mobile_activity_label},"ACTIVITY"),D("div",{className:l.a.createPostDiv},D(O.a,{size:50,url:te}),D("input",{className:l.a.createPostInput,placeholder:"What's on your mind?",onClick:oe})),D(b.a,{user:Z,onRatePost:J,onUpdateTimeline:le,likeAction:ne,deleteAction:X,shareAction:ce})),D("div",{className:i()(l.a.mobile_friends_list)},D("h2",{style:{fontWeight:"bold"}},"FRIENDS"),null===Z||void 0===Z?void 0:Z.friends.map((e,t)=>D("div",{className:l.a.friend,key:t},D(O.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),D("div",{className:l.a.friend_name},D("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),D(u.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),D(h.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:()=>se(e.username)},"Unfriend"))))),D("hr",null),D("div",{className:l.a.mobile_groups},D("h2",{style:{fontWeight:"bold"}},"GROUPS")),D("div",{className:l.a.mobile_markets},D("h2",{style:{fontWeight:"bold"}},"Marketplace")),D("div",{className:l.a.mobile_ratesection},D("h2",{style:{fontWeight:"bold"}},"RATES"),D(g.a,{user:{recentRated:B},onRatePost:J})),D("div",{className:l.a.mobile_photosection},D("h2",{style:{fontWeight:"bold"}},"PHOTOS"),D(v.a,{user:A,onRatePost:J})))),D("div",{className:l.a.right},D("div",{className:l.a.search},D("p",null,"Search:"),D(z,{placeholder:"Search",onSearch:M,style:{width:200,borderColor:"white",backgroundColor:"transparent"}})),D("div",{className:l.a.trending},D("h1",{className:l.a.trendingText},"TRENDING"),D("div",{className:l.a.trending_content},K&&(null===K||void 0===K?void 0:K.map((e,t)=>D("div",{key:t,className:l.a.trendingContent},D("p",null,"Type: ",e.type),D("p",null,"Date: ",E()(e.createdAt).format("MMM DD, YYYY - HH:mm A")),D("p",null,"Content: ",e.text),D("p",null,"Comments: ",e.commentsCount),D("p",null,"Reactions: ",e.reactionsCount),D("p",null,"Rating: ",e.rating),D("p",null,"Share: ",e.sharesCount),D("br",null))))),D("h1",{className:l.a.trendingText},"TOP RATED"),D("div",{className:l.a.trending_content},W&&(null===W||void 0===W?void 0:W.map((e,t)=>D("div",{key:t,className:l.a.trendingContent},D("p",null,"Type: ",e.type),D("p",null,"Date: ",E()(e.createdAt).format("MMM DD, YYYY - HH:mm A")),D("p",null,"Content: ",e.text),D("p",null,"Comments: ",e.commentsCount),D("p",null,"Reactions: ",e.reactionsCount),D("p",null,"Rating: ",e.rating),D("p",null,"Share: ",e.sharesCount),D("br",null))))))),D(j.a,{title:"Create Post",showModal:C,onClose:()=>S(0)},D(f.a,{loading:r.postingLoading,onPosting:async t=>{try{d(Object(w.c)(!0,"posting"));const o=await Object(p.a)({method:"post",url:"/posts",data:t,headers:{"x-token":e.token}}),{data:s,status:n}=o;if(201===n){S(0);var a=I(I({type:"Post"},s),{},{comments:[],commentsCount:0,rating:null,reactions:[],reactionsCount:0,shares:[],sharesCount:0});Z.activity=[a,...Z.activity],d(Object(w.a)(Z))}else m.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong");return d(Object(w.c)(!1,"posting")),await o}catch(o){d(Object(w.c)(!1,"posting"))}},modalPopup:oe})),D(j.a,{title:"Edit Profile",showModal:P,onClose:()=>T(0)},D(k.a,{onUpdate:async t=>{try{d(Object(w.c)(!0));const a=await Object(p.a)({method:"PUT",url:"/accounts",data:t,headers:{"x-token":e.token}}),{data:o,status:s}=a;return 201===s?U():m.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),d(Object(w.c)(!1)),await a}catch(a){d(Object(w.c)(!1))}},loading:r.postingLoading}))),D("div",{className:l.a.mobile_header},D(R.a,null)))})),B=s.a.createElement;function V(){return B("div",null,B(N.b,null,B(Y,null)))}},rOC1:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var o=a("rePB"),s=a("Ff2n"),n=a("q1tI"),c=a.n(n),l=a("9rZX"),r=a.n(l),i=a("4i/N"),d=a("a/fa"),m=a.n(d),u=a("TSYQ"),h=a.n(u),p=c.a.createElement;r.a.setAppElement("#modal_place");var v={content:{},overlay:{backgroundColor:"rgba(50, 50, 50, .8)"}};function b(e){var t=e.children,a=e.showModal,n=e.narrow_container,c=e.title,l=Object(s.a)(e,["children","showModal","narrow_container","title"]);return p(r.a,{isOpen:a,style:v,className:h()(m.a.modal_content,Object(o.a)({},m.a.narrow,n)),shouldCloseOnOverlayClick:!0,onRequestClose:l.onClose},p("div",{className:m.a.header},p("div",{className:m.a.title},p("p",{style:{color:"white"}},c)),p("button",{className:m.a.close,type:"button",onClick:l.onClose},p(i.a,null))),p("div",{className:m.a.content},t))}},u1GD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a("W+IF")}])}},[["u1GD",0,2,5,10,1,3,4,6,8,7,9,11,12]]]);