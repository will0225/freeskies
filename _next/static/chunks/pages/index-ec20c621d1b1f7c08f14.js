_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{MWbR:function(e,t,n){e.exports={forgottenpassword:"login_forgottenpassword__2b0Cx",input:"login_input__3VhIz",createAccountLink:"login_createAccountLink__VBcoN",forgotPasswordLink:"login_forgotPasswordLink__15kyb",createAccountButton:"login_createAccountButton__3y5aw",button:"login_button__2fME4",swipeContainer:"login_swipeContainer__2eASO",swipeText:"login_swipeText__pAZir",swipeImageWrapper:"login_swipeImageWrapper__3Cnuf"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),i=n("nOHt"),u=n("tsqr"),s=n("uoqP");var l=function(e,t){var n=Object(r.useState)((function(){try{var n=!1;return(n=window.localStorage.getItem(e))?JSON.parse(n):t}catch(r){return console.log(r),t}})),o=n[0],a=n[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]},p=n("MWbR"),f=n.n(p),d=n("rePB"),h=o.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={loading:!1,token:null,refreshToken:null,userData:null};function m(e,t){var n=t.type,r=t.payload;switch(n){case"auth/SET_LOADING":return g(g({},e),{},{loading:r});case"auth/SET_AUTHORIZATION":return g(g({},e),{},{userData:r.userData,token:r.token,refreshToken:r.refreshToken});default:return e}}var y=Object(r.createContext)([{},function(){}]),b=function(e){var t=e.children,n=Object(r.useReducer)(m,w);return h(y.Provider,{value:n},t)},_=function(e){return{type:"auth/SET_LOADING",payload:e}},O=function(e){return{type:"auth/SET_AUTHORIZATION",payload:{token:e.token,refreshToken:e.refreshToken,userData:e.account}}},S=n("h//d"),T=o.a.createElement;function k(){const{0:e,1:t}=Object(r.useState)(""),{0:n,1:a}=Object(r.useState)(""),p=Object(i.useRouter)(),{0:d,1:h}=Object(r.useContext)(y),[v,g]=l("storage",d),{0:w,1:m}=Object(r.useState)(51),b=(e,n)=>{h(_(!0)),Object(s.a)({method:"post",url:"/accounts/login",data:{username:e,password:n}}).then(e=>{const{status:n,data:r}=e;if(200===n){const e=O(r);h(e),g(e.payload),t(""),a(""),m(50),u.b.success("Authentication successful");var o=location.pathname;location.search;"/"===o?p.push("/timeline"):p.push(o)}else u.b.error((null===r||void 0===r?void 0:r.message)||"Something wrong"),m(50);h(_(!1))})};Object(r.useEffect)(()=>{},[d]);var k=!1;return null!==v.userData&&(k=v.userData.username),T("div",{className:"flex content-center w-full min-h-screen",style:{background:"linear-gradient(90deg, rgba(101,207,232,1) 0%, rgba(64,159,208,1) 100%)"}},T("div",{className:"m-auto flex flex-col items-center",style:{width:300}},k?T(o.a.Fragment,null,T("h2",{style:{color:"white",margin:0,fontSize:25,fontWeight:"bolder"}},"Hello ",k),T("span",{style:{color:"white",marginBottom:12}},"Welcome back, login below")):null,T("div",{className:"w-full"},T("div",{style:{display:"flex",alignItems:"center"}},T("input",{className:"w-full text-lg bg-transparent py-2 text-white",value:e,onChange:({target:e})=>{t(e.value)},className:f.a.input,placeholder:"Username"})),T("div",{style:{display:"flex",alignItems:"center"}},T("input",{type:"password",className:"w-full text-lg bg-transparent py-2 text-white",value:n,onChange:({target:e})=>{a(e.value)},className:f.a.input,placeholder:"Password"}))),T("p",{className:f.a.forgotPasswordLink},"Forgot your",T(c.a,{href:"/forget-password"},T("a",{className:f.a.forgottenpassword},"Password?"))),T("p",{className:f.a.createAccountLink},T("strong",{onClick:e=>{e.preventDefault(),p.push("/signup")},className:f.a.createAccountButton},"Create")," your account."),T(S.a,{onSwipedUp:t=>{if(console.log(t,w),t.absY>10){if(m(5),d.loading)return;b(e,n)}},onSwiped:e=>console.log(e)},T("p",{className:f.a.swipeImageWrapper,style:{textAlign:"center",cursor:"pointer",marginTop:w},id:"swipe",onClick:()=>{m(5),d.loading||b(e,n)}},T("img",{src:"/swipe.png",style:{height:40,display:"inline"}}))),T("p",{className:f.a.swipeText},d.loading?"Loading...":"Swipe up to login")))}var E=o.a.createElement;function N(){return E(o.a.Fragment,null,E(b,null,E(k,null)))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),i=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,p={};var f=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),p[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],s=o[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",g=c.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href);return{href:t,as:e.as?(0,i.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),w=g.href,m=g.as;c.default.useEffect((function(){if(t&&l&&a&&a.tagName&&(0,i.isLocalURL)(w)&&!p[w+"%"+m])return f(a,(function(){d(h,w,m)}))}),[t,a,w,m,h]);var y=e.children,b=e.replace,_=e.shallow,O=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var S=c.Children.only(y),T={ref:function(e){e&&s(e),S&&"object"===typeof S&&S.ref&&("function"===typeof S.ref?S.ref(e):"object"===typeof S.ref&&(S.ref.current=e))},onClick:function(e){S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,m,b,_,O)}};return t&&(T.onMouseEnter=function(e){(0,i.isLocalURL)(w)&&(S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),d(h,w,m,{priority:!0}))}),(e.passHref||"a"===S.type&&!("href"in S.props))&&(T.href=(0,i.addBasePath)(m)),c.default.cloneElement(S,T)};t.default=h},"h//d":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),o=n.n(r),a=n("17x9"),c=n.n(a);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={xy:[0,0],swiping:!1,eventData:void 0,start:void 0};function l(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function p(e,t){var n=function(t){t.touches&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener("mousemove",r),document.addEventListener("mouseup",c));var o=t.touches?t.touches[0]:t,a=l([o.clientX,o.clientY],n.rotationAngle);return i({},e,s,{eventData:{initial:[].concat(a),first:!0},xy:a,start:t.timeStamp||0})}))},r=function(t){e((function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var r=t.touches?t.touches[0]:t,o=l([r.clientX,r.clientY],n.rotationAngle),a=o[0],c=o[1],u=e.xy[0]-a,s=e.xy[1]-c,p=Math.abs(u),f=Math.abs(s),d=(t.timeStamp||0)-e.start,h=Math.sqrt(p*p+f*f)/(d||1);if(p<n.delta&&f<n.delta&&!e.swiping)return e;var v=function(e,t,n,r){return e>t?n>0?"Left":"Right":r>0?"Up":"Down"}(p,f,u,s),g=i({},e.eventData,{event:t,absX:p,absY:f,deltaX:u,deltaY:s,velocity:h,dir:v});n.onSwiping&&n.onSwiping(g);var w=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+v])&&(w=!0),w&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),i({},e,{eventData:i({},g,{first:!1}),swiping:!0})}))},o=function(t){e((function(e,n){var r;return e.swiping&&(r=i({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),i({},e,s,{eventData:r})}))},a=function(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c)},c=function(e){a(),o(e)},u=function(e){if(e&&e.addEventListener){var t=[["touchstart",n],["touchmove",r],["touchend",o]];return t.forEach((function(t){var n=t[0],r=t[1];return e.addEventListener(n,r)})),function(){return t.forEach((function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)}))}}},p={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&t&&(r.cleanUpTouch=u(t)),i({},e,{el:t},r)}))}};return t.trackMouse&&(p.onMouseDown=n),[p,u]}function f(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),i({},e,r)}var d=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=i({},s,{type:"class"}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeName,a=void 0===r?"div":r,c=e.innerRef,u=e.children,s=e.trackMouse,l=p(this._set,{trackMouse:s}),d=l[0],h=l[1];this.transientState=f(this.transientState,this.props,h);var v=c?function(e){return c(e),d.ref(e)}:d.ref;return o.a.createElement(a,i({},d,{className:t,style:n,ref:v}),u)},r}(o.a.PureComponent);d.propTypes={onSwiped:c.a.func,onSwiping:c.a.func,onSwipedUp:c.a.func,onSwipedRight:c.a.func,onSwipedDown:c.a.func,onSwipedLeft:c.a.func,delta:c.a.number,preventDefaultTouchmoveEvent:c.a.bool,nodeName:c.a.string,trackMouse:c.a.bool,trackTouch:c.a.bool,innerRef:c.a.func,rotationAngle:c.a.number},d.defaultProps=u},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);