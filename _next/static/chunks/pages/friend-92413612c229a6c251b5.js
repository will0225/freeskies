_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"1W+L":function(e,n,t){e.exports={friend_header:"friends_friend_header__my6V7",title:"friends_title__1grEE",friend_content:"friends_friend_content__19jAp",friend_mobile_content:"friends_friend_mobile_content__2Sb9n",header_text:"friends_header_text__2xUhv",friends_list:"friends_friends_list__3o_JQ",friend:"friends_friend__7Omqr",avatar:"friends_avatar__jtbhB",friend_name:"friends_friend_name__nRueN",sections_content:"friends_sections_content__3dw5c"}},B310:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/friend",function(){return t("folX")}])},folX:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return I}));var a=t("q1tI"),r=t.n(a),s=t("o0o1"),i=t.n(s),o=t("HaE+"),l=t("TSYQ"),u=t.n(l),c=(t("T/mL"),t("B3wi")),d=t("jL+W"),f=t("uoqP"),m=t("ZTPi"),p=t("tsqr"),v=t("GzdX"),_=t("2/Rp"),h=t("rePB"),g=r.a.createElement;function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N={loading:!1,friendsData:[],followingsData:[],followersData:[],recommendFriendsData:[]};function w(e,n){var t=n.type,a=n.payload;switch(t){case"friends/SET_LOADING":return b(b({},e),{},{loading:a});case"friends/SET_FRIENDS_DATA":return b(b({},e),{},{friendsData:a});case"friends/SET_FOLLOWINGS_DATA":return b(b({},e),{},{followingsData:a});case"friends/SET_FOLLOWERS_DATA":return b(b({},e),{},{followersData:a});case"friends/SET_RECOMMEND_FRIENDS_DATA":return b(b({},e),{},{recommendFriendsData:a});default:return e}}var x=Object(a.createContext)([{},function(){}]),k=function(e){var n=e.children,t=Object(a.useReducer)(w,N);return g(x.Provider,{value:t},n)};function O(e){switch(e){case"friends":return"friends/SET_LOADING";default:return""}}var D=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"friends";return{type:O(n),payload:e}},S=function(e){return{type:"friends/SET_FRIENDS_DATA",payload:e}},E=function(e){return{type:"friends/SET_FOLLOWINGS_DATA",payload:e}},j=function(e){return{type:"friends/SET_FOLLOWERS_DATA",payload:e}},z=function(e){return{type:"friends/SET_RECOMMEND_FRIENDS_DATA",payload:e}},F=t("1W+L"),T=t.n(F),A=t("ffwR"),R=r.a.createElement,L=m.a.TabPane;var P=Object(d.a)((function(e){var n=e.auth,t=e.authServices,s=Object(a.useContext)(x),l=s[0],d=s[1];Object(a.useEffect)((function(){h(),y(),b(),N()}),[]);var h=function(){var e=Object(o.a)(i.a.mark((function e(){var a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.b)({method:"post",data:{offset:0,first:10},url:"/accounts/friendship/get-friends",headers:{"x-token":n.token}});case 3:a=e.sent,r=a.data,s=a.status,console.log(r),200===s?d(S(r)):403===s?t.refreshToken():p.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=17;break}return e.prev=1,d(D(!0)),e.next=5,Object(f.b)({method:"DELETE",url:"/accounts/friendship",data:{username:t},headers:{"x-token":n.token}});case 5:return a=e.sent,r=a.data,200===a.status?h():p.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),d(D(!1)),e.next=11,a;case 11:return e.abrupt("return",e.sent);case 14:e.prev=14,e.t0=e.catch(1),d(D(!1));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(i.a.mark((function e(){var a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.b)({method:"post",data:{offset:0,first:10},url:"/accounts/followship/following",headers:{"x-token":n.token}});case 3:a=e.sent,r=a.data,s=a.status,console.log(r),200===s?d(E(r)):403===s?t.refreshToken():p.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(i.a.mark((function e(){var a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.b)({method:"post",data:{offset:0,first:10},url:"/accounts/followship/followers",headers:{"x-token":n.token}});case 3:a=e.sent,r=a.data,s=a.status,console.log(r),200===s?d(j(r)):403===s?t.refreshToken():p.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(i.a.mark((function e(){var a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.b)({method:"post",data:{offset:0,first:10},url:"/accounts/friendship/recommended",headers:{"x-token":n.token}});case 3:a=e.sent,r=a.data,s=a.status,console.log(r),200===s?d(z(r)):403===s?t.refreshToken():p.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=19;break}return e.prev=1,d(D(!0)),e.next=5,Object(f.b)({method:"post",url:"/accounts/friendship",data:{username:t},headers:{"x-token":n.token}});case 5:return a=e.sent,a.data,a.status,p.b.success("Deleted successfully!"),e.abrupt("return");case 13:return e.abrupt("return",e.sent);case 16:e.prev=16,e.t0=e.catch(1),d(D(!1));case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=19;break}return e.prev=1,d(D(!0)),e.next=5,Object(f.b)({method:"delete",url:"/accounts/followship",data:{username:t},headers:{"x-token":n.token}});case 5:return a=e.sent,a.data,a.status,p.b.success("Unfollowed successfully!"),e.abrupt("return");case 13:return e.abrupt("return",e.sent);case 16:e.prev=16,e.t0=e.catch(1),d(D(!1));case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(n){return e.apply(this,arguments)}}();return R("div",null,R(c.a,null),R("div",{className:T.a.friend_header},R("h3",{className:T.a.title},"FRIENDS"),R("div",{className:T.a.friend_content},R(m.a,{defaultActiveKey:"1"},R(L,{tab:R("span",null,"Friends"),key:"1"},R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.friendsData.length>0?l.friendsData.map((function(e,n){return R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,username:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return g(e.username)}},"Unfriend")))})):R("div",null,"No Friends"))),R(L,{tab:R("span",null,"Followings"),key:"2"},R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.followingsData.length>0?l.followingsData.map((function(e,n){return R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,username:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return k(e.username)}},"Unfollow")))})):R("div",null,"No Followings"))),R(L,{tab:R("span",null,"Followers"),key:"3"},R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.followersData.length>0?l.followersData.map((function(e,n){return R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,username:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return g(e.username)}},"Unfriend")))})):R("div",null,"No Followers"))),R(L,{tab:R("span",null,"Recommended Friends"),key:"4"},R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.recommendFriendsData.length>0?l.recommendFriendsData.map((function(e,n){return R(r.a.Fragment,null,R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,username:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"default",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return w(e.username)}},"Friend"))))})):R("div",null,"No Recommend Friend"))))),R("div",{className:T.a.friend_mobile_content},R("p",{className:T.a.header_text},"Friends"),R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.friendsData.length>0?l.friendsData.map((function(e,n){return R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,username:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return g(e.username)}},"Unfriend")))})):null),R("p",{className:T.a.header_text},"Followings"),R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.followingsData.length>0?l.followingsData.map((function(e,n){return R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0},username:null===e||void 0===e?void 0:e.username}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return k(e.username)}},"Unfollow")))})):null),R("p",{className:T.a.header_text},"Followers"),R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.followersData.length>0?l.followersData.map((function(e,n){return R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0},username:null===e||void 0===e?void 0:e.username}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"primary",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return g(e.username)}},"Unfriend")))})):null),R("p",{className:T.a.header_text},"Recommended Friends"),R("div",{className:u()(T.a.friends_list,T.a.sections_content)},l.recommendFriendsData.length>0?l.recommendFriendsData.map((function(e,n){return R("div",{className:T.a.friend,key:n},R(A.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0},username:null===e||void 0===e?void 0:e.username}),R("div",{className:T.a.friend_name},R("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),R(v.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),R(_.a,{type:"default",shape:"round",size:"small",style:{marginLeft:5},onClick:function(){return w(e.username)}},"Friend")))})):null))))})),C=r.a.createElement;function I(){return C("div",null,C(k,null,C(P,null)))}}},[["B310",0,2,5,1,3,4,6,7]]]);