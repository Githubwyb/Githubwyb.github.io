!function(a){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=a,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=MathJax._.components.global.isObject,t.combineConfig=MathJax._.components.global.combineConfig,t.combineDefaults=MathJax._.components.global.combineDefaults,t.combineWithMathJax=MathJax._.components.global.combineWithMathJax,t.MathJax=MathJax._.components.global.MathJax},function(e,t,a){"use strict";var p=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,a=t&&e[t],r=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__read||function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,o,n=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(o)throw o.error}}return i},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.RequireConfiguration=t.options=t.RequireMethods=t.RequireLoad=void 0;var l=a(2),n=a(3),i=a(4),u=a(0),s=a(5),c=a(6),f=a(7),d=a(8),x=u.MathJax.config;function h(e,t){var a,r=e.parseOptions.options.require,o=e.parseOptions.packageData.get("require").required,n=t.substr(r.prefix.length);if(o.indexOf(n)<0){o.push(n),function(e,t){var a,r;void 0===t&&(t=[]);var o=e.parseOptions.options.require.prefix;try{for(var n=p(t),i=n.next();!i.done;i=n.next()){var u=i.value;u.substr(0,o.length)===o&&h(e,u)}}catch(e){a={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}}(e,c.CONFIG.dependencies[t]);var i=l.ConfigurationHandler.get(n);if(i){var u=x[t]||{};i.options&&1===Object.keys(i.options).length&&i.options[n]&&((a={})[n]=u,u=a),e.configuration.add(i,e,u);var s=e.parseOptions.packageData.get("require").configured;i.preprocessors.length&&!s.has(n)&&(s.set(n,!0),f.mathjax.retryAfter(Promise.resolve()))}}}function M(e,t){var a=e.options.require,r=a.allow,o=("["===t.substr(0,1)?"":a.prefix)+t;if(!(r.hasOwnProperty(o)?r[o]:r.hasOwnProperty(t)?r[t]:a.defaultAllow))throw new i.default("BadRequire",'Extension "%1" is now allowed to be loaded',o);s.Package.packages.has(o)?h(e.configuration.packageData.get("require").jax,o):f.mathjax.retryAfter(c.Loader.load(o))}t.RequireLoad=M,t.RequireMethods={Require:function(e,t){var a=e.GetArgument(t);if(a.match(/[^_a-zA-Z0-9]/)||""===a)throw new i.default("BadPackageName","Argument for %1 is not a valid package name",t);M(e,a)}},t.options={require:{allow:d.expandable({base:!1,"all-packages":!1}),defaultAllow:!0,prefix:"tex"}},new n.CommandMap("require",{require:"Require"},t.RequireMethods),t.RequireConfiguration=l.Configuration.create("require",{handler:{macro:["require"]},config:function(e,t){t.parseOptions.packageData.set("require",{jax:t,required:o(t.options.packages),configured:new Map});var a=t.parseOptions.options.require,r=a.prefix;if(r.match(/[^_a-zA-Z0-9]/))throw Error("Illegal characters used in \\require prefix");c.CONFIG.paths[r]||(c.CONFIG.paths[r]="[mathjax]/input/tex/extensions"),a.prefix="["+r+"]/"},options:t.options})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexError.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PackageError=MathJax._.components.package.PackageError,t.Package=MathJax._.components.package.Package},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loader=MathJax._.components.loader.Loader,t.MathJax=MathJax._.components.loader.MathJax,t.CONFIG=MathJax._.components.loader.CONFIG},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mathjax=MathJax._.mathjax.mathjax},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APPEND=MathJax._.util.Options.APPEND,t.REMOVE=MathJax._.util.Options.REMOVE,t.Expandable=MathJax._.util.Options.Expandable,t.expandable=MathJax._.util.Options.expandable,t.makeArray=MathJax._.util.Options.makeArray,t.keys=MathJax._.util.Options.keys,t.copy=MathJax._.util.Options.copy,t.insert=MathJax._.util.Options.insert,t.defaultOptions=MathJax._.util.Options.defaultOptions,t.userOptions=MathJax._.util.Options.userOptions,t.selectOptions=MathJax._.util.Options.selectOptions,t.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,t.separateOptions=MathJax._.util.Options.separateOptions},function(e,t,a){"use strict";a.r(t);var r=a(0),o=a(1);Object(r.combineWithMathJax)({_:{input:{tex:{require:{RequireConfiguration:o}}}}})}]);