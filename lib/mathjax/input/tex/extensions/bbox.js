!function(a){var o={};function n(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.components.global.isObject,e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BboxConfiguration=e.BboxMethods=void 0;var o=a(2),n=a(3),b=a(4);e.BboxMethods={},e.BboxMethods.BBox=function(t,e){for(var a,o,n,i=t.GetBrackets(e,""),r=t.ParseArg(e),u=i.split(/,/),l=0,c=u.length;l<c;l++){var p=u[l].trim(),f=p.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);if(f){if(a)throw new b.default("MultipleBBoxProperty","%1 specified twice in %2","Padding",e);var s=M(f[1]+f[3]);s&&(a={height:"+"+s,depth:"+"+s,lspace:s,width:"+"+2*parseInt(f[1],10)+f[3]})}else if(p.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)){if(o)throw new b.default("MultipleBBoxProperty","%1 specified twice in %2","Background",e);o=p}else if(p.match(/^[-a-z]+:/i)){if(n)throw new b.default("MultipleBBoxProperty","%1 specified twice in %2","Style",e);n=d(p)}else if(""!==p)throw new b.default("InvalidBBoxProperty",'"%1" doesn\'t look like a color, a padding dimension, or a style',p)}a&&(r=t.create("node","mpadded",[r],a)),(o||n)&&(a={},o&&Object.assign(a,{mathbackground:o}),n&&Object.assign(a,{style:n}),r=t.create("node","mstyle",[r],a)),t.Push(r)};var d=function(t){return t},M=function(t){return t};new n.CommandMap("bbox",{bbox:"BBox"},e.BboxMethods),e.BboxConfiguration=o.Configuration.create("bbox",{handler:{macro:["bbox"]}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,e.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.TexError.default},function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(1);Object(o.combineWithMathJax)({_:{input:{tex:{bbox:{BboxConfiguration:n}}}}})}]);