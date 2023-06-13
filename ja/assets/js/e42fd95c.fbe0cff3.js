"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2026],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(o),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5158:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:1,title:"Momento Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Information about the Momento Node.js SDK"},a="Momento Node.js SDK",s={unversionedId:"develop/sdks/nodejs/index",id:"develop/sdks/nodejs/index",title:"Momento Node.js SDK",description:"Information about the Momento Node.js SDK",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/sdks/nodejs/index.md",sourceDirName:"develop/sdks/nodejs",slug:"/develop/sdks/nodejs/",permalink:"/ja/develop/sdks/nodejs/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks/nodejs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Momento Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Information about the Momento Node.js SDK"},sidebar:"tutorialSidebar",next:{title:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",permalink:"/ja/develop/sdks/nodejs/cheat-sheet"}},l={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-nodejs-sdk"},"Momento Node.js SDK"),(0,r.kt)("p",null,"Welcome to the Momento Node.js SDK documentation!"),(0,r.kt)("p",null,"The Momento node.js SDK is available via the npm package ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"@gomomento/sdk")),"."),(0,r.kt)("p",null,"The source code can be found on github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node version ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"14 or higher")," is required."),(0,r.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/develop/sdks/nodejs/cheat-sheet"},"Node.js SDK Cheat Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md"},"Node.js SDK Examples"),": working example projects that illustrate how to use the Node.js SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the Node.js SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Node.js SDK")),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-redis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"@redis/client"))," - a drop-in replacement that allows you to use Momento Cache with your existing ",(0,r.kt)("inlineCode",{parentName:"li"},"@redis/client")," code! See also our ",(0,r.kt)("a",{parentName:"li",href:"/ja/develop/integrations/redis-client-compatibility"},"Redis Client Compatibility")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-ioredis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"ioredis"))," - a drop-in replacement that allows you to use Momento Cache with your existing ",(0,r.kt)("inlineCode",{parentName:"li"},"ioredis")," code! See also our ",(0,r.kt)("a",{parentName:"li",href:"/ja/develop/integrations/redis-client-compatibility"},"Redis Client Compatibility")," page.")))}m.isMDXComponent=!0}}]);