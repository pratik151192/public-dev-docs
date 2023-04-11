"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[613],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>b});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(o),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||s;return o?i.createElement(d,r(r({ref:t},l),{},{components:o})):i.createElement(d,r({ref:t},l))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var p=2;p<s;p++)r[p]=o[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3301:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=o(7462),n=(o(7294),o(3905));const s={sidebar_position:1,sidebar_label:"Momento Topics",sidebar_class_name:"sidebar-item-overview",title:"What is Momento Topics?",pagination_prev:null,description:"Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication."},r="What is Momento Topics?",a={unversionedId:"introduction/momento-topics",id:"introduction/momento-topics",title:"What is Momento Topics?",description:"Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/momento-topics.md",sourceDirName:"introduction",slug:"/introduction/momento-topics",permalink:"/ja/introduction/momento-topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/introduction/momento-topics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Momento Topics",sidebar_class_name:"sidebar-item-overview",title:"What is Momento Topics?",pagination_prev:null,description:"Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication."},sidebar:"tutorialSidebar",next:{title:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306f\u4f55\u304b\uff1f",permalink:"/ja/introduction/what-is-serverless-caching"}},c={},p=[{value:"How does Momento Topics work?",id:"how-does-momento-topics-work",level:2},{value:"API calls for Momento Topics",id:"api-calls-for-momento-topics",level:2},{value:"Frequently asked questions about Momento Topics (pub/sub)",id:"frequently-asked-questions-about-momento-topics-pubsub",level:2}],l={toc:p};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-momento-topics"},"What is Momento Topics?"),(0,n.kt)("p",null,"Momento Topics is a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern that allows for real-time communication between parts of a distributed system. Momento Topics allows your apps to subscribe to topics to receive items published to the topic by your app\u2019s publishers. As the Momento Topics service is serverless, there is no infrastructure to create or manage and no pub/sub topic to instantiate. When you publish an item to a topic, if it does not exist yet, the topic is created. As Topics utilizes Momento Cache, there is no scaling either. You\u2019re charged just for ",(0,n.kt)("a",{parentName:"p",href:"./../manage/pricing"},"the data transferred in and out"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(6359).Z,width:"500",height:"500"})),(0,n.kt)("h2",{id:"how-does-momento-topics-work"},"How does Momento Topics work?"),(0,n.kt)("p",null,"Momento Topics (pub/sub) is a serverless service that enables efficient real-time communication between different parts of a distributed system. The pub/sub service promotes a decoupled architecture, where publishers (producers) send items to specific topics without needing to know the identities or locations of the subscribers (consumers). Subscribers listen for items on one or more topics of interest, receiving all items published to those topics by the publishers."),(0,n.kt)("p",null,"This topic-based communication allows for effective routing and filtering, as subscribers only receive items relevant to their subscribed topics, enabling them to focus on these specific topics. This approach simplifies the implementation of real-time applications, such as chat systems, notifications, or data streaming."),(0,n.kt)("p",null,"Momento Topics operates on a fire-and-forget messaging model, which means that once an item is published, it is immediately sent to all current subscribers of the topic and then discarded. There is no built-in item persistence or delivery guarantees. Consequently, Momento Topics is most suitable for applications where low latency is crucial, and occasional item loss can be tolerated."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As Momento Topics uses Momento Cache as its backend, you either use an existing cache or create a new cache in Momento Cache, then call the ",(0,n.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/topics"},"Momento Topics publish and subscribe API"),".")),(0,n.kt)("h2",{id:"api-calls-for-momento-topics"},"API calls for Momento Topics"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/topics"},"API reference page for Topics"),"."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"If you'd like to try out Momento Topics, click for a free sandbox demo."),(0,n.kt)("a",{href:"https://play.instruqt.com/embed/momento/tracks/topics-on-the-momento-cli?token=em_Q_mgzhVtWtP5B_jj&finish_btn_target=_top&finish_btn_text=Go+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fdevelop%2Fapi-reference%2Ftopics"},(0,n.kt)("img",{src:"/ja/img/topics-instruct.png",alt:"Momento Topics lab"})),(0,n.kt)("h2",{id:"frequently-asked-questions-about-momento-topics-pubsub"},"Frequently asked questions about Momento Topics (pub/sub)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"If an app subscribes to a topic after an item has been published, will it still get that item?"),"No. A subscriber does not have access to historical items on a Topic."))}u.isMDXComponent=!0},6359:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/pub-sub-smaller-2a18aa2f51e1720ca2a056c07445f8dc.png"}}]);