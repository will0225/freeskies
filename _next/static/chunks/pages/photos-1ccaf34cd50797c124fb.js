_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"0CpR":function(e,t,n){e.exports={container:"photos_container__2ZDCf",container_bg:"photos_container_bg__2vUHm",container_radius:"photos_container_radius__1sSEA",page_title:"photos_page_title__w5Nuo",content:"photos_content__3JBP5",photo_container:"photos_photo_container__1DLuo",photo:"photos_photo__14wlp",editWrapper:"photos_editWrapper__3QJ0-"}},QMsE:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n("o0o1"),r=n.n(o),a=n("HaE+"),c=n("q1tI"),s=n.n(c),i=n("5rEg"),u=n("ZTPi"),l=n("2/Rp"),p=n("VZWS"),d=n("jXTy"),f=n.n(d),h=(n("T/mL"),s.a.createElement),m=i.a.TextArea;u.a.TabPane;function b(e){var t=e.onPosting,n=e.loading,o=Object(c.useState)(""),s=o[0],i=o[1],u=Object(c.useState)([]),d=u[0],b=u[1],v=function(){var e=Object(a.a)(r.a.mark((function e(){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{for(n=new FormData,o=0;o<d.length;o++)n.append("file",d[o]);0!==s.length&&n.append("caption",s),t(n),g([]),i("")}catch(r){console.log(r)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){b(e)};return h("div",{className:f.a.activity_posting},h("div",null,h(m,{value:s,onChange:function(e){i(e.target.value)},placeholder:"Write a photo caption",autoSize:{minRows:2,maxRows:5},style:{color:"white"}}),h("div",{className:f.a.file_place},h(p.a,{files:d,onChange:g}))),h("div",{className:f.a.actions_container},h(l.a,{type:"primary",loading:n,onClick:v,style:{width:"100%",fontSize:"20px",height:"50px",borderRadius:"6px"}},"Create")))}},"T/mL":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n("q1tI"),r=n.n(o),a=n("i8i4"),c=n.n(a),s=function(){throw new Error("Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.")},i=r.a.createContext({showModal:s,hideModal:s}),u=function(){return(u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var l=Object(o.memo)((function(e){return(0,e.component)(function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n}(e,["component"]))})),p=Object(o.memo)((function(e){var t=e.modals,n=e.container,a=e.component,s=void 0===a?r.a.Fragment:a,i=Object(o.useState)(void 0),u=i[0],p=i[1];return Object(o.useEffect)((function(){return p(n||document.body)})),u?c.a.createPortal(r.a.createElement(s,null,Object.keys(t).map((function(e){return r.a.createElement(l,{key:e,component:t[e]})}))),u):null})),d=function(e){var t=e.container,n=e.rootComponent,a=e.children;if(t&&!(t instanceof HTMLElement))throw new Error("Container must specify DOM element to mount modal root into.\n    \n    This behavior has changed in 3.0.0. Please use `rootComponent` prop instead.\n    See: https://github.com/mpontus/react-modal-hook/issues/18");var c=Object(o.useState)({}),s=c[0],l=c[1],d=Object(o.useCallback)((function(e,t){return l((function(n){var o;return u({},n,((o={})[e]=t,o))}))}),[]),f=Object(o.useCallback)((function(e){return l((function(t){var n=u({},t);return delete n[e],n}))}),[]),h=Object(o.useMemo)((function(){return{showModal:d,hideModal:f}}),[]);return r.a.createElement(i.Provider,{value:h},r.a.createElement(r.a.Fragment,null,a,r.a.createElement(p,{modals:s,component:n,container:t})))},f=function(){var e=0;return function(){return""+ ++e}}(),h=function(e,t){if(void 0===t&&(t=[]),!function(e){var t=e.prototype;return!t||!t.isReactComponent}(e))throw new Error("Only stateless components can be used as an argument to useModal. You have probably passed a class component where a function was expected.");var n=Object(o.useMemo)(f,[]),r=Object(o.useMemo)((function(){return e}),t),a=Object(o.useContext)(i),c=Object(o.useState)(!1),s=c[0],u=c[1],l=Object(o.useCallback)((function(){return u(!0)}),[]),p=Object(o.useCallback)((function(){return u(!1)}),[]);return Object(o.useEffect)((function(){return s?a.showModal(n,r):a.hideModal(n),function(){return a.hideModal(n)}}),[r,s]),[l,p]}},XXki:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photos",function(){return n("gQxN")}])},gQxN:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var o=n("q1tI"),r=n.n(o),a=n("ODXe"),c=n("rePB"),s=n("KQm4"),i=n("o0o1"),u=n.n(i),l=n("HaE+"),p=n("TSYQ"),d=n.n(p),f=n("T/mL"),h=n("B3wi"),m=n("pVHP"),b=(n("wx14"),n("Ff2n"),n("9rZX"),n("J3NM"),n("a/fa"),n("5bA4"),n("UESt"),n("VZWS"),n("5rEg")),v=n("uoqP");r.a.createElement,b.a.TextArea;var g=n("0CpR"),O=n.n(g),_=n("jL+W"),w=n("NtVA"),k=n("Dlky"),y=n("tsqr"),j=n("2/Rp"),x=n("BvKs"),P=n("jsC+"),E=n("QMsE"),C=n("rOC1"),S=n("/MfK"),M=n("9mgU"),T=r.a.createElement;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var D=Object(_.a)((function(e){var t=e.auth,n=e.authServices,r=Object(o.useContext)(w.a),i=r[0],p=r[1],b=Object(o.useState)(!1),g=b[0],_=b[1],D=null===i||void 0===i?void 0:i.photosData.filter((function(e){return"Photo"===e.type})),I=function(){var e=Object(l.a)(u.a.mark((function e(o){var r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.b)({method:"post",url:"/accounts/photos",headers:{"x-token":t.token}});case 3:r=e.sent,a=r.data,200===(c=r.status)?p(Object(k.c)(a)):403===c?n.refreshToken(I):y.b.error((null===a||void 0===a?void 0:a.message)||"Something wrong"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(u.a.mark((function e(o){var r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.b)({method:"post",url:"/photos",data:o,headers:{"x-token":t.token}});case 3:r=e.sent,a=r.data,201===(c=r.status)?(_(0),p(Object(k.c)([].concat(Object(s.a)(i.photosData),[a])))):403===c?n.refreshToken(X):y.b.error((null===a||void 0===a?void 0:a.message)||"Something wrong"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark((function e(n){var o,r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.b)({method:"delete",url:"/photos",data:{id:n},headers:{"x-token":t.token}});case 3:o=e.sent,r=o.data,204===(a=o.status)?(c=null===i||void 0===i?void 0:i.photosData.filter((function(e){return e.id!==n})),p(Object(k.c)(c)),y.b.success("Deleted successfully!")):403===a?y.b.error("Please refresh page!"):y.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(u.a.mark((function e(o,r,a){var c,s,l,d,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="","Photo"===o?c="/photos/react":"VideoClip"===o?c="/video-clips/react":"Item"===o?c="/items/react":"Post"===o?c="/posts/react":"Comment"===o?c="/comments/react":"Share"===o?c="/shares/react":"MarketplaceItemForSale"===o?c="/marketplace/items-for-sale/react":"MarketplaceItemToBuy"===o&&(c="/marketplace/items-to-buy/react"),e.prev=2,e.next=5,Object(v.b)({method:"post",url:c,data:{reacted:r,reaction:a},headers:{"x-token":t.token}});case 5:if(s=e.sent,l=s.data,201!==(d=s.status)){e.next=11;break}f=null===i||void 0===i?void 0:i.photosData.map((function(e,t){if(e.id===r)return e.reactions[0].reaction,e;p(Object(k.c)(f))})),e.next=17;break;case 11:if(403!=d){e.next=15;break}n.refreshToken(),e.next=17;break;case 15:throw y.b.error((null===l||void 0===l?void 0:l.message)||"Something wrong"),new Error;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t,n,o){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(u.a.mark((function e(o,r){var a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="","Photo"===o?a="/photos/share":"VideoClip"===o?a="/video-clips/share":"Item"===o?a="/items/share":"Post"===o?a="/posts/share":"Comment"===o?a="/comments/share":"Share"===o?a="/posts/share":"MarketplaceItemForSale"===o?a="/marketplace/items-for-sale/share":"MarketplaceItemToBuy"===o&&(a="/marketplace/items-to-buy/share"),e.prev=2,e.next=5,Object(v.b)({method:"post",url:a,data:{shared:r},headers:{"x-token":t.token}});case 5:if(c=e.sent,s=c.data,201!==c.status){e.next=11;break}y.b.success("Shared successfully"),e.next=17;break;case 11:if(403!=satus){e.next=15;break}n.refreshToken(),e.next=17;break;case 15:throw y.b.error((null===s||void 0===s?void 0:s.message)||"Something wrong"),new Error;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t,n){return e.apply(this,arguments)}}(),V=function(e){var n=null===i||void 0===i?void 0:i.photosData.map((function(n){if(n.id==e.id){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({account:t.user},e.comments[0]);return"undefined"==typeof n.comments?n.comments=[o]:n.comments.push(o),n.commentsCount+=e.commentsCount,n}}));p(Object(k.c)(n))};Object(o.useEffect)((function(){I()}),[]);var W=Object(f.b)((function(e){var n=e.in;return T(w.b,null,T(m.a,{title:"Photo detail",showModal:n,onClose:J,data:D,profilePhoto:!0,likeAction:Q,shareAction:R,onUpdateTimeline:V,auth:t}))})),B=Object(a.a)(W,2),F=B[0],J=B[1];return T("div",null,T(h.a,null),T("div",{className:d()(O.a.container,O.a.container_bg,O.a.container_radius)},T("div",{className:O.a.page_title},"Photos",T(j.a,{style:{float:"right",background:"transparent",color:"#0d7ac7"},onClick:function(){return _(!0)}},"Add Photos/Video")),T("div",{className:O.a.content},D.map((function(e){var t=T(x.a,null,T(x.a.Item,{onClick:function(){return A(e.id)}},T(S.a,{style:{fontSize:20}})," ",T("span",null,"Delete Photo")));return T("div",{className:O.a.photo_container,key:e.id},T("div",{className:O.a.photo},T("img",{src:"https://www.freeskies.com/static/".concat(e.blob_tn),alt:"",style:{width:"100%",height:"100%"},onClick:function(){return F()}}),T(P.a,{overlay:t,trigger:["click"]},T("div",{className:O.a.editWrapper},T(M.a,{style:{color:"white",position:"relative",display:"block",marginTop:4}})))))})))),T(C.a,{title:"Create Photos",showModal:g,onClose:function(){return _(!1)}},T(E.a,{onPosting:X})))})),I=r.a.createElement;function X(){return I("div",null,I(w.b,null,I(D,null)))}},jXTy:function(e,t,n){e.exports={activity_posting:"posting-photos_activity_posting__3Ww9-",actions_container:"posting-photos_actions_container__z4y_4","button-container":"posting-photos_button-container__1aTEK","ant-btn-primary":"posting-photos_ant-btn-primary__14JVQ",file_place:"posting-photos_file_place__34jvT"}}},[["XXki",0,2,6,1,3,4,5,7,8,10,11,15]]]);