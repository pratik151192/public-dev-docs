"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[504],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:5,sidebar_label:"Response objects",title:"Response object API reference",description:"Learn how to interact with the response object in the Momento API.",slug:"/develop/api-reference/response-objects"},i="Response objects",a={unversionedId:"develop/api-reference/response-objects",id:"develop/api-reference/response-objects",title:"Response object API reference",description:"Learn how to interact with the response object in the Momento API.",source:"@site/docs/develop/api-reference/response-objects.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/response-objects",permalink:"/develop/api-reference/response-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Response objects",title:"Response object API reference",description:"Learn how to interact with the response object in the Momento API.",slug:"/develop/api-reference/response-objects"},sidebar:"tutorialSidebar",previous:{title:"CollectionTTL object",permalink:"/develop/api-reference/collections/collectionttl"},next:{title:"Learn"}},c={},l=[{value:"Error",id:"error",level:3},{value:"Constructor",id:"constructor",level:4},{value:"Methods",id:"methods",level:4},{value:"Success",id:"success",level:3},{value:"Hit",id:"hit",level:3},{value:"Miss",id:"miss",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"response-objects"},"Response objects"),(0,o.kt)("p",null,"These are the baseline responses for all commands. Some commands will add more data and functionality."),(0,o.kt)("p",null,"Commands fall ",(0,o.kt)("em",{parentName:"p"},"generally")," into two categories. Those which respond with Success or Error and those which respond with Hit, Miss, or Error."),(0,o.kt)("h3",{id:"error"},"Error"),(0,o.kt)("p",null,"Returned in lieu of an exception."),(0,o.kt)("h4",{id:"constructor"},"Constructor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"innerException: Exception - the exception which caused the error")),(0,o.kt)("h4",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"message(): string - a human readable error message"),(0,o.kt)("li",{parentName:"ul"},"innerException(): Exception - the original exception."),(0,o.kt)("li",{parentName:"ul"},"errorCode(): MomentoErrorCode - Momento\u2019s own category of errors such as InvalidArgument or BadRequest. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md"},"Standards And Practices - Error Handling")),(0,o.kt)("li",{parentName:"ul"},"toString(): string - alias for message()")),(0,o.kt)("h3",{id:"success"},"Success"),(0,o.kt)("p",null,"The command was successful."),(0,o.kt)("h3",{id:"hit"},"Hit"),(0,o.kt)("p",null,'For fetch commands, the key or field exists in the cache and there is a "cache hit". Usually extended to return a value.'),(0,o.kt)("h3",{id:"miss"},"Miss"),(0,o.kt)("p",null,'For fetch commands, the key or field does not exist and it a "cache miss."'))}d.isMDXComponent=!0}}]);