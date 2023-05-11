"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,d=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(d,c(c({ref:t},h),{},{components:n})):a.createElement(d,c({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,sidebar_label:"Python",sidebar_class_name:"sidebar-item-python-cheat-sheet",title:"Cheat Sheet for Python + Momento Cache",description:"Everything to get you going with coding using Python and Momento Cache"},c="Cheat Sheet for Python with Momento Cache",i={unversionedId:"develop/guides/cheat-sheets/momento-cache-python-cheat-sheet",id:"develop/guides/cheat-sheets/momento-cache-python-cheat-sheet",title:"Cheat Sheet for Python + Momento Cache",description:"Everything to get you going with coding using Python and Momento Cache",source:"@site/docs/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet.md",sourceDirName:"develop/guides/cheat-sheets",slug:"/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet",permalink:"/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Python",sidebar_class_name:"sidebar-item-python-cheat-sheet",title:"Cheat Sheet for Python + Momento Cache",description:"Everything to get you going with coding using Python and Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Cheat Sheets"},next:{title:"PHP",permalink:"/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet"}},s={},l=[{value:"Import libraries and connect to return a CacheClient object",id:"import-libraries-and-connect-to-return-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"Get list of existing caches in your account",id:"get-list-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Increment the value of an item in a cache",id:"increment-the-value-of-an-item-in-a-cache",level:2},{value:"Notes of usage",id:"notes-of-usage",level:2}],h={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cheat-sheet-for-python-with-momento-cache"},"Cheat Sheet for Python with Momento Cache"),(0,o.kt)("p",null,"If you need to get going quickly with Python and Momento Cache, this page contains the basic API calls you'll need."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you combine all of the functions on this page into one python file, you'd have a central collection of functions you can import and call from other python code. In addition, if you are using this code in production you might look to replace the print() calls with ones using the logging library (",(0,o.kt)("inlineCode",{parentName:"p"},"import logging"),") in python. ",(0,o.kt)("a",{target:"_blank",href:n(670).Z},"Click here")," to see the class file with all definitions in it.")),(0,o.kt)("h2",{id:"import-libraries-and-connect-to-return-a-cacheclient-object"},"Import libraries and connect to return a CacheClient object"),(0,o.kt)("p",null,"This code sets up the class with the necessary imports, the class definition, and the CacheClient instantiation that each of the other functions will need to call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import timedelta\nfrom momento import CacheClient, Configurations, CredentialProvider\nfrom momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement\n\nimport os\n\ndef create_client():\n  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')\n  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))\n  config = {\n    'configuration': Configurations.Laptop.v1(),\n    'credential_provider': momento_auth_token,\n    'default_ttl':  ttl\n  }\n  return CacheClient(**config)\n")),(0,o.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,o.kt)("p",null,"Use this function to create a new cache in your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def create_cache(client, cache_name: str) -> None:\n  resp = client.create_cache(cache_name)\n  match resp:\n    case CreateCache.Success():\n        print("Cache created.")\n    case CreateCache.Error() as error:\n        print(f"Error creating cache: {error.message}")\n    case _ as error:\n        print(f"Unreachable with {error.message}")\n')),(0,o.kt)("h2",{id:"get-list-of-existing-caches-in-your-account"},"Get list of existing caches in your account"),(0,o.kt)("p",null,"In this example, we use the client function above to get a client object and then use it to list all of the caches for this account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def list_caches(client) -> None:\n    print("Listing caches:")\n    list_caches_response = client.list_caches()\n    match list_caches_response:\n        case ListCaches.Success() as success:\n            for cache_info in success.caches:\n                print(f"- {cache_info.name!r}")\n        case ListCaches.Error() as error:\n            print(f"Error listing caches: {error.message}")\n        case _:\n            print("Unreachable")\n    print("")\n')),(0,o.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,o.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def set(client, cache_name, key, value, ttl=None):\n  resp = client.set(cache_name, key, value, ttl)\n  match resp:\n    case CacheSet.Success():\n        pass\n    case CacheSet.Error() as error:\n        print(f"Error setting value: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,o.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,o.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def get(client, cache_name, key):\n  resp = client.get(cache_name, key)\n  match resp:\n    case CacheGet.Hit():\n        print("value is " + resp.value_string)\n    case CacheGet.Miss() as error:\n        print(f"Error getting key: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,o.kt)("h2",{id:"increment-the-value-of-an-item-in-a-cache"},"Increment the value of an item in a cache"),(0,o.kt)("p",null,"An example of incrementing a value in a key. You can pass in a positive or negative integer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def incr(client, cache_name, key, value:int = 1):\n  resp = client.increment(cache_name, key, value)\n  match resp:\n    case CacheIncrement.Success():\n        pass\n    case CacheIncrement.Error() as error:\n        print(f"Error incrementing value: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,o.kt)("a",{parentName:"p",href:"/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls.")),(0,o.kt)("h2",{id:"notes-of-usage"},"Notes of usage"),(0,o.kt)("p",null,"For any of these functions, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_client()")," function which returns a CacheClient object. Then pass that object into subsequent functions. This way, calls are more efficient as they reuse the CacheClient for multiple calls to Momento. ",(0,o.kt)("a",{target:"_blank",href:n(670).Z},"Click here")," to see a file with all definitions in it."))}p.isMDXComponent=!0},670:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/MomentoBasics-a46cacafa2096ae0ca6699a890df7137.py"}}]);