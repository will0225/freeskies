_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{PavT:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[username]",function(){return a("k/Hk")}])},h2kq:function(e,t,a){e.exports={header:"userprofile_header__38A0v",left:"userprofile_left__3nQMM",profile:"userprofile_profile__2kSqE",fullname:"userprofile_fullname__2Vq2v",avatar:"userprofile_avatar__37Gh1",user_content:"userprofile_user_content__2h01n",profile_content:"userprofile_profile_content__1XdVR",profile_tabs:"userprofile_profile_tabs__19hFH",mobile_profile_tabs:"userprofile_mobile_profile_tabs__1d_C0",tab:"userprofile_tab__J6gtj",activity_label:"userprofile_activity_label__1zzQM",container:"userprofile_container__2feiw",rating_text:"userprofile_rating_text__wowBd",profile_user_button:"userprofile_profile_user_button__3nfWF",follow_button:"userprofile_follow_button__1i2lr",profile_user_button_space:"userprofile_profile_user_button_space__1a2q6",friends_list:"userprofile_friends_list__EKdDD",friend:"userprofile_friend__x66py",friend_name:"userprofile_friend_name__2wZQc",sections_content:"userprofile_sections_content__8ishu"}},"k/Hk":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var o=a("q1tI"),s=a.n(o),r=a("rePB"),n=a("TSYQ"),c=a.n(n),i=a("ZTPi"),l=a("tsqr"),u=a("GzdX"),d=a("2/Rp"),m=a("uoqP"),p=a("o3/p"),f=(a("Bfm4"),a("A9a1"),a("+eX/")),_=a("jL+W"),h=a("ffwR"),v=(a("4nr2"),a("rOC1"),a("VIWY"),a("wd/R"),a("B3wi")),y=a("nOHt"),b=s.a.createElement;function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const O={loading:!1,user_accountData:[],activityData:[],friendsData:[],photosData:[],ratesData:[]};function N(e,{type:t,payload:a}){switch(t){case"userprofile/SET_LOADING":return w(w({},e),{},{loading:a});case"userprofile/SET_ACTIVITY_DATA":return w(w({},e),{},{activityData:a});case"userprofile/SET_USER_ACCOUNT_DATA":return w(w({},e),{},{user_accountData:a});case"userprofile/SET_FRIENDS_DATA":return w(w({},e),{},{friendsData:a});case"userprofile/SET_PHOTOS_DATA":return w(w({},e),{},{photosData:a});case"userprofile/SET_RATES_DATA":return w(w({},e),{},{ratesData:a});default:return e}}const D=Object(o.createContext)([{},()=>{}]),k=({children:e})=>{const t=Object(o.useReducer)(N,O);return b(D.Provider,{value:t},e)};var T=e=>({type:"userprofile/SET_USER_ACCOUNT_DATA",payload:e});function S(e){switch(e){case"userprofile":return"userprofile/SET_LOADING";default:return""}}var A=(e,t="userprofile")=>({type:S(t),payload:e});var P=e=>({type:"userprofile/SET_ACTIVITY_DATA",payload:e});var j=e=>({type:"userprofile/SET_FRIENDS_DATA",payload:e});var E=e=>({type:"userprofile/SET_PHOTOS_DATA",payload:e});var C=e=>({type:"userprofile/SET_RATES_DATA",payload:e}),x=a("PObt"),R=a("h2kq"),I=a.n(R),F=s.a.createElement;function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const{TabPane:U}=i.a;var q=Object(_.a)((function({auth:e,authServices:t}){var a,r,n,_,b,g,w;const O=Object(y.useRouter)(),{username:N}=O.query,{0:k,1:S}=Object(o.useContext)(D);Object(o.useEffect)(()=>{R(),V(),q(),H(),L()},[]);const R=async()=>{try{const a=await Object(m.a)({method:"post",url:"/accounts/get-account",data:{username:N},headers:{"x-token":e.token}}),{data:o,status:s}=a;200===s?S(T(o)):403===s?t.refreshToken():l.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong")}catch(a){console.log(a)}},V=async()=>{try{const o=await Object(m.a)({method:"post",url:"/accounts/get-account-activity",data:{username:N},headers:{"x-token":e.token}}),{data:s,status:r}=o;if(200===r){var a=s.map(e=>e=Y(e));S(P(a))}else 403===r?t.refreshToken():l.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong")}catch(o){console.log(o)}},q=async()=>{try{const a=await Object(m.a)({method:"post",url:"/accounts/get-account-friends",data:{username:N,offset:0,first:10},headers:{"x-token":e.token}}),{data:o,status:s}=a;200===s?S(j(o)):403===s?t.refreshToken():l.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong")}catch(a){console.log(a)}},H=async()=>{try{const a=await Object(m.a)({method:"post",url:"/accounts/get-account-photos",data:{username:N,offset:0,first:10},headers:{"x-token":e.token}}),{data:o,status:s}=a;200===s?S(E(o)):403===s?t.refreshToken():l.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong")}catch(a){console.log(a)}},L=async()=>{try{const a=await Object(m.a)({method:"post",url:"/accounts/get-account-rated",data:{username:N,offset:0,first:10},headers:{"x-token":e.token}}),{data:o,status:s}=a;200===s?S(C(o)):403===s?t.refreshToken():l.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong")}catch(a){console.log(a)}},Y=e=>"Comment"===e.type?"Post"==e.commented.type?z(z({},e.commented),{},{comments:[z(z({},e),{},{account:e.account})]}):"Comment"==e.commented.type?z(z({},e.commented.commented),{},{comments:[z(z({},e.commented),{},{comments:[e]})]}):"Share"==e.commented.type?z(z({},e.commented.shared),{},{comments:[z(z({},e),{},{account:e.account})]}):z(z({},e.commented),{},{comments:[z(z({},e),{},{account:e.account})]}):"Post"===e.type?e:"Share"===e.type?z(z({},e.shared),{},{comments:[z(z({},e),{},{account:e.account})]}):e,X=async(t,a,o)=>{try{let s="";"Photo"===t?s="/photos/rate":"VideoClip"===t?s="/video-clips/rate":"Item"===t?s="/items/rate":"Post"===t?s="/posts/rate":"Comment"===t&&(s="/comments/rate");const r=await Object(m.a)({method:"post",url:s,data:{id:a,rating:o},headers:{"x-token":e.token}}),{data:n,status:c}=r;return 201===c?(k.activityData.map(e=>{if(e.id===a&&e.type===t)return e.rating=o,e}),S(setActivity(k.activityData))):l.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong"),await r}catch(s){console.log(s)}},B=async(t,a,o)=>{var s="";"Photo"===t?s="/photos/react":"VideoClip"===t?s="/video-clips/react":"Item"===t?s="/items/react":"Post"===t?s="/posts/react":"Comment"===t?s="/comments/react":"Share"===t&&(s="/shares/react");try{const t=await Object(m.a)({method:"post",url:s,data:{reacted:a,reaction:o},headers:{"x-token":e.token}}),{data:r,status:n}=t;if(201!==n)throw l.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),new Error;l.b.success("Added successfully")}catch(r){console.log(r)}},M=async(t,a)=>{var o="";"Photo"===t?o="/photos/share":"VideoClip"===t?o="/video-clips/share":"Item"===t?o="/items/share":"Post"===t?o="/posts/share":"Comment"===t?o="/comments/share":"Share"===t&&(o="/posts/share");try{const t=await Object(m.a)({method:"post",url:o,data:{shared:a},headers:{"x-token":e.token}}),{data:s,status:r}=t;if(201!==r)throw l.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),new Error;l.b.success("Shared successfully")}catch(s){console.log(s)}},Q=async t=>{if(""!==t)try{const a=await Object(m.a)({method:"post",url:"/accounts/friendship",data:{username:t},headers:{"x-token":e.token}}),{data:o,status:s}=a;return 204===s?l.b.success("Added Friend successfully"):l.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),await a}catch(a){console.log(a)}},W=t=>{console.log(e),k.activityData.map(a=>{if(a.id==t.id){let o=z({account:e.user},t.comments[0]);return a.comments.push(o),a.commentsCount+=t.commentsCount,a}}),S(P(k.activityData))};return console.log(k),F(s.a.Fragment,null,F(v.a,null),F("div",{className:I.a.container},F("div",{className:I.a.left},0!==k.user_accountData.length?F("div",{className:I.a.profile},F("div",{className:I.a.avatar},F("div",{className:I.a.avatar_image},F(h.a,{size:140,url:"".concat(null===(a=k.user_accountData)||void 0===a||null===(r=a.profilePhoto)||void 0===r?void 0:r.src),text:null===(n=k.user_accountData)||void 0===n?void 0:n.username}))),F("div",{className:I.a.user_content},F("div",{className:I.a.user_info},F("div",{className:I.a.heade_section},F("div",{className:I.a.left_side},F("p",{className:I.a.fullname,style:{cursor:"pointer"}},F("span",null,"".concat(null===(_=k.user_accountData)||void 0===_?void 0:_.firstName," ").concat(null===(b=k.user_accountData)||void 0===b?void 0:b.lastName)))),F("div",{className:I.a.right_side},F("p",{className:I.a.rating},F(u.a,{defaultValue:null===(g=k.user_accountData)||void 0===g?void 0:g.rating,style:{color:"#fadb14",fontSize:"30px"},onHoverChange:t=>{"undefined"!==typeof t&&(async t=>{if(""!==N)try{S(A(!0));const a=await Object(m.a)({method:"post",url:"/accounts/rate",data:{username:N,rating:t},headers:{"x-token":e.token}}),{data:o,status:s}=a;201===s?R():l.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),S(A(!1)),await a}catch(a){S(A(!1))}})(t)}}),F("span",{className:I.a.rating_text},null===(w=k.user_accountData)||void 0===w?void 0:w.rating))))))):F("div",{className:"border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"},F("div",{className:"animate-pulse flex space-x-4"},F("div",{className:"rounded-full bg-gray-400 h-12 w-12"}),F("div",{className:"flex-1 space-y-4 py-1"},F("div",{className:"h-4 bg-gray-400 rounded w-3/4"}),F("div",{className:"space-y-2"},F("div",{className:"h-4 bg-gray-400 rounded"}),F("div",{className:"h-4 bg-gray-400 rounded w-5/6"}))))),F("div",{className:I.a.profile_user_button},k.user_accountData.isFriend?F(d.a,{type:"primary",className:I.a.follow_button,className:I.a.follow_button,onClick:()=>(async t=>{if(""!==t)try{const a=await Object(m.a)({method:"delete",url:"/accounts/friendship",data:{username:t},headers:{"x-token":e.token}}),{data:o,status:s}=a;return 201===s?l.b.success("Deleted Friend successfully"):l.b.error((null===o||void 0===o?void 0:o.message)||"Something wrong"),await a}catch(a){console.log(a)}})(k.user_accountData.username)},"UNFRIEND"):F(d.a,{type:"primary",className:I.a.follow_button,onClick:()=>Q(k.user_accountData.username)},"ADD FRIEND"),F("div",{className:I.a.profile_user_button_space}),k.user_accountData.isFollow?F(d.a,{type:"primary",className:I.a.follow_button,onClick:()=>(async t=>{if(""!==t)try{const a=await Object(m.a)({method:"delete",url:"/accounts/followship",data:{username:t},headers:{"x-token":e.token}}),{data:o,status:s}=a;return void l.b.success("Unfollowed successfully!")}catch(a){S(A(!1))}})(k.user_accountData.username)},"UNFOLLOW"):F(d.a,{type:"primary",className:I.a.follow_button,onClick:()=>(async t=>{if(""!==t)try{S(A(!0));const a=await Object(m.a)({method:"post",url:"/accounts/followship",data:{username:t},headers:{"x-token":e.token}}),{data:o,status:s}=a;return void l.b.success("Followed successfully!")}catch(a){S(A(!1))}})(k.user_accountData.username)},"FOLLOW")),F("div",{className:I.a.profile_content},F("div",{className:I.a.profile_tabs},F(i.a,{defaultActiveKey:"1"},F(U,{tab:F("span",{className:I.a.tab},"ACTIVITY"),key:"1"},F("h2",{className:I.a.activity_label},"ACTIVITY"),F(x.a,{data:k.activityData,onUpdateTimeline:W,onRatePost:X,likeAction:B,shareAction:M,deleteAction:()=>{},disableDelete:!0})),F(U,{tab:F("span",{className:I.a.tab},"FRIENDS"),key:"2"},F("div",{className:c()(I.a.friends_list,I.a.sections_content)},null===k||void 0===k?void 0:k.friendsData.map((e,t)=>F("div",{className:I.a.friend,key:t},F(h.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),F("div",{className:I.a.friend_name},F("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),F(u.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),F(d.a,{type:"default",shape:"round",size:"small",style:{marginLeft:5},onClick:()=>Q(e.username)},"Friend")))))),F(U,{tab:F("span",{className:I.a.tab},"PHOTOS"),key:"3"},F("div",{className:I.a.photoSection},F(p.a,{user:k.photosData,onRatePost:X,otherUser:!0}))),F(U,{tab:F("span",{className:I.a.tab},"RATED"),key:"4"},F(f.a,{user:{recentRated:k.ratesData},onRatePost:X,otherUser:!0})))),F("div",{className:I.a.mobile_profile_tabs},F("h2",{className:I.a.activity_label},"ACTIVITY"),F(x.a,{data:k.activityData,onUpdateTimeline:W,onRatePost:X,likeAction:B,shareAction:M,deleteAction:()=>{},disableDelete:!0}),F("h2",{className:I.a.activity_label},"FRIENDS"),F("div",{className:c()(I.a.friends_list,I.a.sections_content)},null===k||void 0===k?void 0:k.friendsData.map((e,t)=>F("div",{className:I.a.friend,key:t},F(h.a,{size:80,url:null===e||void 0===e?void 0:e.profilePhoto,text:null===e||void 0===e?void 0:e.username,style:{marginRight:0}}),F("div",{className:I.a.friend_name},F("p",{style:{textAlign:"left",fontSize:20}},e.firstName," ",e.lastName),F(u.a,{defaultValue:e.rating,style:{color:"#fadb14",fontSize:"15px"}}),F(d.a,{type:"default",shape:"round",size:"small",style:{marginLeft:5},onClick:()=>Q(e.username)},"Friend"))))),F("h2",{className:I.a.activity_label},"PHOTOS"),F(p.a,{user:k.photosData,onRatePost:X,otherUser:!0}),F("h2",{className:I.a.activity_label},"RATES"),F(f.a,{user:{recentRated:k.ratesData},onRatePost:X,otherUser:!0}))))))})),H=s.a.createElement;function L(){return H("div",null,H(k,null,H(q,null)))}},rOC1:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var o=a("rePB"),s=a("Ff2n"),r=a("q1tI"),n=a.n(r),c=a("9rZX"),i=a.n(c),l=a("4i/N"),u=a("a/fa"),d=a.n(u),m=a("TSYQ"),p=a.n(m),f=n.a.createElement;i.a.setAppElement("#modal_place");var _={content:{},overlay:{backgroundColor:"rgba(50, 50, 50, .8)"}};function h(e){var t=e.children,a=e.showModal,r=e.narrow_container,n=e.title,c=Object(s.a)(e,["children","showModal","narrow_container","title"]);return f(i.a,{isOpen:a,style:_,className:p()(d.a.modal_content,Object(o.a)({},d.a.narrow,r)),shouldCloseOnOverlayClick:!0,onRequestClose:c.onClose},f("div",{className:d.a.header},f("div",{className:d.a.title},f("p",{style:{color:"white"}},n)),f("button",{className:d.a.close,type:"button",onClick:c.onClose},f(l.a,null))),f("div",{className:d.a.content},t))}}},[["PavT",0,2,6,10,1,3,4,5,7,8,9,11,12,13]]]);