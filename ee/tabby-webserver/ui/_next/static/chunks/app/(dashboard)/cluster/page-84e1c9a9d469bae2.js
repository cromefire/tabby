(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[131],{2390:function(e,t,n){"use strict";var r=n(25809),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,i,s,l,c,d,u,p=!1;t||(t={}),i=t.debug||!1;try{if(l=r(),c=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=n.replace(/#{\s*key\s*}/g,o),window.prompt(s,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),u&&document.body.removeChild(u),l()}return p}},25903:function(e,t,n){Promise.resolve().then(n.bind(n,28883))},28883:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(57437),a=n(58835),o=n(70349),i=n(13287),s=n(8724),l=n(7820),c=n(39311),d=n(93023),u=n(84168),p=n(51908),h=n(16775),x=n(33555),f=n(86110);function m(e){let{addr:t,name:n,kind:a,device:o,accelerators:i,cpuCount:s,cpuInfo:l}=e,d=(0,c.cn)("ml-2","whitespace-nowrap","overflow-hidden","text-ellipsis"),u="".concat(l," (").concat(s," cores)");return(0,r.jsxs)(f.Zb,{className:"rounded-xl p-2 shadow-md lg:w-[260px]",children:[(0,r.jsx)(f.Ol,{className:"p-0 px-4 pb-2 pt-4",children:(0,r.jsxs)(f.ll,{className:"text-md flex items-center font-normal",children:[(0,r.jsx)(g,{type:a}),(0,r.jsx)("p",{title:n,className:d,children:n})]})}),(0,r.jsxs)(f.aY,{className:"flex flex-col gap-2 p-0 px-4 pb-4 pt-2",children:[(0,r.jsxs)(v,{children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:" h-5 w-5",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}),(0,r.jsx)("rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}),(0,r.jsx)("rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}),(0,r.jsx)("path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}),(0,r.jsx)("path",{d:"M12 12V8"})]}),(0,r.jsx)("p",{title:t,className:d,children:t})]}),(0,r.jsxs)(v,{children:[(0,r.jsxs)("svg",{className:" h-5 w-5",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{height:"16",rx:"2",width:"16",x:"4",y:"4"}),(0,r.jsx)("rect",{height:"6",width:"6",x:"9",y:"9"}),(0,r.jsx)("path",{d:"M15 2v2"}),(0,r.jsx)("path",{d:"M15 20v2"}),(0,r.jsx)("path",{d:"M2 15h2"}),(0,r.jsx)("path",{d:"M2 9h2"}),(0,r.jsx)("path",{d:"M20 15h2"}),(0,r.jsx)("path",{d:"M20 9h2"}),(0,r.jsx)("path",{d:"M9 2v2"}),(0,r.jsx)("path",{d:"M9 20v2"})]}),(0,r.jsx)("p",{title:u,className:d,children:u})]}),(null==i?void 0:i.length)&&i.map((e,t)=>(0,r.jsxs)(v,{children:[(0,r.jsxs)("svg",{className:" h-5 w-5",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M6 19v-3"}),(0,r.jsx)("path",{d:"M10 19v-3"}),(0,r.jsx)("path",{d:"M14 19v-3"}),(0,r.jsx)("path",{d:"M18 19v-3"}),(0,r.jsx)("path",{d:"M8 11V9"}),(0,r.jsx)("path",{d:"M16 11V9"}),(0,r.jsx)("path",{d:"M12 11V9"}),(0,r.jsx)("path",{d:"M2 15h20"}),(0,r.jsx)("path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"})]}),(0,r.jsx)("p",{title:e.chipName?"".concat(e.displayName," (").concat(e.chipName,")"):e.displayName,className:d,children:e.displayName})]},t))]})]})}function v(e){let{children:t}=e;return(0,r.jsx)("div",{className:"mt-2 flex items-center text-sm text-card-foreground/70",children:t})}function g(e){let{type:t}=e,n="h-5 w-5";return t==o.xj.Completion?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),(0,r.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,r.jsx)("path",{d:"m10 13-2 2 2 2"}),(0,r.jsx)("path",{d:"m14 17 2-2-2-2"})]}):t==o.xj.Chat?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"}),(0,r.jsx)("path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"})]}):"INDEX"==t?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"m9 9-2 2 2 2"}),(0,r.jsx)("path",{d:"m13 13 2-2-2-2"}),(0,r.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,r.jsx)("path",{d:"m21 21-4.3-4.3"})]}):void 0}let j=(0,a.BX)("\n  query GetRegistrationToken {\n    registrationToken\n  }\n"),w=(0,a.BX)("\n  mutation ResetRegistrationToken {\n    resetRegistrationToken\n  }\n");function y(){let{data:e}=(0,i.Q)(),t=(0,s.s)(),{data:n,mutate:a}=(0,l.J9)(j),f=(0,l.Db)(w,{onCompleted(){a()}});if(e)return(0,r.jsxs)("div",{className:"flex w-full flex-col gap-3 p-4 lg:p-16",children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)("span",{className:"font-bold",children:"Congratulations"}),", your tabby instance is up!"]}),(0,r.jsx)("span",{className:"flex flex-wrap gap-1",children:(0,r.jsx)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/tag/".concat(e.version.git_describe),children:(0,r.jsx)("img",{src:"https://img.shields.io/badge/version-".concat(encodeURIComponent(e.version.git_describe.replaceAll("-","--")),"-green")})})}),(0,r.jsx)(h.Z,{}),!!(null==n?void 0:n.registrationToken)&&(0,r.jsxs)("div",{className:"flex items-center gap-1",children:["Registration token:",(0,r.jsx)(p.I,{className:"max-w-[320px] font-mono text-red-600",value:n.registrationToken}),(0,r.jsx)(d.z,{title:"Rotate",size:"icon",variant:"hover-destructive",onClick:()=>f(),children:(0,r.jsx)(u.TE,{})}),(0,r.jsx)(x.q,{value:n.registrationToken})]}),(0,r.jsxs)("div",{className:"mt-4 flex flex-col gap-4 lg:flex-row lg:flex-wrap",children:[!!(null==t?void 0:t[o.xj.Completion])&&(0,r.jsx)(r.Fragment,{children:t[o.xj.Completion].map((e,t)=>(0,r.jsx)(m,{...e},t))}),!!(null==t?void 0:t[o.xj.Chat])&&(0,r.jsx)(r.Fragment,{children:t[o.xj.Chat].map((e,t)=>(0,r.jsx)(m,{...e},t))}),(0,r.jsx)(m,{addr:"localhost",name:"Code Search Index",kind:"INDEX",arch:"",device:e.device,accelerators:e.accelerators.map(e=>({uuid:e.uuid,chipName:e.chip_name,deviceType:c.uY[e.device_type],displayName:e.display_name})),cpuCount:e.cpu_count,cpuInfo:e.cpu_info})]})]})}},33555:function(e,t,n){"use strict";n.d(t,{q:function(){return s}});var r=n(57437);n(2265);var a=n(77723),o=n(93023),i=n(84168);function s(e){let{className:t,value:n,...s}=e,{isCopied:l,copyToClipboard:c}=(0,a.m)({timeout:2e3});return n?(0,r.jsxs)(o.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{l||c(n)},...s,children:[l?(0,r.jsx)(i.NO,{className:"text-green-600"}):(0,r.jsx)(i.vU,{}),(0,r.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},86110:function(e,t,n){"use strict";n.d(t,{Ol:function(){return s},Zb:function(){return i},aY:function(){return d},eW:function(){return u},ll:function(){return l}});var r=n(57437),a=n(2265),o=n(39311);let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...a})});i.displayName="Card";let s=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",n),...a})});s.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",n),...a})});l.displayName="CardTitle";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",n),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",n),...a})});d.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",n),...a})});u.displayName="CardFooter"},51908:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var r=n(57437),a=n(2265),o=n(39311);let i=a.forwardRef((e,t)=>{let{className:n,type:a,...i}=e;return(0,r.jsx)("input",{type:a,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...i})});i.displayName="Input"},16775:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(57437),a=n(2265),o=n(26823),i=n(39311);let s=a.forwardRef((e,t)=>{let{className:n,orientation:a="horizontal",decorative:s=!0,...l}=e;return(0,r.jsx)(o.f,{ref:t,decorative:s,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",n),...l})});s.displayName=o.f.displayName},77723:function(e,t,n){"use strict";n.d(t,{m:function(){return s}});var r=n(2265),a=n(2390),o=n.n(a),i=n(71424);function s(e){let{timeout:t=2e3,onError:n}=e,[a,s]=r.useState(!1),l=()=>{s(!0),setTimeout(()=>{s(!1)},t)},c=e=>{if("function"==typeof n){null==n||n(e);return}i.A.error("Failed to copy.")};return{isCopied:a,copyToClipboard:e=>{var t;if(e){if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(l).catch(c);else{let t=o()(e);t?l():c()}}}}}},13287:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(30713),a=n(1592),o=n(88809);function i(){return(0,r.ZP)((0,o.X0)("/v1/health"),a.Z)}},8724:function(e,t,n){"use strict";n.d(t,{s:function(){return f}});var r=n(2265),a=n(16630),o=n(91317),i=n(35512),s=n(58835),l=n(70349),c=n(7820),d=n(39311),u=n(13287);let p={[l.xj.Chat]:"chat_model",[l.xj.Completion]:"model"};function h(e,t){var n;return{kind:t,device:e.device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:null!==(n=null==e?void 0:e[p[t]])&&void 0!==n?n:"",cpuCount:e.cpu_count,accelerators:e.accelerators.map(e=>({uuid:e.uuid,chipName:e.chip_name,displayName:e.display_name,deviceType:d.uY[e.device_type]}))}}let x=(0,s.BX)("\n  query GetWorkers {\n    workers {\n      kind\n      name\n      addr\n      device\n      arch\n      cpuInfo\n      cpuCount\n      accelerators {\n        uuid\n        chipName\n        displayName\n        deviceType\n      }\n    }\n  }\n");function f(){let{data:e}=(0,u.Q)(),{data:t}=(0,c.J9)(x),n=null==t?void 0:t.workers,s=r.useMemo(()=>{let t=(0,i.Z)(n),r=(0,a.Z)(t,{kind:l.xj.Completion})>-1,s=(0,a.Z)(t,{kind:l.xj.Chat})>-1;return!r&&(null==e?void 0:e.model)&&t.push(h(e,l.xj.Completion)),!s&&(null==e?void 0:e.chat_model)&&t.push(h(e,l.xj.Chat)),(0,o.Z)(t,"kind")},[e,n]);return s}},1592:function(e,t,n){"use strict";function r(e){let[t,n]=e,r=new Headers;return r.append("authorization","Bearer ".concat(n)),fetch(t,{headers:r}).then(e=>e.json())}n.d(t,{Z:function(){return r}})},25809:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},26823:function(e,t,n){"use strict";n.d(t,{f:function(){return d}});var r=n(13428),a=n(2265),o=n(9381);let i="horizontal",s=["horizontal","vertical"],l=(0,a.forwardRef)((e,t)=>{let{decorative:n,orientation:s=i,...l}=e,d=c(s)?s:i;return(0,a.createElement)(o.WV.div,(0,r.Z)({"data-orientation":d},n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},l,{ref:t}))});function c(e){return s.includes(e)}l.propTypes={orientation(e,t,n){let r=e[t],a=String(r);return r&&!c(r)?Error(`Invalid prop \`orientation\` of value \`${a}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let d=l}},function(e){e.O(0,[358,364,948,787,894,971,864,744],function(){return e(e.s=25903)}),_N_E=e.O()}]);