_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"0CpR":function(t,o,e){t.exports={container:"photos_container__2ZDCf",container_bg:"photos_container_bg__2vUHm",container_radius:"photos_container_radius__1sSEA",page_title:"photos_page_title__w5Nuo",content:"photos_content__3JBP5",photo_container:"photos_photo_container__1DLuo",photo:"photos_photo__14wlp"}},XXki:function(t,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photos",function(){return e("gQxN")}])},gQxN:function(t,o,e){"use strict";e.r(o),e.d(o,"default",(function(){return I}));var n=e("q1tI"),a=e.n(n),r=e("TSYQ"),s=e.n(r),c=e("T/mL"),i=e("B3wi"),l=e("pVHP"),p=e("0CpR"),u=e.n(p),_=e("jL+W"),d=e("rePB"),h=a.a.createElement;function g(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function b(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?g(Object(e),!0).forEach((function(o){Object(d.a)(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}const v={loading:!1,postingLoading:!1,photosData:[]};function O(t,{type:o,payload:e}){switch(o){case"photos/SET_LOADING":return b(b({},t),{},{loading:e});case"photos/SET_POSTING_LOADING":return b(b({},t),{},{postingLoading:e});case"photos/SET_PHOTOS_DATA":return b(b({},t),{},{photosData:e});default:return t}}const f=Object(n.createContext)([{},()=>{}]),m=({children:t})=>{const o=Object(n.useReducer)(O,v);return h(f.Provider,{value:o},t)};var w=t=>({type:"photos/SET_PHOTOS_DATA",payload:t}),y=e("uoqP"),j=e("tsqr"),P=e("2/Rp"),N=e("5rEg"),C=e("ZTPi"),T=e("VZWS"),S=e("jXTy"),E=e.n(S),k=a.a.createElement;const{TextArea:D}=N.a,{TabPane:x}=C.a;function A({onPosting:t,loading:o}){const{0:e,1:a}=Object(n.useState)(""),{0:r,1:s}=Object(n.useState)([]),c=t=>{s(t)};return k("div",{className:E.a.activity_posting},k("div",null,k(D,{value:e,onChange:t=>{a(t.target.value)},placeholder:"Write a photo caption",autoSize:{minRows:2,maxRows:5},style:{color:"white"}}),k("div",{className:E.a.file_place},k(T.a,{files:r,onChange:c}))),k("div",{className:E.a.actions_container},k(P.a,{type:"primary",loading:o,onClick:async()=>{try{let n;const s=new FormData;for(var o=0;o<r.length;o++)s.append("file",r[o]);0!==e.length&&s.append("caption",e),n=s,t(n),c([]),a("")}catch(n){console.log(n)}},style:{width:"100%",fontSize:"20px",height:"50px",borderRadius:"6px"}},"Create")))}var X=e("rOC1"),R=a.a.createElement;var L=Object(_.a)((function({auth:t,authServices:o}){const{0:e,1:a}=Object(n.useContext)(f),{0:r,1:p}=Object(n.useState)([]),{0:_,1:d}=Object(n.useState)(!1),h=async e=>{try{const e=await Object(y.a)({method:"post",url:"/accounts/photos",headers:{"x-token":t.token}}),{data:n,status:r}=e;200===r?a(w(n)):403===r?o.refreshToken(h):j.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong")}catch(n){console.log(n)}},g=async n=>{try{const r=await Object(y.a)({method:"post",url:"/photos",data:n,headers:{"x-token":t.token}}),{data:s,status:c}=r;201===c?(d(0),a(w([...e.photosData,s]))):403===c?o.refreshToken(g):j.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong")}catch(r){console.log(r)}};Object(n.useEffect)(()=>{h()},[]);const[b,v]=Object(c.b)(({in:t})=>R(l.a,{title:"Photo detail",showModal:t,onClose:v,data:null===e||void 0===e?void 0:e.photosData}));return R("div",null,R(i.a,null),R("div",{className:s()(u.a.container,u.a.container_bg,u.a.container_radius)},R("div",{className:u.a.page_title},"Photos",R(P.a,{style:{float:"right",background:"transparent",color:"#0d7ac7"},onClick:()=>d(!0)},"Add Photos/Video")),R("div",{className:u.a.content},null===e||void 0===e?void 0:e.photosData.map(t=>R("div",{className:u.a.photo_container,key:t.id,onClick:()=>b()},R("div",{className:u.a.photo},R("img",{src:"https://www.freeskies.com/static/".concat(t.src),alt:""})))))),R(X.a,{title:"Create Photos",showModal:_,onClose:()=>d(0)},R(A,{onPosting:g})))})),q=a.a.createElement;function I(){return q("div",null,q(m,null,q(L,null)))}},jXTy:function(t,o,e){t.exports={activity_posting:"posting-photos_activity_posting__3Ww9-",actions_container:"posting-photos_actions_container__z4y_4","button-container":"posting-photos_button-container__1aTEK","ant-btn-primary":"posting-photos_ant-btn-primary__14JVQ",file_place:"posting-photos_file_place__34jvT"}},rOC1:function(t,o,e){"use strict";e.d(o,"a",(function(){return b}));var n=e("rePB"),a=e("Ff2n"),r=e("q1tI"),s=e.n(r),c=e("9rZX"),i=e.n(c),l=e("4i/N"),p=e("a/fa"),u=e.n(p),_=e("TSYQ"),d=e.n(_),h=s.a.createElement;i.a.setAppElement("#modal_place");var g={content:{},overlay:{backgroundColor:"rgba(50, 50, 50, .8)"}};function b(t){var o=t.children,e=t.showModal,r=t.narrow_container,s=t.title,c=Object(a.a)(t,["children","showModal","narrow_container","title"]);return h(i.a,{isOpen:e,style:g,className:d()(u.a.modal_content,Object(n.a)({},u.a.narrow,r)),shouldCloseOnOverlayClick:!0,onRequestClose:c.onClose},h("div",{className:u.a.header},h("div",{className:u.a.title},h("p",{style:{color:"white"}},s)),h("button",{className:u.a.close,type:"button",onClick:c.onClose},h(l.a,null))),h("div",{className:u.a.content},o))}}},[["XXki",0,2,5,1,3,4,6,7,9,8]]]);