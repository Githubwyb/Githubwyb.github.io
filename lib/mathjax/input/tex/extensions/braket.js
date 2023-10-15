!function(r){var a={};function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t,r){"use strict";var a,o=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.BraketItem=void 0;var n=r(6),c=r(2),u=r(7),i=function(i){function e(){return null!==i&&i.apply(this,arguments)||this}return o(e,i),Object.defineProperty(e.prototype,"kind",{get:function(){return"braket"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.checkItem=function(e){return e.isKind("close")?[[this.factory.create("mml",this.toMml())],!0]:e.isKind("mml")?(this.Push(e.toMml()),this.getProperty("single")?[[this.toMml()],!0]:n.BaseItem.fail):i.prototype.checkItem.call(this,e)},e.prototype.toMml=function(){var e=i.prototype.toMml.call(this),t=this.getProperty("open"),r=this.getProperty("close");if(this.getProperty("stretchy"))return u.default.fenced(this.factory.configuration,t,e,r);var a={fence:!0,stretchy:!1,symmetric:!0,texClass:c.TEXCLASS.OPEN},o=this.create("token","mo",a,t);a.texClass=c.TEXCLASS.CLOSE;var n=this.create("token","mo",a,r);return this.create("node","mrow",[o,e,n],{open:t,close:r,texClass:c.TEXCLASS.INNER})},e}(n.BaseItem);t.BraketItem=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(10),c=r(2),u=r(11),o={};o.Macro=a.default.Macro,o.Braket=function(e,t,r,a,o,n){var i=e.GetNext();if(""===i)throw new u.default("MissingArgFor","Missing argument for %1",e.currentCS);var c=!0;"{"===i&&(e.i++,c=!1),e.Push(e.itemFactory.create("braket").setProperties({barmax:n,barcount:0,open:r,close:a,stretchy:o,single:c}))},o.Bar=function(e,t){var r="|"===t?"|":"∥",a=e.stack.Top();if("braket"!==a.kind||a.getProperty("barcount")>=a.getProperty("barmax")){var o=e.create("token","mo",{texClass:c.TEXCLASS.ORD,stretchy:!1},r);e.Push(o)}else{if("|"===r&&"|"===e.GetNext()&&(e.i++,r="∥"),a.getProperty("stretchy")){var n=e.create("node","TeXAtom",[],{texClass:c.TEXCLASS.CLOSE});e.Push(n),a.setProperty("barcount",a.getProperty("barcount")+1),n=e.create("token","mo",{stretchy:!0,braketbar:!0},r),e.Push(n),n=e.create("node","TeXAtom",[],{texClass:c.TEXCLASS.OPEN}),e.Push(n)}else{var i=e.create("token","mo",{stretchy:!1,braketbar:!0},r);e.Push(i)}}},t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TEXCLASS=MathJax._.core.MmlTree.MmlNode.TEXCLASS,t.TEXCLASSNAMES=MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES,t.indentAttributes=MathJax._.core.MmlTree.MmlNode.indentAttributes,t.AbstractMmlNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlNode,t.AbstractMmlTokenNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode,t.AbstractMmlLayoutNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode,t.AbstractMmlBaseNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode,t.AbstractMmlEmptyNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode,t.TextNode=MathJax._.core.MmlTree.MmlNode.TextNode,t.XMLNode=MathJax._.core.MmlTree.MmlNode.XMLNode},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=MathJax._.components.global.isObject,t.combineConfig=MathJax._.components.global.combineConfig,t.combineDefaults=MathJax._.components.global.combineDefaults,t.combineWithMathJax=MathJax._.components.global.combineWithMathJax,t.MathJax=MathJax._.components.global.MathJax},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.BraketConfiguration=void 0;var o=r(5),n=r(0);r(8),t.BraketConfiguration=o.Configuration.create("braket",{handler:{character:["Braket-characters"],macro:["Braket-macros"]},items:(a={},a[n.BraketItem.prototype.kind]=n.BraketItem,a)})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MmlStack=MathJax._.input.tex.StackItem.MmlStack,t.BaseItem=MathJax._.input.tex.StackItem.BaseItem},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseUtil.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(9),o=r(1);new a.CommandMap("Braket-macros",{bra:["Macro","{\\langle {#1} \\vert}",1],ket:["Macro","{\\vert {#1} \\rangle}",1],braket:["Braket","⟨","⟩",!1,1/0],set:["Braket","{","}",!1,1],Bra:["Macro","{\\left\\langle {#1} \\right\\vert}",1],Ket:["Macro","{\\left\\vert {#1} \\right\\rangle}",1],Braket:["Braket","⟨","⟩",!0,1/0],Set:["Braket","{","}",!0,1],ketbra:["Macro","{\\vert {#1} \\rangle\\langle {#2} \\vert}",2],Ketbra:["Macro","{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}",2],"|":"Bar"},o.default),new a.MacroMap("Braket-characters",{"|":"Bar"},o.default)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.base.BaseMethods.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexError.default},function(e,t,r){"use strict";r.r(t);var a=r(3),o=r(4),n=r(0),i=r(1);Object(a.combineWithMathJax)({_:{input:{tex:{braket:{BraketConfiguration:o,BraketItems:n,BraketMethods:i}}}}})}]);