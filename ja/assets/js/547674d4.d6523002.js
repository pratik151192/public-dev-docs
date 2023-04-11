"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7974:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const l={sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache.",slug:"/develop/api-reference/collections/collectionttl"},i="CollectionTTL object API reference",a={unversionedId:"develop/api-reference/collection-ttl",id:"develop/api-reference/collection-ttl",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/api-reference/collection-ttl.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/collections/collectionttl",permalink:"/ja/develop/api-reference/collections/collectionttl",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/collection-ttl.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache.",slug:"/develop/api-reference/collections/collectionttl"},sidebar:"tutorialSidebar",previous:{title:"Topics (Pub/Sub)",permalink:"/ja/develop/api-reference/topics"},next:{title:"Response objects",permalink:"/ja/develop/api-reference/response-objects"}},c={},s=[{value:"Common method behaviors",id:"common-method-behaviors",level:2},{value:"Constructor parameters",id:"constructor-parameters",level:2},{value:"Additional constructors",id:"additional-constructors",level:2},{value:"Instance methods",id:"instance-methods",level:2}],u={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collectionttl-object-api-reference"},"CollectionTTL object API reference"),(0,r.kt)("p",null,"This object is passed into API methods to say whether a TTL should be updated and if so, what the new TTL value should be."),(0,r.kt)("p",null,"This tries to make the process more intuitive by providing named constructors and copiers for various situations."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../../../learn/how-it-works/expire-data-with-ttl"},"Expire Data with TTL")," for more information on how TTL works with Momento Cache."),(0,r.kt)("h2",{id:"common-method-behaviors"},"Common method behaviors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a CollectionTTL is not passed in a function call, a default value of ",(0,r.kt)("inlineCode",{parentName:"li"},"CollectionTtl.fromCacheTtl()")," will be used. This value is the TTL configured on the cache client. "),(0,r.kt)("li",{parentName:"ul"},"The TTL for the collection will be refreshed any time the collection is modified.")),(0,r.kt)("h2",{id:"constructor-parameters"},"Constructor parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ttl: duration - (optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no TTL is given, the TTL set in the current client connection object is used."))),(0,r.kt)("li",{parentName:"ul"},"refreshTtl: boolean = true",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If set to true, the collection\u2019s TTL will be reset to the provided value."),(0,r.kt)("li",{parentName:"ul"},"If set to false, the existing TTL set on the item is retained.")))),(0,r.kt)("h2",{id:"additional-constructors"},"Additional constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fromCacheTtl(): CollectionTtl - uses the client\u2019s TTL, equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"CollectionTtl(null, true)")),(0,r.kt)("li",{parentName:"ul"},"of(ttl: duration): CollectionTtl - equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"CollectionTtl(ttl, true)")),(0,r.kt)("li",{parentName:"ul"},"refreshTtlIfProvided(ttl?: duration): CollectionTtl - if a value is provided, it will refresh the item's TTL. If no value is provided, it will not refresh the TTL.")),(0,r.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ttlSeconds(): duration - Returns the TTL in seconds"),(0,r.kt)("li",{parentName:"ul"},"ttlMilliseconds(): duration - Returns the TTL in milliseconds"),(0,r.kt)("li",{parentName:"ul"},"refreshTtl(): boolean - Sets if the TTL should be refreshed when the item is modified"),(0,r.kt)("li",{parentName:"ul"},"withRefreshTtlOnUpdates(): CollectionTtl - a copy, but refresh is true"),(0,r.kt)("li",{parentName:"ul"},"withNoRefreshTtlOnUpdates(): CollectionTtl - a copy, but refresh is false"),(0,r.kt)("li",{parentName:"ul"},"toString(): displays the TTL in seconds and the refreshTtl configuration")))}p.isMDXComponent=!0}}]);