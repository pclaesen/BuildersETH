"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[3230],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,b=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4365:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l="Integers",u={unversionedId:"solidity-101/language-building-blocks/Data-Types/integers",id:"solidity-101/language-building-blocks/Data-Types/integers",title:"Integers",description:"Integers are ...",source:"@site/docs/solidity-101/2-language-building-blocks/2-Data-Types/10-integers.mdx",sourceDirName:"solidity-101/2-language-building-blocks/2-Data-Types",slug:"/solidity-101/language-building-blocks/Data-Types/integers",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/integers",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/solidity-101/2-language-building-blocks/2-Data-Types/10-integers.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Strings",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/strings"},next:{title:"Integers",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/integer-and-unsigned-integer-sizes"}},c={},p=[],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},g=d("Tabs"),b=d("TabItem"),y={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integers"},"Integers"),(0,a.kt)("p",null,"Integers are ..."),(0,a.kt)("p",null,"Negative numbers are allowed for int types."),(0,a.kt)(g,{mdxType:"Tabs"},(0,a.kt)(b,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Integers {\n    // integers\n    // Specify variables from 8 bytes to 256 bytes\n    int8 public i8 = -1;\n    int public i256 = 1234;\n    int public i = -1234; // int is an alias for int256\n    int public defaultInt; // 0\n}\n"))),(0,a.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Numbers {\n  // Add code for primitive values\n  // JavaScript only has a Number Type\n  // No memory specfic number types\n}\n")))))}f.isMDXComponent=!0}}]);