"use strict";(self.webpackChunkthings=self.webpackChunkthings||[]).push([[8930],{3905:function(n,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function c(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function a(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},c=Object.keys(n);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var s=t.createContext({}),l=function(n){var e=t.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},u=function(n){var e=l(n.components);return t.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,c=n.originalType,s=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return r?t.createElement(f,i(i({ref:e},u),{},{components:r})):t.createElement(f,i({ref:e},u))}));function m(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2353:function(n,e,r){r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={},s=void 0,l={unversionedId:"\u5165\u95e8/\u76ee\u5f55\u8bf4\u660e",id:"\u5165\u95e8/\u76ee\u5f55\u8bf4\u660e",isDocsHomePage:!1,title:"\u76ee\u5f55\u8bf4\u660e",description:"",source:"@site/docs\\\u5165\u95e8\\\u76ee\u5f55\u8bf4\u660e.md",sourceDirName:"\u5165\u95e8",slug:"/\u5165\u95e8/\u76ee\u5f55\u8bf4\u660e",permalink:"/docs/\u5165\u95e8/\u76ee\u5f55\u8bf4\u660e",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u5165\u95e8\\\u76ee\u5f55\u8bf4\u660e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u8bbe\u8ba1",permalink:"/docs/\u5165\u95e8/\u670d\u52a1\u7b80\u4ecb"},next:{title:"\u5f00\u53d1\u6d41\u7a0b",permalink:"/docs/\u5ba0\u7269\u5b9a\u4f4d\u5f00\u53d1/\u5f00\u53d1\u6d41\u7a0b"}},u=[],p={toc:u};function d(n){var e=n.components,r=(0,o.Z)(n,i);return(0,c.kt)("wrapper",(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.en.md\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 db //\u5b58\u653e\u6240\u7528\u5230\u7684sql\u521d\u59cb\u5316\u811a\u672c\n\u2502\xa0\xa0 \u251c\u2500\u2500 dcsvr.sql\n\u2502\xa0\xa0 \u251c\u2500\u2500 dmsvr.sql\n\u2502\xa0\xa0 \u251c\u2500\u2500 readme.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 usersvr.sql\n\u251c\u2500\u2500 doc //\u6587\u6863\n\u251c\u2500\u2500 docker-compose.yml//\u6240\u6709\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684docker-compose\u6587\u4ef6\n\u251c\u2500\u2500 init.sh//\u521d\u59cb\u5316\u811a\u672c,\u53ea\u652f\u6301centos\n\u251c\u2500\u2500 run.sh//\u8fd0\u884c\u6240\u6709\u670d\u52a1\u7684\u811a\u672c\n\u251c\u2500\u2500 shared//\u901a\u7528\u4ee3\u7801\u5b58\u653e\u8def\u5f84\n\u2502\xa0\xa0 \u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 mongodb\n\u2502\xa0\xa0 \u251c\u2500\u2500 def\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 struct.go\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 type.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 errors//\u9519\u8bef\u7ed3\u6784\u4f53\u5c01\u88c5\u53ca\u76f8\u5173\u5904\u7406\u51fd\u6570\u53ca\u9519\u8bef\u7801\u5b9a\u4e49\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 baseerror.go\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 device.go\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 sys.go\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 proto\n\u2502\xa0\xa0 \u251c\u2500\u2500 third//\u7b2c\u4e09\u65b9\u76f8\u5173\u5904\u7406\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 weixin\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils//\u4e00\u4e9b\u5c0f\u5de5\u5177\n\u2502\xa0\xa0 \u2514\u2500\u2500 verify//\u4e8c\u7ef4\u7801\u6821\u9a8c\u5c01\u88c5\n\u2514\u2500\u2500 src//\u5b58\u653egothings\u7684\u5904\u7406\u903b\u8f91\n    \u251c\u2500\u2500 dcsvr//\u8bbe\u5907\u4ea4\u4e92\u6a21\u5757,\u8d1f\u8d23\u8bbe\u5907\u4e0e\u4eba\u7684\u4ea4\u4e92\u5904\u7406\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dc\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dc.go\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dc.proto\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dcclient\n    \u2502\xa0\xa0 \u251c\u2500\u2500 etc\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 dc.yaml\n    \u2502\xa0\xa0 \u251c\u2500\u2500 internal\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 server\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 svc\n    \u2502\xa0\xa0 \u251c\u2500\u2500 model\n    \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 dmsvr//\u8bbe\u5907\u7ba1\u7406\u6a21\u5757,\u8d1f\u8d23\u4e0e\u8bbe\u5907\u901a\u8baf,\u53ca\u7ba1\u7406\u8bbe\u5907\u7684\u8fde\u63a5\u9274\u6743\u7b49\u529f\u80fd\n    \u2502\xa0\xa0 \u251c\u2500\u2500 device\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dm\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dm.go\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dm.proto\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dmclient\n    \u2502\xa0\xa0 \u251c\u2500\u2500 dmsvr\n    \u2502\xa0\xa0 \u251c\u2500\u2500 etc\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 dm.yaml\n    \u2502\xa0\xa0 \u251c\u2500\u2500 internal\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 exchange\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 types\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 repo\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 model\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 mongorepo\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 mysql\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 server\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 svc\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 vars\n    \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 readme.md\n    \u251c\u2500\u2500 usersvr//\u7528\u6237\u6a21\u5757,\u8d1f\u8d23\u548c\u7528\u6237\u6253\u4ea4\u9053,\u7528\u6237\u7684\u767b\u5f55,\u6ce8\u518c\u7b49\u903b\u8f91\n    \u2502\xa0\xa0 \u251c\u2500\u2500 etc\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.yaml\n    \u2502\xa0\xa0 \u251c\u2500\u2500 internal\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 server\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 svc\n    \u2502\xa0\xa0 \u251c\u2500\u2500 model\n    \u2502\xa0\xa0 \u251c\u2500\u2500 tests\n    \u2502\xa0\xa0 \u251c\u2500\u2500 user\n    \u2502\xa0\xa0 \u251c\u2500\u2500 user.go\n    \u2502\xa0\xa0 \u251c\u2500\u2500 user.proto\n    \u2502\xa0\xa0 \u251c\u2500\u2500 userclient\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.go\n    \u2514\u2500\u2500 webapi//http\u7f51\u5173\u670d\u52a1,\u4e5f\u662fbff\u5c42,\u8d1f\u8d23\u5c06\u5176\u4ed6\u51e0\u4e2arpc\u670d\u52a1\u7684\u8f6c\u4e3ahttp\u63d0\u4f9b\u7ed9\u5916\u754c\n        \u251c\u2500\u2500 common.api\n        \u251c\u2500\u2500 dc.api\n        \u251c\u2500\u2500 dm.api\n        \u251c\u2500\u2500 etc\n        \u2502\xa0\xa0 \u2514\u2500\u2500 webapi.yaml\n        \u251c\u2500\u2500 internal\n        \u2502\xa0\xa0 \u251c\u2500\u2500 config\n        \u2502\xa0\xa0 \u251c\u2500\u2500 handler\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 backgrand\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 front\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 routes.go\n        \u2502\xa0\xa0 \u251c\u2500\u2500 initialize\n        \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 backgrand\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 front\n        \u2502\xa0\xa0 \u251c\u2500\u2500 middleware\n        \u2502\xa0\xa0 \u251c\u2500\u2500 svc\n        \u2502\xa0\xa0 \u251c\u2500\u2500 types\n        \u2502\xa0\xa0 \u2514\u2500\u2500 vars\n        \u251c\u2500\u2500 user.api\n        \u251c\u2500\u2500 verify.api\n        \u251c\u2500\u2500 webapi.api\n        \u2514\u2500\u2500 webapi.go\n")))}d.isMDXComponent=!0}}]);