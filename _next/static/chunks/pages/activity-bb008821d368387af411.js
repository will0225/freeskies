_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"07EC":function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return T}));var a=o("q1tI"),n=o.n(a),c=o("rePB"),r=o("B3wi"),s=(o("Bfm4"),o("A9a1")),i=o("5D7U"),l=o.n(i),d=o("rOC1"),u=o("ffwR"),m=o("uoqP"),p=o("tsqr"),f=o("jL+W"),_=n.a.createElement;function h(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?h(Object(o),!0).forEach((function(e){Object(c.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}const y={loading:!1,postingLoading:!1,activityData:[]};function g(t,{type:e,payload:o}){switch(e){case"activity/SET_LOADING":return v(v({},t),{},{loading:o});case"activity/SET_POSTING_LOADING":return v(v({},t),{},{postingLoading:o});case"activity/SET_ACTIVITY_DATA":return v(v({},t),{},{activityData:o});default:return t}}const O=Object(a.createContext)([{},()=>{}]),b=({children:t})=>{const e=Object(a.useReducer)(g,y);return _(O.Provider,{value:e},t)};function w(t){switch(t){case"activity":return"activity/SET_LOADING";case"posting":return"activity/SET_POSTING_LOADING";default:return""}}var P=(t,e="activity")=>({type:w(e),payload:t});var j=t=>({type:"activity/SET_ACTIVITY_DATA",payload:t}),C=o("PObt"),D=o("FVaq"),E=n.a.createElement;function S(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function k(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?S(Object(o),!0).forEach((function(e){Object(c.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var A=Object(f.a)((function({authServices:t,auth:e}){var o;const{0:c,1:i}=Object(a.useContext)(O),{0:f,1:_}=Object(a.useState)(!1),{0:h,1:v}=Object(a.useState)(!1),y=async e=>{try{const a=await Object(m.a)({method:"post",url:"/accounts/activity",headers:{"x-token":e}}),{data:n,status:c}=a;if(200===c){var o=n.map(t=>t=g(t));i(j(o))}else 403===c?t.refreshToken(y):p.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong")}catch(a){console.log(a)}},g=t=>"Comment"===t.type?"Post"==t.commented.type?k(k({},t.commented),{},{comments:[k(k({},t),{},{account:t.commented.account})]}):"Comment"==t.commented.type?k(k({},t.commented.commented),{},{comments:[k(k({},t.commented),{},{comments:[t],account:t.commented.commented.account})]}):"Share"==t.commented.type?k(k({},t.commented.shared),{},{comments:[k(k({},t),{},{account:t.commented.shared.account})]}):k(k({},t.commented),{},{comments:[k(k({},t),{},{account:t.commented.account})]}):"Post"===t.type?t:"Share"===t.type?k(k({},t.shared),{},{comments:[k(k({},t),{},{account:t.shared.account})]}):t,b=()=>{_(!0)};Object(a.useEffect)(()=>{y(e.token)},[]);const{user:w}=e;return E(n.a.Fragment,null,E(r.a,null),E("div",{className:l.a.feed},E("div",{className:l.a.feed_container},E("div",{className:l.a.createPostDiv},E(u.a,{size:50,url:null===w||void 0===w||null===(o=w.profilePhoto)||void 0===o?void 0:o.src}),E("input",{className:l.a.createPostInput,placeholder:"What's on your mind?",onClick:b})),E(D.a,{loading:c.loading},E(C.a,{data:c.activityData,onUpdateTimeline:t=>{c.activityData.map(o=>{if(o.id==t.id){let a=k({account:e.user},t.comments[0]);return o.comments.push(a),o.commentsCount+=t.commentsCount,o}}),console.log(c.activityData),i(j(c.activityData))},onRatePost:async(t,o,a)=>{try{i(P(!0,"posting"));let n="";"Photo"===t?n="/photos/rate":"VideoClip"===t?n="/video-clips/rate":"Item"===t?n="/items/rate":"Post"===t?n="/posts/rate":"Comment"===t&&(n="/comments/rate");const r=await Object(m.a)({method:"post",url:n,data:{id:o,rating:a},headers:{"x-token":e.token}}),{data:s,status:l}=r;return console.warn("ratePost",s,l),201===l?(c.activityData.map(e=>{if(e.id===o&&e.type===t)return e.rating=a,e}),i(j(c.activityData))):p.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),i(P(!1,"posting")),await r}catch(n){i(P(!1,"posting"))}},likeAction:async(t,o,a)=>{var n="";"Photo"===t?n="/photos/react":"VideoClip"===t?n="/video-clips/react":"Item"===t?n="/items/react":"Post"===t?n="/posts/react":"Comment"===t?n="/comments/react":"Share"===t&&(n="/shares/react");try{const t=await Object(m.a)({method:"post",url:n,data:{reacted:o,reaction:a},headers:{"x-token":e.token}}),{data:c,status:r}=t;if(201!==r)throw p.b.error((null===c||void 0===c?void 0:c.message)||"Something wrong"),new Error;p.b.success("Added successfully")}catch(c){console.log(c)}},shareAction:async(t,o)=>{var a="";"Photo"===t?a="/photos/share":"VideoClip"===t?a="/video-clips/share":"Item"===t?a="/items/share":"Post"===t?a="/posts/share":"Comment"===t?a="/comments/share":"Share"===t&&(a="/posts/share");try{const t=await Object(m.a)({method:"post",url:a,data:{shared:o},headers:{"x-token":e.token}}),{data:n,status:c}=t;if(201!==c)throw p.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong"),new Error;p.b.success("Shared successfully")}catch(n){console.log(n)}},deleteAction:async t=>{try{const a=await Object(m.a)({method:"delete",url:"/posts",data:{id:t},headers:{"x-token":e.token}}),{data:n,status:r}=a;if(400!==r){var o=c.activityData.filter(e=>e.id!==t);i(j(o)),p.b.success("Deleted successfully!")}else p.b.error("This post deleting does not allowed!")}catch(a){console.log(a)}}})))),E(d.a,{title:"Create Post",showModal:f,onClose:()=>_(0)},E(s.a,{loading:c.postingLoading,onPosting:async t=>{try{i(P(!0,"posting"));const o=await Object(m.a)({method:"post",url:"/posts",data:t,headers:{"x-token":e.token}}),{data:a,status:n}=o;if(201===n){_(0);let t=[k(k({type:"Post"},a),{},{comments:[],commentsCount:0,rating:null,reactions:[],reactionsCount:0,shares:[],sharesCount:0,account:e.user}),...c.activityData];console.log(t),i(j(t))}else p.b.error((null===a||void 0===a?void 0:a.message)||"Something wrong");return i(P(!1,"posting")),await o}catch(o){i(P(!1,"posting"))}},modalPopup:b})))})),N=n.a.createElement;function T(){return N("div",null,N(b,null,N(A,null)))}},"5D7U":function(t,e,o){t.exports={feed:"feed_feed__3HJC8",createPostInput:"feed_createPostInput__36HyW",createPostDiv:"feed_createPostDiv__3Zj4X",mobile_profile_header:"feed_mobile_profile_header__2aDWK"}},Bfm4:function(t,e,o){"use strict";o.d(e,"a",(function(){return u}));var a=o("q1tI"),n=o.n(a),c=o("aZUF"),r=o.n(c),s=o("2/Rp"),i=(o("TSYQ"),o("nOHt")),l=(o("ffwR"),o("PObt")),d=n.a.createElement;function u({user:t,onRatePost:e,onUpdateTimeline:o,likeAction:a,shareAction:n,deleteAction:c}){var u;const m=Object(i.useRouter)(),p=(null!==t&&void 0!==t&&"https://freeskies.com/static/".concat(null===(u=t.profilePhoto)||void 0===u?void 0:u.src),null!==t&&void 0!==t?null===t||void 0===t?void 0:t.activity.map(e=>(e.account=t,e)):[]);return d("div",{className:r.a.activity_content},d("div",{className:r.a.section_title},d(s.a,{type:"link",onClick:()=>{m.push("/activity")}},"All activities")),0!==p.length&&d(l.a,{data:p,onRatePost:e,onUpdateTimeline:o,likeAction:a,shareAction:n,deleteAction:c}))}},FVaq:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var a=o("q1tI"),n=o.n(a),c={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},r=o("6VBw"),s=function(t,e){return a.createElement(r.a,Object.assign({},t,{ref:e,icon:c}))};s.displayName="LoadingOutlined";var i=a.forwardRef(s),l=n.a.createElement;function d(t){var e=t.loading,o=t.children;return e?l("div",{style:{margin:"2em",textAlign:"center"}},l(i,{style:{fontSize:"2em",color:"#407cff"}})):o}},aZUF:function(t,e,o){t.exports={activity_content:"feed-post_activity_content__3N-h7",section_title:"feed-post_section_title__1we2Z",post:"feed-post_post__bhijE",post_header:"feed-post_post_header__1Sj-6",avatar:"feed-post_avatar__O0xLc",user_info:"feed-post_user_info__29hGR",user_name:"feed-post_user_name__5k8XZ",date:"feed-post_date__2-Vtb",post_content:"feed-post_post_content__2oE53",description:"feed-post_description__10C5X",image:"feed-post_image__3H2wO",post_actions:"feed-post_post_actions__1-APA",posts:"feed-post_posts__3gKRn",comments:"feed-post_comments__2alYi"}},pAKN:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/activity",function(){return o("07EC")}])},rOC1:function(t,e,o){"use strict";o.d(e,"a",(function(){return h}));var a=o("rePB"),n=o("Ff2n"),c=o("q1tI"),r=o.n(c),s=o("9rZX"),i=o.n(s),l=o("4i/N"),d=o("a/fa"),u=o.n(d),m=o("TSYQ"),p=o.n(m),f=r.a.createElement;i.a.setAppElement("#modal_place");var _={content:{},overlay:{backgroundColor:"rgba(50, 50, 50, .8)"}};function h(t){var e=t.children,o=t.showModal,c=t.narrow_container,r=t.title,s=Object(n.a)(t,["children","showModal","narrow_container","title"]);return f(i.a,{isOpen:o,style:_,className:p()(u.a.modal_content,Object(a.a)({},u.a.narrow,c)),shouldCloseOnOverlayClick:!0,onRequestClose:s.onClose},f("div",{className:u.a.header},f("div",{className:u.a.title},f("p",{style:{color:"white"}},r)),f("button",{className:u.a.close,type:"button",onClick:s.onClose},f(l.a,null))),f("div",{className:u.a.content},e))}}},[["pAKN",0,2,5,10,1,3,4,6,7,9,8,11,12]]]);