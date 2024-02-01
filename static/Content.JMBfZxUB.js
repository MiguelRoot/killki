import{r as c}from"./index.LFf77hJu.js";var C={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=c,_=Symbol.for("react.element"),S=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,k=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function v(d,t,m){var r,a={},u=null,p=null;m!==void 0&&(u=""+m),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(p=t.ref);for(r in t)N.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);if(d&&d.defaultProps)for(r in t=d.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:_,type:d,key:u,ref:p,props:a,_owner:k.current}}h.Fragment=S;h.jsx=v;h.jsxs=v;C.exports=h;var e=C.exports;function A({data:d}){const[t,m]=c.useState(null),[r,a]=c.useState(null),[u,p]=c.useState(!1);c.useState(!0),c.useState(null);function y(o){c.useEffect(()=>{},[]);const s=[];let n=null,i=[];for(const l of o)if(l[0]==="$")n!==null&&s.push({title:n,items:i}),n=l[1],i=[];else{const f={subtitle:l[1],description:l[2],code:l[3]};i.push(f)}return n!==null&&s.push({title:n,items:i}),s}function j(o,s){a(o),m(s)}function b(){if(u)return;p(!0);const o=window.speechSynthesis,s=new SpeechSynthesisUtterance(t?.description);s.onend=function(n){p(!1)},o.speak(s)}const g=y(d);return e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"md:columns-2 lg:columns-4 text-sm gap-4 mb-14",children:g.map(({title:o,items:s},n)=>e.jsxs("div",{className:"break-inside-avoid mb-6",children:[e.jsx("div",{className:"border-b-4 border-primary-600",children:e.jsx("span",{className:"text-white pb-1 pt-2 px-4 font-bold bg-primary-600 rounded-t-md  rounded-sm",children:o})}),e.jsx("ul",{className:" [&>*:nth-child(even)]:bg-primary-200",children:s.map(({subtitle:i,description:l,code:x},f)=>e.jsx("li",{className:r===n.toString()+f.toString()?"text-white font-bold px-3 py-1 !bg-primary-700 cursor-pointer text-shadow  rounded-sm":"font-bold px-3 py-1 cursor-pointer",onClick:()=>j(n.toString()+f.toString(),{subtitle:i,description:l,code:x}),children:i},f))})]},n))}),t&&e.jsxs("div",{className:"border-2 relative border-primary-200 rounded-xl p-6",children:[e.jsxs("svg",{width:"1247",height:"513",viewBox:"0 0 1247 513",fill:"none",className:"absolute top-[-120px] opacity-30 z-[-1]",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{opacity:"0.3",filter:"url(#filter0_f_8979_5)",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1080.47 264.172C1057.98 285.716 1006.49 302.197 959.86 319.766C919.683 334.903 876.866 348.397 825.851 360.103C769.027 373.142 715.437 391.289 644.403 392.152C573.14 393.018 513.294 376.903 454.421 364.615C399.068 353.063 359.654 337.144 311.939 322.763C246.633 303.08 133.928 291.913 121.154 264.172C108.804 237.354 198.452 216.539 253.21 195.231C301.741 176.346 355.911 159.619 422.562 146.884C491.003 133.808 564.518 116.905 644.403 120.488C724.157 124.064 758.069 155.11 831.551 165.227C917.218 177.021 1044.89 160.753 1102.13 183.505C1156.9 205.274 1107.77 238.021 1080.47 264.172Z",fill:"#8873EF"})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_8979_5",x:"0",y:"0",width:"1246.93",height:"512.186",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"60",result:"effect1_foregroundBlur_8979_5"})]})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-secondary-950 ",children:t?.subtitle}),t.description&&e.jsx("div",{onClick:b,className:u?"opacity-50 border rounded-full p-2":"border rounded-full p-2 cursor-pointer",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.9218 3.00001C12.7635 3.00615 12.6125 3.06774 12.495 3.17401L6.79502 7.91401C6.70196 8.00643 6.58917 8.07658 6.46512 8.11919C6.34107 8.16179 6.20898 8.17575 6.07877 8.16001H2.40602C2.28682 8.15921 2.16865 8.1821 2.05837 8.22735C1.94809 8.2726 1.84789 8.3393 1.7636 8.42359C1.67931 8.50788 1.61261 8.60807 1.56736 8.71835C1.52211 8.82864 1.49922 8.94681 1.50002 9.06601V14.9355C1.49942 15.0546 1.52246 15.1726 1.5678 15.2827C1.61313 15.3928 1.67987 15.4928 1.76414 15.577C1.84841 15.6611 1.94854 15.7276 2.05872 15.7728C2.1689 15.818 2.28695 15.8408 2.40602 15.84H6.07502C6.20523 15.8243 6.33732 15.8382 6.46137 15.8808C6.58542 15.9234 6.69821 15.9936 6.79127 16.086L12.4913 20.826C12.882 21.1508 13.302 20.994 13.302 20.6093V3.39151C13.3049 3.34028 13.2972 3.28901 13.2793 3.24093C13.2614 3.19286 13.2336 3.14903 13.1979 3.11223C13.1622 3.07542 13.1191 3.04644 13.0716 3.02712C13.0241 3.00781 12.9731 2.99857 12.9218 3.00001ZM20.25 4.72501L18.9068 6.06976C20.0409 7.84389 20.6436 9.90558 20.6436 12.0113C20.6436 14.1169 20.0409 16.1786 18.9068 17.9528L20.2455 19.2848C21.7132 17.1409 22.499 14.6037 22.4998 12.0056C22.5006 9.40747 21.7164 6.86974 20.25 4.72501ZM17.0003 7.96726L15.6788 9.30001C16.2655 10.0831 16.5826 11.0353 16.5826 12.0139C16.5826 12.9924 16.2655 13.9446 15.6788 14.7278L16.9958 16.0448C17.9223 14.9032 18.4287 13.478 18.43 12.0077C18.4314 10.5374 17.9277 9.1113 17.0033 7.96801L17.0003 7.96726Z",fill:"#8873EF"})})})]}),e.jsxs("div",{className:"grid gap-8 grid-cols-10",children:[e.jsx("div",{className:"w-100 col-span-7 border bg-white border-gray-100 rounded p-4 overflow-x-auto",children:e.jsx("pre",{children:t?.code})}),e.jsx("div",{className:"col-span-3 whitespace-pre-line text-secondary-950",children:t?.description})]})]})]})}export{A as default};