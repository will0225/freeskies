_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"/MOW":function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),c=r(n("UF9F")),i=r(n("KQxl")),u=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:c.default}))};u.displayName="CloseCircleFilled";var s=a.forwardRef(u);t.default=s},"72Ab":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n("8KD2"))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},"8KD2":function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),c=r(n("nFTT")),i=r(n("KQxl")),u=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:c.default}))};u.displayName="InfoCircleFilled";var s=a.forwardRef(u);t.default=s},J84W:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n("bz9Y"))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},MWbR:function(e,t,n){e.exports={forgottenpassword:"login_forgottenpassword__2b0Cx",input:"login_input__3VhIz",createAccountLink:"login_createAccountLink__VBcoN",forgotPasswordLink:"login_forgotPasswordLink__15kyb",createAccountButton:"login_createAccountButton__3y5aw",button:"login_button__2fME4",swipeContainer:"login_swipeContainer__2eASO",swipeText:"login_swipeText__pAZir",swipeImageWrapper:"login_swipeImageWrapper__3Cnuf"}},R80K:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n("q1tI"),o=n.n(r),a=n("rePB"),c=n("ODXe"),i=n("YFqc"),u=n.n(i),s=n("nOHt"),l=n("tsqr"),f=n("uoqP");var d=function(e,t){var n=Object(r.useState)((function(){try{var n=!1;return(n=window.localStorage.getItem(e))?JSON.parse(n):t}catch(r){return console.log(r),t}})),o=n[0],a=n[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]},p=n("MWbR"),v=n.n(p),h=o.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={loading:!1,token:null,refreshToken:null,userData:null};function y(e,t){var n=t.type,r=t.payload;switch(n){case"auth/SET_LOADING":return m(m({},e),{},{loading:r});case"auth/SET_AUTHORIZATION":return m(m({},e),{},{userData:r.userData,token:r.token,refreshToken:r.refreshToken});default:return e}}var w=Object(r.createContext)([{},function(){}]),_=function(e){var t=e.children,n=Object(r.useReducer)(y,b);return h(w.Provider,{value:n},t)},O=function(e){return{type:"auth/SET_LOADING",payload:e}},x=function(e){return{type:"auth/SET_AUTHORIZATION",payload:{token:e.token,refreshToken:e.refreshToken,userData:e.account}}},C=n("h//d"),M=o.a.createElement;function j(){var e,t,n=Object(r.useState)(""),i=n[0],p=n[1],h=Object(r.useState)(""),g=h[0],m=h[1],b=Object(s.useRouter)(),y=Object(r.useContext)(w),_=y[0],j=y[1],T=d("storage",_),E=Object(c.a)(T,2),k=E[0],S=E[1],N=Object(r.useState)(51),P=N[0],D=N[1],L=function(e,t){j(O(!0)),Object(f.b)({method:"post",url:"/accounts/login",data:{username:e,password:t}}).then((function(e){var t=e.status,n=e.data;if(200===t){var r=x(n);j(r),S(r.payload),p(""),m(""),D(50),l.b.success("Authentication successful");var o=location.pathname;location.search;"/"===o?b.push("/timeline"):b.push(o)}else l.b.error((null===n||void 0===n?void 0:n.message)||"Something wrong"),D(50);j(O(!1))}))};Object(r.useEffect)((function(){}),[_]);var R=!1;return null!==k.userData&&(R=k.userData.username),M("div",{className:"flex content-center w-full min-h-screen",style:{background:"linear-gradient(90deg, rgba(101,207,232,1) 0%, rgba(64,159,208,1) 100%)"}},M("div",{className:"m-auto flex flex-col items-center",style:{width:300}},R?M(o.a.Fragment,null,M("h2",{style:{color:"white",margin:0,fontSize:25,fontWeight:"bolder"}},"Hello ",R),M("span",{style:{color:"white",marginBottom:12}},"Welcome back, login below")):null,M("div",{className:"w-full"},M("div",{style:{display:"flex",alignItems:"center"}},M("input",(e={className:"w-full text-lg bg-transparent py-2 text-white",value:i,onChange:function(e){var t=e.target;p(t.value)}},Object(a.a)(e,"className",v.a.input),Object(a.a)(e,"placeholder","Username"),e))),M("div",{style:{display:"flex",alignItems:"center"}},M("input",(t={type:"password",className:"w-full text-lg bg-transparent py-2 text-white",value:g,onChange:function(e){var t=e.target;m(t.value)}},Object(a.a)(t,"className",v.a.input),Object(a.a)(t,"placeholder","Password"),t)))),M("p",{className:v.a.forgotPasswordLink},"Forgot your",M(u.a,{href:"/forget-password"},M("a",{className:v.a.forgottenpassword},"Password?"))),M("p",{className:v.a.createAccountLink},M("strong",{onClick:function(e){e.preventDefault(),b.push("/signup")},className:v.a.createAccountButton},"Create")," your account."),M(C.a,{onSwipedUp:function(e){if(console.log(e,P),e.absY>10){if(D(5),_.loading)return;L(i,g)}},onSwiped:function(e){return console.log(e)}},M("p",{className:v.a.swipeImageWrapper,style:{textAlign:"center",cursor:"pointer",marginTop:P},id:"swipe",onClick:function(){D(5),_.loading||L(i,g)}},M("img",{src:"/swipe.png",style:{height:40,display:"inline"}}))),M("p",{className:v.a.swipeText},_.loading?"Loading...":"Swipe up to login")))}var T=o.a.createElement;function E(){return T(o.a.Fragment,null,T(_,null,T(j,null)))}},UF9F:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"}},YFqc:function(e,t,n){e.exports=n("cTJO")},"b/UD":function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),c=r(n("R80K")),i=r(n("KQxl")),u=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:c.default}))};u.displayName="ExclamationCircleFilled";var s=a.forwardRef(u);t.default=s},bbMD:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),c=r(n("sM0O")),i=r(n("KQxl")),u=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:c.default}))};u.displayName="LoadingOutlined";var s=a.forwardRef(u);t.default=s},bz9Y:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),c=r(n("gEhQ")),i=r(n("KQxl")),u=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:c.default}))};u.displayName="CheckCircleFilled";var s=a.forwardRef(u);t.default=s},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),i=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],s=o[1],v=(0,u.useRouter)(),h=v&&v.pathname||"/",g=c.default.useMemo((function(){var t=(0,i.resolveHref)(h,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,i.resolveHref)(h,e.as):a||o}}),[h,e.href,e.as]),m=g.href,b=g.as;c.default.useEffect((function(){if(t&&l&&a&&a.tagName&&(0,i.isLocalURL)(m)&&!f[m+"%"+b])return d(a,(function(){p(v,m,b)}))}),[t,a,m,b,v]);var y=e.children,w=e.replace,_=e.shallow,O=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var x=c.Children.only(y),C={ref:function(e){e&&s(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,m,b,w,_,O)}};return t&&(C.onMouseEnter=function(e){(0,i.isLocalURL)(m)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),p(v,m,b,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(C.href=(0,i.addBasePath)(b)),c.default.cloneElement(x,C)};t.default=v},gEhQ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"}},gZBC:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n("bbMD"))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},"h//d":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),o=n.n(r),a=n("17x9"),c=n.n(a);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={xy:[0,0],swiping:!1,eventData:void 0,start:void 0};function l(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function f(e,t){var n=function(t){t.touches&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener("mousemove",r),document.addEventListener("mouseup",c));var o=t.touches?t.touches[0]:t,a=l([o.clientX,o.clientY],n.rotationAngle);return i({},e,s,{eventData:{initial:[].concat(a),first:!0},xy:a,start:t.timeStamp||0})}))},r=function(t){e((function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var r=t.touches?t.touches[0]:t,o=l([r.clientX,r.clientY],n.rotationAngle),a=o[0],c=o[1],u=e.xy[0]-a,s=e.xy[1]-c,f=Math.abs(u),d=Math.abs(s),p=(t.timeStamp||0)-e.start,v=Math.sqrt(f*f+d*d)/(p||1);if(f<n.delta&&d<n.delta&&!e.swiping)return e;var h=function(e,t,n,r){return e>t?n>0?"Left":"Right":r>0?"Up":"Down"}(f,d,u,s),g=i({},e.eventData,{event:t,absX:f,absY:d,deltaX:u,deltaY:s,velocity:v,dir:h});n.onSwiping&&n.onSwiping(g);var m=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+h])&&(m=!0),m&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),i({},e,{eventData:i({},g,{first:!1}),swiping:!0})}))},o=function(t){e((function(e,n){var r;return e.swiping&&(r=i({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),i({},e,s,{eventData:r})}))},a=function(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c)},c=function(e){a(),o(e)},u=function(e){if(e&&e.addEventListener){var t=[["touchstart",n],["touchmove",r],["touchend",o]];return t.forEach((function(t){var n=t[0],r=t[1];return e.addEventListener(n,r)})),function(){return t.forEach((function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)}))}}},f={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&t&&(r.cleanUpTouch=u(t)),i({},e,{el:t},r)}))}};return t.trackMouse&&(f.onMouseDown=n),[f,u]}function d(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),i({},e,r)}var p=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=i({},s,{type:"class"}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeName,a=void 0===r?"div":r,c=e.innerRef,u=e.children,s=e.trackMouse,l=f(this._set,{trackMouse:s}),p=l[0],v=l[1];this.transientState=d(this.transientState,this.props,v);var h=c?function(e){return c(e),p.ref(e)}:p.ref;return o.a.createElement(a,i({},p,{className:t,style:n,ref:h}),u)},r}(o.a.PureComponent);p.propTypes={onSwiped:c.a.func,onSwiping:c.a.func,onSwipedUp:c.a.func,onSwipedRight:c.a.func,onSwipedDown:c.a.func,onSwipedLeft:c.a.func,delta:c.a.number,preventDefaultTouchmoveEvent:c.a.bool,nodeName:c.a.string,trackMouse:c.a.bool,trackTouch:c.a.bool,innerRef:c.a.func,rotationAngle:c.a.number},p.defaultProps=u},kbBi:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n("/MOW"))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},nFTT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"}},sKbD:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n("b/UD"))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},sM0O:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"}},tsqr:function(e,t,n){"use strict";n.d(t,"c",(function(){return L})),n.d(t,"a",(function(){return B}));var r,o=n("pVnL"),a=n.n(o),c=n("lSNA"),i=n.n(c),u=n("q1tI"),s=n("TSYQ"),l=n.n(s),f=n("8tx+"),d=n("gZBC"),p=n.n(d),v=n("sKbD"),h=n.n(v),g=n("kbBi"),m=n.n(g),b=n("J84W"),y=n.n(b),w=n("72Ab"),_=n.n(w),O=n("J4zp"),x=n.n(O),C=n("8HVG"),M=n("H84U");var j,T,E,k=3,S=1,N="ant-message",P="move-up",D=!1;function L(){return S++}function R(e,t){var n=e.prefixCls||N;r?t({prefixCls:n,instance:r}):f.a.newInstance({prefixCls:n,transitionName:P,style:{top:j},getContainer:T,maxCount:E},(function(e){r?t({prefixCls:n,instance:r}):(r=e,t({prefixCls:n,instance:e}))}))}var I={info:_.a,success:y.a,error:m.a,warning:h.a,loading:p.a};function A(e,t){var n,r=void 0!==e.duration?e.duration:k,o=I[e.type],a=l()("".concat(t,"-custom-content"),(n={},i()(n,"".concat(t,"-").concat(e.type),e.type),i()(n,"".concat(t,"-rtl"),!0===D),n));return{key:e.key,duration:r,style:e.style||{},className:e.className,content:u.createElement("div",{className:a},e.icon||o&&u.createElement(o,null),u.createElement("span",null,e.content)),onClose:e.onClose}}var U,q,z={open:function(e){var t=e.key||S++,n=new Promise((function(n){var r=function(){return"function"===typeof e.onClose&&e.onClose(),n(!0)};R(e,(function(n){var o=n.prefixCls;n.instance.notice(A(a()(a()({},e),{key:t,onClose:r}),o))}))})),o=function(){r&&r.removeNotice(t)};return o.then=function(e,t){return n.then(e,t)},o.promise=n,o},config:function(e){void 0!==e.top&&(j=e.top,r=null),void 0!==e.duration&&(k=e.duration),void 0!==e.prefixCls&&(N=e.prefixCls),void 0!==e.getContainer&&(T=e.getContainer),void 0!==e.transitionName&&(P=e.transitionName,r=null),void 0!==e.maxCount&&(E=e.maxCount,r=null),void 0!==e.rtl&&(D=e.rtl)},destroy:function(e){if(r)if(e){(0,r.removeNotice)(e)}else{var t=r.destroy;t(),r=null}}};function B(e,t){e[t]=function(n,r,o){return function(e){return"[object Object]"===Object.prototype.toString.call(e)&&!!e.content}(n)?e.open(a()(a()({},n),{type:t})):("function"===typeof r&&(o=r,r=void 0),e.open({content:n,duration:r,type:t,onClose:o}))}}["success","info","warning","error","loading"].forEach((function(e){return B(z,e)})),z.warn=z.warning,z.useMessage=(U=R,q=A,function(){var e,t=null,n={add:function(e,n){null===t||void 0===t||t.component.add(e,n)}},r=Object(C.a)(n),o=x()(r,2),c=o[0],i=o[1],s=u.useRef({});return s.current.open=function(n){var r=n.prefixCls,o=e("message",r),i=n.key||L(),u=new Promise((function(e){var r=function(){return"function"===typeof n.onClose&&n.onClose(),e(!0)};U(a()(a()({},n),{prefixCls:o}),(function(e){var o=e.prefixCls,u=e.instance;t=u,c(q(a()(a()({},n),{key:i,onClose:r}),o))}))})),s=function(){t&&t.removeNotice(i)};return s.then=function(e,t){return u.then(e,t)},s.promise=u,s},["success","info","warning","error","loading"].forEach((function(e){return B(s.current,e)})),[s.current,u.createElement(M.a,{key:"holder"},(function(t){return e=t.getPrefixCls,i}))]});t.b=z},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);