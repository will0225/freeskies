_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"67A/":function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return _})),r.d(t,"d",(function(){return l}));var o=r("ZvkC");function n(e){switch(e){case"profile":return o.e;default:return""}}var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"profile";return{type:n(t),payload:e}},a=function(e){return{type:o.d,payload:e}},_=function(e){return{type:o.c,payload:e}},l=function(e){return{type:o.f,payload:e}}},G9ce:function(e,t,r){e.exports={container:"profile_container__CxJIY",left:"profile_left__113tF",profile:"profile_profile__CXB-4",fullname:"profile_fullname__2ulGi",avatar:"profile_avatar__2Y7gb",user_content:"profile_user_content__2PZpI",right:"profile_right__2jH8L",rating_text:"profile_rating_text__3GSXv",tab:"profile_tab__2eKeN",friends_list:"profile_friends_list__2Ibh9",friend:"profile_friend__HDPXQ",friend_name:"profile_friend_name__3tH7a",sections_content:"profile_sections_content__-NRIf",createPostInput:"profile_createPostInput__1XnPt",createPostDiv:"profile_createPostDiv__2kypE",editContainer:"profile_editContainer__l766h",trending:"profile_trending__5ILLt",trendingText:"profile_trendingText__3-uuf",profileTabs:"profile_profileTabs__1Y076",mobile_search:"profile_mobile_search__3yAh2",search:"profile_search__3chpn",activity:"profile_activity__3tN7M",mobile_activity:"profile_mobile_activity__1Um4S",mobile_activity_label:"profile_mobile_activity_label__33X2M",mobile_friends_list:"profile_mobile_friends_list__2Wq6X",mobile_photosection:"profile_mobile_photosection__2QC7q",mobile_ratesection:"profile_mobile_ratesection__2VoWm",mobile_groups:"profile_mobile_groups__itc-K",mobile_markets:"profile_mobile_markets__prd1G",photoSection:"profile_photoSection__ec7Q3",ratedSection:"profile_ratedSection__j6OuF",header:"profile_header__10jFa",mobile_header:"profile_mobile_header__1ei0y",scroll_header:"profile_scroll_header__2hazO",trending_content:"profile_trending_content__16hJy",mobile_profile_header:"profile_mobile_profile_header__1XrQ0"}},Lp5N:function(e,t,r){"use strict";var o=r("q1tI"),n=r.n(o),i=r("G9ce"),a=r.n(i),_=(r("TSYQ"),r("5rEg")),l=r("2/Rp"),c=(r("uoqP"),r("o3/p"),r("Bfm4"),r("A9a1"),r("+eX/"),r("jL+W")),p=r("ZvkC"),f=(r("67A/"),r("ffwR"),r("4nr2"),r("VZWS")),s=n.a.createElement;const{TextArea:u}=_.a;t.a=Object(c.a)((function({auth:e,onUpdate:t,loading:r}){const{0:n,1:i}=Object(o.useContext)(p.a),{accountData:_}=n;console.log(_);const{0:c,1:d}=Object(o.useState)(null===_||void 0===_?void 0:_.lastName),{0:b,1:h}=Object(o.useState)([]),{0:m,1:g}=Object(o.useState)([]);return s("div",{className:a.a.editContainer},s("p",{style:{color:"white"}},"User Name"),s(u,{value:c,onChange:e=>{console.log(c),d(e.target.value)},placeholder:"Write a message",autoSize:{minRows:2,maxRows:5},style:{borderRadius:90,marginBottom:20,paddingTop:13,paddingLeft:23,color:"white"}}),s("p",{style:{color:"white"}},"Profile Phooto"),s("div",{className:a.a.file_place},s(f.a,{files:b,onChange:e=>{console.log(e),h(e)}})),s("p",{style:{color:"white"}},"Profile Background"),s("div",{className:a.a.file_place},s(f.a,{files:m,onChange:e=>{console.log(e),g(e)}})),s("div",{className:a.a.actions_container},s(l.a,{type:"primary",loading:r,onClick:async()=>{try{let r;const o=new FormData;for(var e=0;e<b.length;e++)"image"===b[e].type.split("/")[0]?o.append("profilePhoto",b[e]):o.append("videos",b[e]);for(e=0;e<m.length;e++)"image"===m[e].type.split("/")[0]?o.append("profileBackgroundImage",m[e]):o.append("videos",m[e]);0!==c.length&&o.append("lastName",c),r=o,t(r)}catch(r){console.log(r)}},style:{width:"100%",fontSize:"20px",height:"50px",borderRadius:"6px"}},"Edit")))}))},ZvkC:function(e,t,r){"use strict";r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return p})),r.d(t,"f",(function(){return f})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var o=r("rePB"),n=r("q1tI"),i=r.n(n).a.createElement;function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const l="profile/SET_LOADING",c="profile/SET_FRIENDS_DATA",p="profile/SET_ACCOUNTS_DATA",f="profile/SET_TRENDING_DATA",s={loading:!1,friendData:[],trendingData:[]};function u(e,{type:t,payload:r}){switch(t){case l:return _(_({},e),{},{loading:r});case c:return _(_({},e),{},{friendData:r});case p:return _(_({},e),{},{accountData:r});case f:return _(_({},e),{},{trendingData:r});default:return e}}const d=Object(n.createContext)([{},()=>{}]),b=({children:e})=>{const t=Object(n.useReducer)(u,s);return i(d.Provider,{value:t},e)}},bIQy:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var o=r("q1tI"),n=r.n(o),i=r("Lp5N"),a=r("ZvkC"),_=n.a.createElement;function l(){return _("div",null,_(a.b,null,_(i.a,null)))}},sJuZ:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile-edit",function(){return r("bIQy")}])}},[["sJuZ",0,2,6,10,1,3,4,5,7,8,11,12,13]]]);