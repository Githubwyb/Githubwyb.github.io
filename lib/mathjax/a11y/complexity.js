!function(i){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=i,r.c=o,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.components.global.isObject,e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,i){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__read||function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var o,r,n=i.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(i=n.return)&&i.call(n)}finally{if(r)throw r.error}}return s},l=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t},a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],o=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.ComplexityHandler=e.ComplexityMathDocumentMixin=e.ComplexityMathItemMixin=void 0;var c=i(7),p=i(2),u=i(3),h=i(5);function y(t,i){return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.complexity=function(t,e){void 0===e&&(e=!1),this.state()>=c.STATE.COMPLEXITY||(this.isEscaped||!t.options.enableComplexity&&!e||(this.enrich(t,!0),i(this.root)),this.state(c.STATE.COMPLEXITY))},e}(t)}function d(t){var e;return(e=function(s){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=s.apply(this,l(t))||this,o=i.constructor.ProcessBits;o.has("complexity")||o.allocate("complexity");var r=h.selectOptionsFromKeys(i.options,i.options.ComplexityVisitor.OPTIONS);i.complexityVisitor=new i.options.ComplexityVisitor(i.mmlFactory,r);var n=function(t){return i.complexityVisitor.visitTree(t)};return i.options.MathItem=y(i.options.MathItem,n),i}return r(t,s),t.prototype.complexity=function(){var t,e;if(!this.processed.isSet("complexity")){if(this.options.enableComplexity)try{for(var i=a(this.math),o=i.next();!o.done;o=i.next()){o.value.complexity(this)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.processed.set("complexity")}return this},t.prototype.state=function(t,e){return void 0===e&&(e=!1),s.prototype.state.call(this,t,e),t<c.STATE.COMPLEXITY&&this.processed.clear("complexity"),this},t}(t)).OPTIONS=n(n(n({},t.OPTIONS),u.ComplexityVisitor.OPTIONS),{enableComplexity:!0,ComplexityVisitor:u.ComplexityVisitor,renderActions:h.expandable(n(n({},t.OPTIONS.renderActions),{complexity:[c.STATE.COMPLEXITY]}))}),e}c.newState("COMPLEXITY",40),e.ComplexityMathItemMixin=y,e.ComplexityMathDocumentMixin=d,e.ComplexityHandler=function(t,e){return void 0===e&&(e=null),!t.documentClass.prototype.enrich&&e&&(t=p.EnrichHandler(t,e)),t.documentClass=d(t.documentClass),t}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EnrichedMathItemMixin=MathJax._.a11y["semantic-enrich"].EnrichedMathItemMixin,e.EnrichedMathDocumentMixin=MathJax._.a11y["semantic-enrich"].EnrichedMathDocumentMixin,e.EnrichHandler=MathJax._.a11y["semantic-enrich"].EnrichHandler},function(t,e,i){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],o=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.ComplexityVisitor=void 0;var n=i(8),s=i(4),c=i(5),l=function(l){function t(t,e){var i=l.call(this,t)||this;i.complexity={text:.5,token:.5,child:1,script:.8,sqrt:2,subsup:2,underover:2,fraction:2,enclose:2,action:2,phantom:0,xml:2,glyph:2};var o=i.constructor;return i.options=c.userOptions(c.defaultOptions({},o.OPTIONS),e),i.collapse=new i.options.Collapse(i),i.factory=t,i}return r(t,l),t.prototype.visitTree=function(t){l.prototype.visitTree.call(this,t,!0),this.options.makeCollapsible&&this.collapse.makeCollapse(t)},t.prototype.visitNode=function(t,e){if(!t.attributes.get("data-semantic-complexity"))return l.prototype.visitNode.call(this,t,e)},t.prototype.visitDefault=function(t,e){var i;if(t.isToken){var o=t.getText();i=this.complexity.text*o.length+this.complexity.token}else i=this.childrenComplexity(t);return this.setComplexity(t,i,e)},t.prototype.visitMfracNode=function(t,e){var i=this.childrenComplexity(t)*this.complexity.script+this.complexity.fraction;return this.setComplexity(t,i,e)},t.prototype.visitMsqrtNode=function(t,e){var i=this.childrenComplexity(t)+this.complexity.sqrt;return this.setComplexity(t,i,e)},t.prototype.visitMrootNode=function(t,e){var i=this.childrenComplexity(t)+this.complexity.sqrt-(1-this.complexity.script)*this.getComplexity(t.childNodes[1]);return this.setComplexity(t,i,e)},t.prototype.visitMphantomNode=function(t,e){return this.setComplexity(t,this.complexity.phantom,e)},t.prototype.visitMsNode=function(t,e){var i=(t.attributes.get("lquote")+t.getText()+t.attributes.get("rquote")).length*this.complexity.text;return this.setComplexity(t,i,e)},t.prototype.visitMsubsupNode=function(t,e){l.prototype.visitDefault.call(this,t,!0);var i=t.childNodes[t.sub],o=t.childNodes[t.sup],r=t.childNodes[t.base],n=Math.max(i?this.getComplexity(i):0,o?this.getComplexity(o):0)*this.complexity.script;return n+=this.complexity.child*((i?1:0)+(o?1:0)),n+=r?this.getComplexity(r)+this.complexity.child:0,n+=this.complexity.subsup,this.setComplexity(t,n,e)},t.prototype.visitMsubNode=function(t,e){return this.visitMsubsupNode(t,e)},t.prototype.visitMsupNode=function(t,e){return this.visitMsubsupNode(t,e)},t.prototype.visitMunderoverNode=function(t,e){l.prototype.visitDefault.call(this,t,!0);var i=t.childNodes[t.under],o=t.childNodes[t.over],r=t.childNodes[t.base],n=Math.max(i?this.getComplexity(i):0,o?this.getComplexity(o):0)*this.complexity.script;return r&&(n=Math.max(this.getComplexity(r),n)),n+=this.complexity.child*((i?1:0)+(o?1:0)+(r?1:0)),n+=this.complexity.underover,this.setComplexity(t,n,e)},t.prototype.visitMunderNode=function(t,e){return this.visitMunderoverNode(t,e)},t.prototype.visitMoverNode=function(t,e){return this.visitMunderoverNode(t,e)},t.prototype.visitMencloseNode=function(t,e){var i=this.childrenComplexity(t)+this.complexity.enclose;return this.setComplexity(t,i,e)},t.prototype.visitMactionNode=function(t,e){this.childrenComplexity(t);var i=this.getComplexity(t.selected);return this.setComplexity(t,i,e)},t.prototype.visitMsemanticsNode=function(t,e){var i=t.childNodes[0],o=0;return i&&(this.visitNode(i,!0),o=this.getComplexity(i)),this.setComplexity(t,o,e)},t.prototype.visitAnnotationNode=function(t,e){return this.setComplexity(t,this.complexity.xml,e)},t.prototype.visitAnnotation_xmlNode=function(t,e){return this.setComplexity(t,this.complexity.xml,e)},t.prototype.visitMglyphNode=function(t,e){return this.setComplexity(t,this.complexity.glyph,e)},t.prototype.getComplexity=function(t){var e=t.getProperty("collapsedComplexity");return null!=e?e:t.attributes.get("data-semantic-complexity")},t.prototype.setComplexity=function(t,e,i){return i&&(this.options.identifyCollapsible&&(e=this.collapse.check(t,e)),t.attributes.set("data-semantic-complexity",e)),e},t.prototype.childrenComplexity=function(t){var e,i;l.prototype.visitDefault.call(this,t,!0);var o=0;try{for(var r=a(t.childNodes),n=r.next();!n.done;n=r.next()){var s=n.value;o+=this.getComplexity(s)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}return t.childNodes.length>1&&(o+=t.childNodes.length*this.complexity.child),o},t.OPTIONS={identifyCollapsible:!0,makeCollapsible:!0,Collapse:s.Collapse},t}(n.MmlVisitor);e.ComplexityVisitor=l},function(t,e,i){"use strict";var a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],o=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.Collapse=void 0;var o=function(){function e(t){var r=this;this.cutoff={identifier:3,number:3,text:10,infixop:15,relseq:15,multirel:15,fenced:18,bigop:20,integral:20,fraction:12,sqrt:9,root:12,vector:15,matrix:15,cases:15,superscript:9,subscript:9,subsup:9,punctuated:{endpunct:e.NOCOLLAPSE,startpunct:e.NOCOLLAPSE,value:12}},this.marker={identifier:"x",number:"#",text:"...",appl:{"limit function":"lim",value:"f()"},fraction:"/",sqrt:"√",root:"√",superscript:"◽˙",subscript:"◽.",subsup:"◽:",vector:{binomial:"(:)",determinant:"|:|",value:"⟨:⟩"},matrix:{squarematrix:"[::]",rowvector:"⟨⋯⟩",columnvector:"⟨⋮⟩",determinant:"|::|",value:"(::)"},cases:"{:",infixop:{addition:"+",subtraction:"−",multiplication:"⋅",implicit:"⋅",value:"+"},punctuated:{text:"...",value:","}},this.collapse=new Map([["fenced",function(t,e){return(e=r.uncollapseChild(e,t,1))>r.cutoff.fenced&&"leftright"===t.attributes.get("data-semantic-role")&&(e=r.recordCollapse(t,e,r.getText(t.childNodes[0])+r.getText(t.childNodes[t.childNodes.length-1]))),e}],["appl",function(t,e){if(r.canUncollapse(t,2,2)){e=r.complexity.visitNode(t,!1);var i=r.marker.appl,o=i[t.attributes.get("data-semantic-role")]||i.value;e=r.recordCollapse(t,e,o)}return e}],["sqrt",function(t,e){return(e=r.uncollapseChild(e,t,0))>r.cutoff.sqrt&&(e=r.recordCollapse(t,e,r.marker.sqrt)),e}],["root",function(t,e){return(e=r.uncollapseChild(e,t,0,2))>r.cutoff.sqrt&&(e=r.recordCollapse(t,e,r.marker.sqrt)),e}],["enclose",function(t,e){if(1===r.splitAttribute(t,"children").length){var i=r.canUncollapse(t,1);if(i){var o=i.getProperty("collapse-marker");r.unrecordCollapse(i),e=r.recordCollapse(t,r.complexity.visitNode(t,!1),o)}}return e}],["bigop",function(t,e){if(e>r.cutoff.bigop||!t.isKind("mo")){var i=r.splitAttribute(t,"content").pop(),o=r.findChildText(t,i);e=r.recordCollapse(t,e,o)}return e}],["integral",function(t,e){if(e>r.cutoff.integral||!t.isKind("mo")){var i=r.splitAttribute(t,"content").pop(),o=r.findChildText(t,i);e=r.recordCollapse(t,e,o)}return e}],["relseq",function(t,e){if(e>r.cutoff.relseq){var i=r.splitAttribute(t,"content")[0],o=r.findChildText(t,i);e=r.recordCollapse(t,e,o)}return e}],["multirel",function(t,e){if(e>r.cutoff.relseq){var i=r.splitAttribute(t,"content")[0],o=r.findChildText(t,i)+"⋯";e=r.recordCollapse(t,e,o)}return e}],["superscript",function(t,e){return(e=r.uncollapseChild(e,t,0,2))>r.cutoff.superscript&&(e=r.recordCollapse(t,e,r.marker.superscript)),e}],["subscript",function(t,e){return(e=r.uncollapseChild(e,t,0,2))>r.cutoff.subscript&&(e=r.recordCollapse(t,e,r.marker.subscript)),e}],["subsup",function(t,e){return(e=r.uncollapseChild(e,t,0,3))>r.cutoff.subsup&&(e=r.recordCollapse(t,e,r.marker.subsup)),e}]]),this.idCount=0,this.complexity=t}return e.prototype.check=function(t,e){var i=t.attributes.get("data-semantic-type");return this.collapse.has(i)?this.collapse.get(i).call(this,t,e):this.cutoff.hasOwnProperty(i)?this.defaultCheck(t,e,i):e},e.prototype.defaultCheck=function(t,e,i){var o=t.attributes.get("data-semantic-role"),r=this.cutoff[i];if(e>("number"==typeof r?r:r[o]||r.value)){var n=this.marker[i]||"??",s="string"==typeof n?n:n[o]||n.value;e=this.recordCollapse(t,e,s)}return e},e.prototype.recordCollapse=function(t,e,i){return i="◂"+i+"▸",t.setProperty("collapse-marker",i),t.setProperty("collapse-complexity",e),i.length*this.complexity.complexity.text},e.prototype.unrecordCollapse=function(t){var e=t.getProperty("collapse-complexity");null!=e&&(t.attributes.set("data-semantic-complexity",e),t.removeProperty("collapse-complexity"),t.removeProperty("collapse-marker"))},e.prototype.canUncollapse=function(t,e,i){if(void 0===i&&(i=1),this.splitAttribute(t,"children").length===i){var o=1===t.childNodes.length&&t.childNodes[0].isInferred?t.childNodes[0]:t;if(o&&o.childNodes[e]){var r=o.childNodes[e];if(r.getProperty("collapse-marker"))return r}}return null},e.prototype.uncollapseChild=function(t,e,i,o){void 0===o&&(o=1);var r=this.canUncollapse(e,i,o);return r&&(this.unrecordCollapse(r),r.parent!==e&&r.parent.attributes.set("data-semantic-complexity",void 0),t=this.complexity.visitNode(e,!1)),t},e.prototype.splitAttribute=function(t,e){return(t.attributes.get("data-semantic-"+e)||"").split(/,/)},e.prototype.getText=function(t){var e=this;return t.isToken?t.getText():t.childNodes.map(function(t){return e.getText(t)}).join("")},e.prototype.findChildText=function(t,e){var i=this.findChild(t,e);return this.getText(i.coreMO()||i)},e.prototype.findChild=function(t,e){var i,o;if(!t||t.attributes.get("data-semantic-id")===e)return t;if(!t.isToken)try{for(var r=a(t.childNodes),n=r.next();!n.done;n=r.next()){var s=n.value,l=this.findChild(s,e);if(l)return l}}catch(t){i={error:t}}finally{try{n&&!n.done&&(o=r.return)&&o.call(r)}finally{if(i)throw i.error}}return null},e.prototype.makeCollapse=function(t){var e=[];t.walkTree(function(t){t.getProperty("collapse-marker")&&e.push(t)}),this.makeActions(e)},e.prototype.makeActions=function(t){var e,i;try{for(var o=a(t),r=o.next();!r.done;r=o.next()){var n=r.value;this.makeAction(n)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}},e.prototype.makeId=function(){return"mjx-collapse-"+this.idCount++},e.prototype.makeAction=function(t){t.isKind("math")&&(t=this.addMrow(t));var e=this.complexity.factory,i=t.getProperty("collapse-marker"),o=t.parent,r=e.create("maction",{actiontype:"toggle",selection:2,"data-collapsible":!0,id:this.makeId(),"data-semantic-complexity":t.attributes.get("data-semantic-complexity")},[e.create("mtext",{mathcolor:"blue"},[e.create("text").setText(i)])]);r.inheritAttributesFrom(t),t.attributes.set("data-semantic-complexity",t.getProperty("collapse-complexity")),t.removeProperty("collapse-marker"),t.removeProperty("collapse-complexity"),o.replaceChild(r,t),r.appendChild(t)},e.prototype.addMrow=function(t){var e,i,o=this.complexity.factory.create("mrow",null,t.childNodes[0].childNodes);t.childNodes[0].setChildren([o]);var r=t.attributes.getAllAttributes();try{for(var n=a(Object.keys(r)),s=n.next();!s.done;s=n.next()){var l=s.value;"data-semantic-"===l.substr(0,14)&&(o.attributes.set(l,r[l]),delete r[l])}}catch(t){e={error:t}}finally{try{s&&!s.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}return o.setProperty("collapse-marker",t.getProperty("collapse-marker")),o.setProperty("collapse-complexity",t.getProperty("collapse-complexity")),t.removeProperty("collapse-marker"),t.removeProperty("collapse-complexity"),o},e.NOCOLLAPSE=1e7,e}();e.Collapse=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sreReady=MathJax._.a11y.sre.sreReady},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.protoItem=MathJax._.core.MathItem.protoItem,e.AbstractMathItem=MathJax._.core.MathItem.AbstractMathItem,e.STATE=MathJax._.core.MathItem.STATE,e.newState=MathJax._.core.MathItem.newState},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MmlVisitor=MathJax._.core.MmlTree.MmlVisitor.MmlVisitor},function(t,e,i){"use strict";i.r(e);var o=i(0),r=i(1),n=i(4),s=i(3),l=i(2),a=i(6);Object(o.combineWithMathJax)({_:{a11y:{complexity_ts:r,complexity:{collapse:n,visitor:s},"semantic-enrich":l,sre:a}}}),MathJax.startup&&(MathJax.startup.extendHandler(function(t){return Object(r.ComplexityHandler)(t)}),Object(o.combineDefaults)(MathJax.config,"options",MathJax.config["a11y/complexity"]||{}))}]);