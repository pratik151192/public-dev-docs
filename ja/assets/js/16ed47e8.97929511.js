"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<r;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),o=n(7294),r=n(6010),s=n(2466),l=n(6550),c=n(1980),i=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,i]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=c??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var b=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==l&&(d(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,r.Z)("tabs__item",y,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return o.createElement(T,(0,a.Z)({key:String(t)},e))}},1583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),s=n(5162);const l={sidebar_position:3,sidebar_label:"TypeScript+Node.js",sidebar_class_name:"sidebar-item-nodejs",title:"Cheat Sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Cache"},c="Cheat Sheet for Node.js with Momento Cache",i={unversionedId:"develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet",id:"develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet",title:"Cheat Sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet.md",sourceDirName:"develop/guides/cheat-sheets",slug:"/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet",permalink:"/ja/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"TypeScript+Node.js",sidebar_class_name:"sidebar-item-nodejs",title:"Cheat Sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"PHP",permalink:"/ja/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet"},next:{title:"Go",permalink:"/ja/develop/guides/cheat-sheets/momento-cache-go-cheat-sheet"}},u={},d=[{value:"Install the Momento client library",id:"install-the-momento-client-library",level:2},{value:"Create a .env file",id:"create-a-env-file",level:2},{value:"Import libraries and connect to return a CacheClient object",id:"import-libraries-and-connect-to-return-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cheat-sheet-for-nodejs-with-momento-cache"},"Cheat Sheet for Node.js with Momento Cache"),(0,o.kt)("p",null,"If you need to get going quickly with Node.js + TypeScript and Momento Cache, this page contains the basic API calls you'll need. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-nodejs"},"Check the node.js SDK page")," for this code in a full file format."),(0,o.kt)("h2",{id:"install-the-momento-client-library"},"Install the Momento client library"),(0,o.kt)("p",null,"Install the client library in an existing node.js project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,o.kt)("h2",{id:"create-a-env-file"},"Create a .env file"),(0,o.kt)("p",null,"You'll need to create a .env file to hold your Momento Cache auth token and the TTL (in seconds) you want to use by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\nexport MOMENTO_TTL_SECONDS=300\n")),(0,o.kt)("h2",{id:"import-libraries-and-connect-to-return-a-cacheclient-object"},"Import libraries and connect to return a CacheClient object"),(0,o.kt)("p",null,"This code sets up the main function, the necessary imports,  and the CacheClient instantiation that each of the other functions will need to call."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  CacheGet,\n  CreateCache,\n  CacheSet,\n  CacheClient,\n  Configurations,\n  CredentialProvider,\n} from '@gomomento/sdk';\n\nimport dotenv from 'dotenv';\n\ndotenv.config();\n\nasync function main() {\n  const momento = new CacheClient({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n    }),\n    defaultTtlSeconds: 60,\n  });\n\nmain()\n  .then(() => {\n    console.log('success!!');\n  })\n  .catch((e: Error) => {\n    console.error(`Uncaught exception while running example: ${e.message}`);\n    throw e;\n  });\n"))),(0,o.kt)(s.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,o.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,o.kt)("p",null,"Use this function to create a new cache in your account."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  const createCacheResponse = await momento.createCache('cache');\n  if (createCacheResponse instanceof CreateCache.AlreadyExists) {\n    console.log('cache already exists');\n  } else if (createCacheResponse instanceof CreateCache.Error) {\n    throw createCacheResponse.innerException();\n  }\n"))),(0,o.kt)(s.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,o.kt)("h2",{id:"list-the-names-of-existing-caches-in-your-account"},"List the names of existing caches in your account"),(0,o.kt)("p",null,"A simple list of the names of caches for the account."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log('Listing caches:');\nconst listResponse = await momento.listCaches();\nif (listResponse instanceof ListCaches.Error) {\n  console.log(`Error listing caches: ${listResponse.message()}`);\n} else if (listResponse instanceof ListCaches.Success) {\n  console.log('Found caches:');\n  listResponse.getCaches().forEach(cacheInfo => {\n    console.log(`${cacheInfo.getName()}`);\n  });\n} else {\n  throw new Error(`Unrecognized response: ${listResponse.toString()}`);\n}\n"))),(0,o.kt)(s.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,o.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,o.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log('Storing key=foo, value=FOO');\nconst setResponse = await momento.set('cache', 'foo', 'FOO');\nif (setResponse instanceof CacheSet.Success) {\n    console.log('Key stored successfully!');\n} else {\n    console.log(`Error setting key: ${setResponse.toString()}`);\n}\n"))),(0,o.kt)(s.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,o.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,o.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  const getResponse = await momento.get('cache', 'foo');\n  if (getResponse instanceof CacheGet.Hit) {\n    console.log(`cache hit: ${getResponse.valueString()}`);\n  } else if (getResponse instanceof CacheGet.Miss) {\n    console.log('cache miss');\n  } else if (getResponse instanceof CacheGet.Error) {\n    console.log(`Error: ${getResponse.message()}`);\n  }\n"))),(0,o.kt)(s.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,o.kt)("h2",{id:"running-the-code"},"Running the code"),(0,o.kt)("p",null,"If you download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-nodejs/blob/main/examples/basic.ts"},"entire file"),", then run this command to execute the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"npx ts-node basic.ts\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,o.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls."),(0,o.kt)("p",{parentName:"admonition"},"Follow this link to see this same type of code but for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-nodejs/blob/main/examples/advanced.ts"},"more advanced calls"),". ")))}m.isMDXComponent=!0}}]);