import{r as a,W as T}from"./index.pN39C2gU.js";var se={exports:{}},Z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=a,Oe=Symbol.for("react.element"),Ce=Symbol.for("react.fragment"),xe=Object.prototype.hasOwnProperty,Se=je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Me={key:!0,ref:!0,__self:!0,__source:!0};function fe(e,t,r){var n,i={},o=null,c=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)xe.call(t,n)&&!Me.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Oe,type:e,key:o,ref:c,props:i,_owner:Se.current}}Z.Fragment=Ce;Z.jsx=fe;Z.jsxs=fe;se.exports=Z;var l=se.exports;function Ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ie(Object(r),!0).forEach(function(n){Ee(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Pe(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Re(e,t){if(e==null)return{};var r=Pe(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ie(e,t){return Le(e)||Ae(e,t)||_e(e,t)||Te()}function Le(e){if(Array.isArray(e))return e}function Ae(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,i=!1,o=void 0;try{for(var c=e[Symbol.iterator](),f;!(n=(f=c.next()).done)&&(r.push(f.value),!(t&&r.length===t));n=!0);}catch(d){i=!0,o=d}finally{try{!n&&c.return!=null&&c.return()}finally{if(i)throw o}}return r}}function _e(e,t){if(e){if(typeof e=="string")return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}}function ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(n){Ne(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $e(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(i,o){return o(i)},n)}}function F(e){return function t(){for(var r=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];return t.apply(r,[].concat(i,f))}}}function G(e){return{}.toString.call(e).includes("Object")}function De(e){return!Object.keys(e).length}function k(e){return typeof e=="function"}function Ve(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Fe(e,t){return G(t)||I("changeType"),Object.keys(t).some(function(r){return!Ve(e,r)})&&I("changeField"),t}function Ue(e){k(e)||I("selectorType")}function ke(e){k(e)||G(e)||I("handlerType"),G(e)&&Object.values(e).some(function(t){return!k(t)})&&I("handlersType")}function Be(e){e||I("initialIsRequired"),G(e)||I("initialType"),De(e)&&I("initialContent")}function qe(e,t){throw new Error(e[t]||e.default)}var ze={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},I=F(qe)(ze),H={changes:Fe,selector:Ue,handler:ke,initial:Be};function He(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};H.initial(e),H.handler(t);var r={current:e},n=F(Ze)(r,t),i=F(Ge)(r),o=F(H.changes)(e),c=F(We)(r);function f(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(P){return P};return H.selector(m),m(r.current)}function d(m){$e(n,i,o,c)(m)}return[f,d]}function We(e,t){return k(t)?t(e.current):t}function Ge(e,t){return e.current=ue(ue({},e.current),t),t}function Ze(e,t,r){return k(t)?t(e.current):Object.keys(r).forEach(function(n){var i;return(i=t[n])===null||i===void 0?void 0:i.call(t,e.current[n])}),r}var Ye={create:He},Je={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function Ke(e){return function t(){for(var r=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];return t.apply(r,[].concat(i,f))}}}function Qe(e){return{}.toString.call(e).includes("Object")}function Xe(e){return e||le("configIsRequired"),Qe(e)||le("configType"),e.urls?(et(),{paths:{vs:e.urls.monacoBase}}):e}function et(){console.warn(de.deprecation)}function tt(e,t){throw new Error(e[t]||e.default)}var de={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},le=Ke(tt)(de),rt={config:Xe},nt=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(i){return r.reduceRight(function(o,c){return c(o)},i)}};function pe(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],pe(e[r],t[r]))}),oe(oe({},e),t)}var it={type:"cancelation",msg:"operation is manually canceled"};function X(e){var t=!1,r=new Promise(function(n,i){e.then(function(o){return t?i(it):n(o)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var ot=Ye.create({config:Je,isInitialized:!1,resolve:null,reject:null,monaco:null}),ge=Ie(ot,2),B=ge[0],Y=ge[1];function at(e){var t=rt.config(e),r=t.monaco,n=Re(t,["monaco"]);Y(function(i){return{config:pe(i.config,n),monaco:r}})}function ct(){var e=B(function(t){var r=t.monaco,n=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:n,resolve:i}});if(!e.isInitialized){if(Y({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),X(ee);if(window.monaco&&window.monaco.editor)return he(window.monaco),e.resolve(window.monaco),X(ee);nt(ut,st)(ft)}return X(ee)}function ut(e){return document.body.appendChild(e)}function lt(e){var t=document.createElement("script");return e&&(t.src=e),t}function st(e){var t=B(function(n){var i=n.config,o=n.reject;return{config:i,reject:o}}),r=lt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function ft(){var e=B(function(r){var n=r.config,i=r.resolve,o=r.reject;return{config:n,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){he(r),e.resolve(r)},function(r){e.reject(r)})}function he(e){B().monaco||Y({monaco:e})}function dt(){return B(function(e){var t=e.monaco;return t})}var ee=new Promise(function(e,t){return Y({resolve:e,reject:t})}),me={config:at,init:ct,__getMonacoInstance:dt},pt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},te=pt,gt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ht=gt;function mt({children:e}){return T.createElement("div",{style:ht.container},e)}var vt=mt,bt=vt;function yt({width:e,height:t,isEditorReady:r,loading:n,_ref:i,className:o,wrapperProps:c}){return T.createElement("section",{style:{...te.wrapper,width:e,height:t},...c},!r&&T.createElement(bt,null,n),T.createElement("div",{ref:i,style:{...te.fullWidth,...!r&&te.hide},className:o}))}var wt=yt,ve=a.memo(wt);function jt(e){a.useEffect(e,[])}var be=jt;function Ot(e,t,r=!0){let n=a.useRef(!0);a.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}var x=Ot;function U(){}function _(e,t,r,n){return Ct(e,n)||xt(e,t,r,n)}function Ct(e,t){return e.editor.getModel(ye(e,t))}function xt(e,t,r,n){return e.editor.createModel(t,r,n?ye(e,n):void 0)}function ye(e,t){return e.Uri.parse(t)}function St({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:c,keepCurrentOriginalModel:f=!1,keepCurrentModifiedModel:d=!1,theme:m="light",loading:P="Loading...",options:g={},height:j="100%",width:O="100%",className:S,wrapperProps:M={},beforeMount:L=U,onMount:E=U}){let[C,N]=a.useState(!1),[$,h]=a.useState(!0),v=a.useRef(null),p=a.useRef(null),D=a.useRef(null),y=a.useRef(E),u=a.useRef(L),A=a.useRef(!1);be(()=>{let s=me.init();return s.then(b=>(p.current=b)&&h(!1)).catch(b=>b?.type!=="cancelation"&&console.error("Monaco initialization: error:",b)),()=>v.current?V():s.cancel()}),x(()=>{if(v.current&&p.current){let s=v.current.getOriginalEditor(),b=_(p.current,e||"",n||r||"text",o||"");b!==s.getModel()&&s.setModel(b)}},[o],C),x(()=>{if(v.current&&p.current){let s=v.current.getModifiedEditor(),b=_(p.current,t||"",i||r||"text",c||"");b!==s.getModel()&&s.setModel(b)}},[c],C),x(()=>{let s=v.current.getModifiedEditor();s.getOption(p.current.editor.EditorOption.readOnly)?s.setValue(t||""):t!==s.getValue()&&(s.executeEdits("",[{range:s.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),s.pushUndoStop())},[t],C),x(()=>{v.current?.getModel()?.original.setValue(e||"")},[e],C),x(()=>{let{original:s,modified:b}=v.current.getModel();p.current.editor.setModelLanguage(s,n||r||"text"),p.current.editor.setModelLanguage(b,i||r||"text")},[r,n,i],C),x(()=>{p.current?.editor.setTheme(m)},[m],C),x(()=>{v.current?.updateOptions(g)},[g],C);let q=a.useCallback(()=>{if(!p.current)return;u.current(p.current);let s=_(p.current,e||"",n||r||"text",o||""),b=_(p.current,t||"",i||r||"text",c||"");v.current?.setModel({original:s,modified:b})},[r,t,i,e,n,o,c]),z=a.useCallback(()=>{!A.current&&D.current&&(v.current=p.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...g}),q(),p.current?.editor.setTheme(m),N(!0),A.current=!0)},[g,m,q]);a.useEffect(()=>{C&&y.current(v.current,p.current)},[C]),a.useEffect(()=>{!$&&!C&&z()},[$,C,z]);function V(){let s=v.current?.getModel();f||s?.original?.dispose(),d||s?.modified?.dispose(),v.current?.dispose()}return T.createElement(ve,{width:O,height:j,isEditorReady:C,loading:P,_ref:D,className:S,wrapperProps:M})}var Mt=St;a.memo(Mt);function Et(e){let t=a.useRef();return a.useEffect(()=>{t.current=e},[e]),t.current}var Pt=Et,W=new Map;function Rt({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:i,path:o,theme:c="light",line:f,loading:d="Loading...",options:m={},overrideServices:P={},saveViewState:g=!0,keepCurrentModel:j=!1,width:O="100%",height:S="100%",className:M,wrapperProps:L={},beforeMount:E=U,onMount:C=U,onChange:N,onValidate:$=U}){let[h,v]=a.useState(!1),[p,D]=a.useState(!0),y=a.useRef(null),u=a.useRef(null),A=a.useRef(null),q=a.useRef(C),z=a.useRef(E),V=a.useRef(),s=a.useRef(n),b=Pt(o),re=a.useRef(!1),J=a.useRef(!1);be(()=>{let w=me.init();return w.then(R=>(y.current=R)&&D(!1)).catch(R=>R?.type!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>u.current?we():w.cancel()}),x(()=>{let w=_(y.current,e||n||"",t||i||"",o||r||"");w!==u.current?.getModel()&&(g&&W.set(b,u.current?.saveViewState()),u.current?.setModel(w),g&&u.current?.restoreViewState(W.get(o)))},[o],h),x(()=>{u.current?.updateOptions(m)},[m],h),x(()=>{!u.current||n===void 0||(u.current.getOption(y.current.editor.EditorOption.readOnly)?u.current.setValue(n):n!==u.current.getValue()&&(J.current=!0,u.current.executeEdits("",[{range:u.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),u.current.pushUndoStop(),J.current=!1))},[n],h),x(()=>{let w=u.current?.getModel();w&&i&&y.current?.editor.setModelLanguage(w,i)},[i],h),x(()=>{f!==void 0&&u.current?.revealLine(f)},[f],h),x(()=>{y.current?.editor.setTheme(c)},[c],h);let ne=a.useCallback(()=>{if(!(!A.current||!y.current)&&!re.current){z.current(y.current);let w=o||r,R=_(y.current,n||e||"",t||i||"",w||"");u.current=y.current?.editor.create(A.current,{model:R,automaticLayout:!0,...m},P),g&&u.current.restoreViewState(W.get(w)),y.current.editor.setTheme(c),f!==void 0&&u.current.revealLine(f),v(!0),re.current=!0}},[e,t,r,n,i,o,m,P,g,c,f]);a.useEffect(()=>{h&&q.current(u.current,y.current)},[h]),a.useEffect(()=>{!p&&!h&&ne()},[p,h,ne]),s.current=n,a.useEffect(()=>{h&&N&&(V.current?.dispose(),V.current=u.current?.onDidChangeModelContent(w=>{J.current||N(u.current.getValue(),w)}))},[h,N]),a.useEffect(()=>{if(h){let w=y.current.editor.onDidChangeMarkers(R=>{let K=u.current.getModel()?.uri;if(K&&R.find(Q=>Q.path===K.path)){let Q=y.current.editor.getModelMarkers({resource:K});$?.(Q)}});return()=>{w?.dispose()}}return()=>{}},[h,$]);function we(){V.current?.dispose(),j?g&&W.set(o,u.current.saveViewState()):u.current.getModel()?.dispose(),u.current.dispose()}return T.createElement(ve,{width:O,height:S,isEditorReady:h,loading:d,_ref:A,className:M,wrapperProps:L})}var It=Rt,Lt=a.memo(It),At=Lt;function Tt({data:e}){const[t,r]=a.useState(null),[n,i]=a.useState(null),[o,c]=a.useState(!1);a.useState(!0),a.useState(null);function f(g){a.useEffect(()=>{},[]);const j=[];let O=null,S=[];for(const M of g)if(M[0]==="$")O!==null&&j.push({title:O,items:S}),O=M[1],S=[];else{const E={subtitle:M[1],description:M[2],code:M[3]};S.push(E)}return O!==null&&j.push({title:O,items:S}),j}function d(g,j){i(g),r(j)}function m(){if(o)return;c(!0);const g=window.speechSynthesis,j=new SpeechSynthesisUtterance(t?.description);j.onend=function(O){c(!1)},g.speak(j)}const P=f(e);return l.jsxs("div",{className:"mb-5",children:[l.jsx("div",{className:"md:columns-2 lg:columns-4 text-sm gap-4 mb-14",children:P.map(({title:g,items:j},O)=>l.jsxs("div",{className:"break-inside-avoid mb-6",children:[l.jsx("div",{className:"border-b-4 border-primary-600",children:l.jsx("span",{className:"text-white pb-1 pt-2 px-4 font-bold bg-primary-600 rounded-t-md  rounded-sm",children:g})}),l.jsx("ul",{className:" [&>*:nth-child(even)]:bg-primary-200",children:j.map(({subtitle:S,description:M,code:L},E)=>l.jsx("li",{className:n===O.toString()+E.toString()?"text-white font-bold px-3 py-1 !bg-primary-700 cursor-pointer text-shadow  rounded-sm":"font-bold px-3 py-1 cursor-pointer",onClick:()=>d(O.toString()+E.toString(),{subtitle:S,description:M,code:L}),children:S},E))})]},O))}),t&&l.jsxs("div",{className:"border-2 relative border-primary-200 rounded-xl p-6",children:[l.jsxs("svg",{width:"1247",height:"513",viewBox:"0 0 1247 513",fill:"none",className:"absolute top-[-120px] opacity-30 z-[-1]",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("g",{opacity:"0.3",filter:"url(#filter0_f_8979_5)",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1080.47 264.172C1057.98 285.716 1006.49 302.197 959.86 319.766C919.683 334.903 876.866 348.397 825.851 360.103C769.027 373.142 715.437 391.289 644.403 392.152C573.14 393.018 513.294 376.903 454.421 364.615C399.068 353.063 359.654 337.144 311.939 322.763C246.633 303.08 133.928 291.913 121.154 264.172C108.804 237.354 198.452 216.539 253.21 195.231C301.741 176.346 355.911 159.619 422.562 146.884C491.003 133.808 564.518 116.905 644.403 120.488C724.157 124.064 758.069 155.11 831.551 165.227C917.218 177.021 1044.89 160.753 1102.13 183.505C1156.9 205.274 1107.77 238.021 1080.47 264.172Z",fill:"#8873EF"})}),l.jsx("defs",{children:l.jsxs("filter",{id:"filter0_f_8979_5",x:"0",y:"0",width:"1246.93",height:"512.186",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[l.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),l.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),l.jsx("feGaussianBlur",{stdDeviation:"60",result:"effect1_foregroundBlur_8979_5"})]})})]}),l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-2xl font-bold text-secondary-950 ",children:t?.subtitle}),t.description&&l.jsx("div",{onClick:m,className:o?"opacity-50 border rounded-full p-2":"border rounded-full p-2 cursor-pointer",children:l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M12.9218 3.00001C12.7635 3.00615 12.6125 3.06774 12.495 3.17401L6.79502 7.91401C6.70196 8.00643 6.58917 8.07658 6.46512 8.11919C6.34107 8.16179 6.20898 8.17575 6.07877 8.16001H2.40602C2.28682 8.15921 2.16865 8.1821 2.05837 8.22735C1.94809 8.2726 1.84789 8.3393 1.7636 8.42359C1.67931 8.50788 1.61261 8.60807 1.56736 8.71835C1.52211 8.82864 1.49922 8.94681 1.50002 9.06601V14.9355C1.49942 15.0546 1.52246 15.1726 1.5678 15.2827C1.61313 15.3928 1.67987 15.4928 1.76414 15.577C1.84841 15.6611 1.94854 15.7276 2.05872 15.7728C2.1689 15.818 2.28695 15.8408 2.40602 15.84H6.07502C6.20523 15.8243 6.33732 15.8382 6.46137 15.8808C6.58542 15.9234 6.69821 15.9936 6.79127 16.086L12.4913 20.826C12.882 21.1508 13.302 20.994 13.302 20.6093V3.39151C13.3049 3.34028 13.2972 3.28901 13.2793 3.24093C13.2614 3.19286 13.2336 3.14903 13.1979 3.11223C13.1622 3.07542 13.1191 3.04644 13.0716 3.02712C13.0241 3.00781 12.9731 2.99857 12.9218 3.00001ZM20.25 4.72501L18.9068 6.06976C20.0409 7.84389 20.6436 9.90558 20.6436 12.0113C20.6436 14.1169 20.0409 16.1786 18.9068 17.9528L20.2455 19.2848C21.7132 17.1409 22.499 14.6037 22.4998 12.0056C22.5006 9.40747 21.7164 6.86974 20.25 4.72501ZM17.0003 7.96726L15.6788 9.30001C16.2655 10.0831 16.5826 11.0353 16.5826 12.0139C16.5826 12.9924 16.2655 13.9446 15.6788 14.7278L16.9958 16.0448C17.9223 14.9032 18.4287 13.478 18.43 12.0077C18.4314 10.5374 17.9277 9.1113 17.0033 7.96801L17.0003 7.96726Z",fill:"#8873EF"})})})]}),l.jsxs("div",{className:"grid gap-8 grid-cols-10",children:[l.jsx("div",{className:"w-100 col-span-7 border bg-white border-gray-100 rounded overflow-x-auto",children:l.jsx(At,{theme:"vs-light",height:"50vh",defaultLanguage:"javascript",value:t?.code,options:{minimap:{enabled:!1},linting:!1,glyphMargin:!1,contextmenu:!1}})}),l.jsx("div",{className:"col-span-3 whitespace-pre-line text-secondary-950",children:t?.description})]})]})]})}export{Tt as default};
