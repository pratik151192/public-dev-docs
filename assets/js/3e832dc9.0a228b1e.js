"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[600],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7122:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(3117),a=(r(7294),r(3905));const i={sidebar_position:4,sidebar_class_name:"sidebar-item-limits",sidebar_label:"Service Limits",title:"Service Limits for Momento Serverless Cache",description:"Explore Momento Serverless Cache's service limits, the default values, and how to get them changed if you need."},o="Service Limits for Momento Serverless Cache",l={unversionedId:"limits",id:"limits",title:"Service Limits for Momento Serverless Cache",description:"Explore Momento Serverless Cache's service limits, the default values, and how to get them changed if you need.",source:"@site/docs/limits.md",sourceDirName:".",slug:"/limits",permalink:"/docs/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/limits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_class_name:"sidebar-item-limits",sidebar_label:"Service Limits",title:"Service Limits for Momento Serverless Cache",description:"Explore Momento Serverless Cache's service limits, the default values, and how to get them changed if you need."},sidebar:"tutorialSidebar",previous:{title:"Pricing",permalink:"/docs/pricing"},next:{title:"Caching Concepts",permalink:"/docs/category/caching-concepts"}},c={},s=[],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"service-limits-for-momento-serverless-cache"},"Service Limits for Momento Serverless Cache"),(0,a.kt)("p",null,"This page outlines the default service limits for Momento Serverless Cache. If you need limits adjusted, please reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento Support")," with your request."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Limit"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API Rate per cache (Data Plane)"),(0,a.kt)("td",{parentName:"tr",align:null},"100 RPS*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Throughput per cache"),(0,a.kt)("td",{parentName:"tr",align:null},"1MB/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Item Size"),(0,a.kt)("td",{parentName:"tr",align:null},"1MB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API Rate per customer (Control Plane)"),(0,a.kt)("td",{parentName:"tr",align:null},"5 RPS*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Max Cache Count (per account)"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Time to Live (TTL)"),(0,a.kt)("td",{parentName:"tr",align:null},"1 day")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*RPS = Requests/Second")))}u.isMDXComponent=!0}}]);