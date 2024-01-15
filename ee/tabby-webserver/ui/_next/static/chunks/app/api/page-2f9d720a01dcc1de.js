(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{53298:function(e,n,t){Promise.resolve().then(t.bind(t,93079))},93079:function(e,n,t){"use strict";t.r(n),t.d(n,{Header:function(){return j}});var r=t(57437),a=t(2265),s=t(61396),i=t.n(s),l=t(73737),c=t(91067),o=t(70349),d=t(13287),u=t(1589),h=t(8724),m=t(88809),f=t(39311),p=t(93023),x=t(84168),b=t(6435);function v(){let{setTheme:e,theme:n}=(0,b.F)(),[t,s]=a.useTransition();return(0,r.jsxs)(p.z,{variant:"ghost",size:"icon",onClick:()=>{s(()=>{e("light"===n?"dark":"light")})},children:["dark"===n?(0,r.jsx)(x.C9,{className:"transition-all"}):(0,r.jsx)(x.O3,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function j(){var e;(0,m.av)();let{data:n}=(0,d.Q)(),t=(0,h.s)(),a=(0,c.Z)(t,o.xj.Chat),s=null==n?void 0:null===(e=n.version)||void 0===e?void 0:e.git_describe,{data:b}=(0,u.Z)("https://api.github.com/repos/TabbyML/tabby/releases/latest",e=>fetch(e).then(e=>e.json())),j=function(e,n){try{return e&&n&&(0,l.q)(n.name,e,">")}catch(e){return console.warn(e),!0}}(s,b);return(0,r.jsxs)("header",{className:"sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b px-4 backdrop-blur-xl",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("span",{className:"hidden select-none px-2 font-logo font-semibold sm:inline-block",children:"Tabby"})}),(0,r.jsx)(y,{href:"/api",children:"API"}),a&&(0,r.jsx)(y,{href:"/playground",children:"Playground"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,r.jsx)(v,{}),j&&(0,r.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/latest",rel:"noopener noreferrer",className:(0,p.d)({variant:"ghost"}),children:[(0,r.jsx)(x.Qs,{className:"text-yellow-600 dark:text-yellow-400"}),(0,r.jsxs)("span",{className:"ml-2 hidden md:flex",children:["New version (",null==b?void 0:b.name,") available"]})]}),(0,r.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby",rel:"noopener noreferrer",className:(0,f.cn)((0,p.d)({variant:"outline"})),children:[(0,r.jsx)(x.Mr,{}),(0,r.jsx)("span",{className:"ml-2 hidden md:flex",children:"GitHub"})]})]})]})}let y=e=>{let{children:n,href:t}=e;return(0,r.jsx)(i(),{href:t,className:(0,f.cn)((0,p.d)({variant:"link"}),"text-foreground"),children:n})}},13287:function(e,n,t){"use strict";t.d(n,{Q:function(){return i}});var r=t(30713),a=t(1592),s=t(88809);function i(){return(0,r.ZP)((0,s.X0)("/v1/health"),a.Z)}},8724:function(e,n,t){"use strict";t.d(n,{s:function(){return p}});var r=t(2265),a=t(16630),s=t(91317),i=t(35512),l=t(58835),c=t(70349),o=t(7820),d=t(39311),u=t(13287);let h={[c.xj.Chat]:"chat_model",[c.xj.Completion]:"model"};function m(e,n){var t;return{kind:n,device:e.device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:null!==(t=null==e?void 0:e[h[n]])&&void 0!==t?t:"",cpuCount:e.cpu_count,accelerators:e.accelerators.map(e=>({uuid:e.uuid,chipName:e.chip_name,displayName:e.display_name,deviceType:d.uY[e.device_type]}))}}let f=(0,l.BX)("\n  query GetWorkers {\n    workers {\n      kind\n      name\n      addr\n      device\n      arch\n      cpuInfo\n      cpuCount\n      accelerators {\n        uuid\n        chipName\n        displayName\n        deviceType\n      }\n    }\n  }\n");function p(){let{data:e}=(0,u.Q)(),{data:n}=(0,o.J9)(f),t=null==n?void 0:n.workers,l=r.useMemo(()=>{let n=(0,i.Z)(t),r=(0,a.Z)(n,{kind:c.xj.Completion})>-1,l=(0,a.Z)(n,{kind:c.xj.Chat})>-1;return!r&&(null==e?void 0:e.model)&&n.push(m(e,c.xj.Completion)),!l&&(null==e?void 0:e.chat_model)&&n.push(m(e,c.xj.Chat)),(0,s.Z)(n,"kind")},[e,t]);return l}},1592:function(e,n,t){"use strict";function r(e){let[n,t]=e,r=new Headers;return r.append("authorization","Bearer ".concat(t)),fetch(n,{headers:r}).then(e=>e.json())}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[358,948,505,787,894,971,864,744],function(){return e(e.s=53298)}),_N_E=e.O()}]);