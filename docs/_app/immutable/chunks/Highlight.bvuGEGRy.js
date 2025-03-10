import{s as Le,G as j,e as Ee,c as Me,b as we,f as G,I as U,J as Oe,i as re,h as bt,n as ye,K as V,L as ve,t as Et,d as Mt,j as wt,H as Ot,v as Re,x as yt,l as Rt,u as St,o as Nt,p as xt,_ as kt,C as At}from"./scheduler.C0ZLY-_k.js";import{S as Be,i as me,t as He,a as je,c as Tt,b as It,m as Dt,d as Ct}from"./index.BslVKfKp.js";function Pe(e,t){const n={},o={},u={$$scope:1};let c=e.length;for(;c--;){const i=e[c],s=t[c];if(s){for(const a in i)a in s||(o[a]=1);for(const a in s)u[a]||(n[a]=s[a],u[a]=1);e[c]=s}else for(const a in i)u[a]=1}for(const i in o)i in n||(n[i]=void 0);return n}function Lt(e){return typeof e=="object"&&e!==null?e:{}}function vt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ue(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],o=typeof n;(o==="object"||o==="function")&&!Object.isFrozen(n)&&Ue(n)}),e}class Se{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ge(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function L(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach(function(o){for(const u in o)n[u]=o[u]}),n}const Bt="</span>",Ne=e=>!!e.scope,mt=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((o,u)=>`${o}${"_".repeat(u+1)}`)].join(" ")}return`${t}${e}`};class Ht{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Ge(t)}openNode(t){if(!Ne(t))return;const n=mt(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Ne(t)&&(this.buffer+=Bt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const xe=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class ae{constructor(){this.rootNode=xe(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=xe({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(o=>this._walk(t,o)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{ae._collapse(n)}))}}class jt extends ae{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const o=t.root;n&&(o.scope=`language:${n}`),this.add(o)}toHTML(){return new Ht(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function W(e){return e?typeof e=="string"?e:e.source:null}function We(e){return m("(?=",e,")")}function Pt(e){return m("(?:",e,")*")}function Ut(e){return m("(?:",e,")?")}function m(...e){return e.map(n=>W(n)).join("")}function Gt(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function ce(...e){return"("+(Gt(e).capture?"":"?:")+e.map(o=>W(o)).join("|")+")"}function Ke(e){return new RegExp(e.toString()+"|").exec("").length-1}function Wt(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Kt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function oe(e,{joinWith:t}){let n=0;return e.map(o=>{n+=1;const u=n;let c=W(o),i="";for(;c.length>0;){const s=Kt.exec(c);if(!s){i+=c;break}i+=c.substring(0,s.index),c=c.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?i+="\\"+String(Number(s[1])+u):(i+=s[0],s[0]==="("&&n++)}return i}).map(o=>`(${o})`).join(t)}const Ft=/\b\B/,Fe="[a-zA-Z]\\w*",le="[a-zA-Z_]\\w*",ze="\\b\\d+(\\.\\d+)?",Xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ye="\\b(0b[01]+)",zt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Xt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=m(t,/.*\b/,e.binary,/\b.*/)),L({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,o)=>{n.index!==0&&o.ignoreMatch()}},e)},K={begin:"\\\\[\\s\\S]",relevance:0},Yt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[K]},Zt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[K]},Jt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Q=function(e,t,n={}){const o=L({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const u=ce("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:m(/[ ]+/,"(",u,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},Vt=Q("//","$"),qt=Q("/\\*","\\*/"),Qt=Q("#","$"),$t={scope:"number",begin:ze,relevance:0},en={scope:"number",begin:Xe,relevance:0},tn={scope:"number",begin:Ye,relevance:0},nn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[K,{begin:/\[/,end:/\]/,relevance:0,contains:[K]}]},sn={scope:"title",begin:Fe,relevance:0},rn={scope:"title",begin:le,relevance:0},an={begin:"\\.\\s*"+le,relevance:0},cn=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var J=Object.freeze({__proto__:null,APOS_STRING_MODE:Yt,BACKSLASH_ESCAPE:K,BINARY_NUMBER_MODE:tn,BINARY_NUMBER_RE:Ye,COMMENT:Q,C_BLOCK_COMMENT_MODE:qt,C_LINE_COMMENT_MODE:Vt,C_NUMBER_MODE:en,C_NUMBER_RE:Xe,END_SAME_AS_BEGIN:cn,HASH_COMMENT_MODE:Qt,IDENT_RE:Fe,MATCH_NOTHING_RE:Ft,METHOD_GUARD:an,NUMBER_MODE:$t,NUMBER_RE:ze,PHRASAL_WORDS_MODE:Jt,QUOTE_STRING_MODE:Zt,REGEXP_MODE:nn,RE_STARTERS_RE:zt,SHEBANG:Xt,TITLE_MODE:sn,UNDERSCORE_IDENT_RE:le,UNDERSCORE_TITLE_MODE:rn});function on(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function ln(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function un(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=on,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function gn(e,t){Array.isArray(e.illegal)&&(e.illegal=ce(...e.illegal))}function fn(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function hn(e,t){e.relevance===void 0&&(e.relevance=1)}const dn=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=n.keywords,e.begin=m(n.beforeMatch,We(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},pn=["of","and","for","in","not","or","if","then","parent","list","value"],_n="keyword";function Ze(e,t,n=_n){const o=Object.create(null);return typeof e=="string"?u(n,e.split(" ")):Array.isArray(e)?u(n,e):Object.keys(e).forEach(function(c){Object.assign(o,Ze(e[c],t,c))}),o;function u(c,i){t&&(i=i.map(s=>s.toLowerCase())),i.forEach(function(s){const a=s.split("|");o[a[0]]=[c,bn(a[0],a[1])]})}}function bn(e,t){return t?Number(t):En(e)?0:1}function En(e){return pn.includes(e.toLowerCase())}const ke={},B=e=>{console.error(e)},Ae=(e,...t)=>{console.log(`WARN: ${e}`,...t)},H=(e,t)=>{ke[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ke[`${e}/${t}`]=!0)},q=new Error;function Je(e,t,{key:n}){let o=0;const u=e[n],c={},i={};for(let s=1;s<=t.length;s++)i[s+o]=u[s],c[s+o]=!0,o+=Ke(t[s-1]);e[n]=i,e[n]._emit=c,e[n]._multi=!0}function Mn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw B("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),q;if(typeof e.beginScope!="object"||e.beginScope===null)throw B("beginScope must be object"),q;Je(e,e.begin,{key:"beginScope"}),e.begin=oe(e.begin,{joinWith:""})}}function wn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw B("skip, excludeEnd, returnEnd not compatible with endScope: {}"),q;if(typeof e.endScope!="object"||e.endScope===null)throw B("endScope must be object"),q;Je(e,e.end,{key:"endScope"}),e.end=oe(e.end,{joinWith:""})}}function On(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function yn(e){On(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Mn(e),wn(e)}function Rn(e){function t(i,s){return new RegExp(W(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,s]),this.matchAt+=Ke(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(a=>a[1]);this.matcherRe=t(oe(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(s);if(!a)return null;const d=a.findIndex((k,S)=>S>0&&k!==void 0),M=this.matchIndexes[d];return a.splice(0,d),Object.assign(a,M)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const a=new n;return this.rules.slice(s).forEach(([d,M])=>a.addRule(d,M)),a.compile(),this.multiRegexes[s]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,a){this.rules.push([s,a]),a.type==="begin"&&this.count++}exec(s){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let d=a.exec(s);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const M=this.getMatcher(0);M.lastIndex=this.lastIndex+1,d=M.exec(s)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function u(i){const s=new o;return i.contains.forEach(a=>s.addRule(a.begin,{rule:a,type:"begin"})),i.terminatorEnd&&s.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&s.addRule(i.illegal,{type:"illegal"}),s}function c(i,s){const a=i;if(i.isCompiled)return a;[ln,fn,yn,dn].forEach(M=>M(i,s)),e.compilerExtensions.forEach(M=>M(i,s)),i.__beforeBegin=null,[un,gn,hn].forEach(M=>M(i,s)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=Ze(i.keywords,e.case_insensitive)),a.keywordPatternRe=t(d,!0),s&&(i.begin||(i.begin=/\B|\b/),a.beginRe=t(a.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(a.endRe=t(a.end)),a.terminatorEnd=W(a.end)||"",i.endsWithParent&&s.terminatorEnd&&(a.terminatorEnd+=(i.end?"|":"")+s.terminatorEnd)),i.illegal&&(a.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(M){return Sn(M==="self"?i:M)})),i.contains.forEach(function(M){c(M,a)}),i.starts&&c(i.starts,s),a.matcher=u(a),a}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=L(e.classNameAliases||{}),c(e)}function Ve(e){return e?e.endsWithParent||Ve(e.starts):!1}function Sn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return L(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Ve(e)?L(e,{starts:e.starts?L(e.starts):null}):Object.isFrozen(e)?L(e):e}var Nn="11.10.0";class xn extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const se=Ge,Te=L,Ie=Symbol("nomatch"),kn=7,qe=function(e){const t=Object.create(null),n=Object.create(null),o=[];let u=!0;const c="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:jt};function a(r){return s.noHighlightRe.test(r)}function d(r){let f=r.className+" ";f+=r.parentNode?r.parentNode.className:"";const _=s.languageDetectRe.exec(f);if(_){const E=D(_[1]);return E||(Ae(c.replace("{}",_[1])),Ae("Falling back to no-highlight mode for this block.",r)),E?_[1]:"no-highlight"}return f.split(/\s+/).find(E=>a(E)||D(E))}function M(r,f,_){let E="",O="";typeof f=="object"?(E=r,_=f.ignoreIllegals,O=f.language):(H("10.7.0","highlight(lang, code, ...args) has been deprecated."),H("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),O=r,E=f),_===void 0&&(_=!0);const x={code:E,language:O};z("before:highlight",x);const C=x.result?x.result:k(x.language,x.code,_);return C.code=x.code,z("after:highlight",C),C}function k(r,f,_,E){const O=Object.create(null);function x(l,g){return l.keywords[g]}function C(){if(!h.keywords){y.addText(w);return}let l=0;h.keywordPatternRe.lastIndex=0;let g=h.keywordPatternRe.exec(w),p="";for(;g;){p+=w.substring(l,g.index);const b=T.case_insensitive?g[0].toLowerCase():g[0],R=x(h,b);if(R){const[I,pt]=R;if(y.addText(p),p="",O[b]=(O[b]||0)+1,O[b]<=kn&&(Z+=pt),I.startsWith("_"))p+=g[0];else{const _t=T.classNameAliases[I]||I;A(g[0],_t)}}else p+=g[0];l=h.keywordPatternRe.lastIndex,g=h.keywordPatternRe.exec(w)}p+=w.substring(l),y.addText(p)}function X(){if(w==="")return;let l=null;if(typeof h.subLanguage=="string"){if(!t[h.subLanguage]){y.addText(w);return}l=k(h.subLanguage,w,!0,be[h.subLanguage]),be[h.subLanguage]=l._top}else l=$(w,h.subLanguage.length?h.subLanguage:null);h.relevance>0&&(Z+=l.relevance),y.__addSublanguage(l._emitter,l.language)}function N(){h.subLanguage!=null?X():C(),w=""}function A(l,g){l!==""&&(y.startScope(g),y.addText(l),y.endScope())}function he(l,g){let p=1;const b=g.length-1;for(;p<=b;){if(!l._emit[p]){p++;continue}const R=T.classNameAliases[l[p]]||l[p],I=g[p];R?A(I,R):(w=I,C(),w=""),p++}}function de(l,g){return l.scope&&typeof l.scope=="string"&&y.openNode(T.classNameAliases[l.scope]||l.scope),l.beginScope&&(l.beginScope._wrap?(A(w,T.classNameAliases[l.beginScope._wrap]||l.beginScope._wrap),w=""):l.beginScope._multi&&(he(l.beginScope,g),w="")),h=Object.create(l,{parent:{value:h}}),h}function pe(l,g,p){let b=Wt(l.endRe,p);if(b){if(l["on:end"]){const R=new Se(l);l["on:end"](g,R),R.isMatchIgnored&&(b=!1)}if(b){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return pe(l.parent,g,p)}function ut(l){return h.matcher.regexIndex===0?(w+=l[0],1):(ie=!0,0)}function gt(l){const g=l[0],p=l.rule,b=new Se(p),R=[p.__beforeBegin,p["on:begin"]];for(const I of R)if(I&&(I(l,b),b.isMatchIgnored))return ut(g);return p.skip?w+=g:(p.excludeBegin&&(w+=g),N(),!p.returnBegin&&!p.excludeBegin&&(w=g)),de(p,l),p.returnBegin?0:g.length}function ft(l){const g=l[0],p=f.substring(l.index),b=pe(h,l,p);if(!b)return Ie;const R=h;h.endScope&&h.endScope._wrap?(N(),A(g,h.endScope._wrap)):h.endScope&&h.endScope._multi?(N(),he(h.endScope,l)):R.skip?w+=g:(R.returnEnd||R.excludeEnd||(w+=g),N(),R.excludeEnd&&(w=g));do h.scope&&y.closeNode(),!h.skip&&!h.subLanguage&&(Z+=h.relevance),h=h.parent;while(h!==b.parent);return b.starts&&de(b.starts,l),R.returnEnd?0:g.length}function ht(){const l=[];for(let g=h;g!==T;g=g.parent)g.scope&&l.unshift(g.scope);l.forEach(g=>y.openNode(g))}let Y={};function _e(l,g){const p=g&&g[0];if(w+=l,p==null)return N(),0;if(Y.type==="begin"&&g.type==="end"&&Y.index===g.index&&p===""){if(w+=f.slice(g.index,g.index+1),!u){const b=new Error(`0 width match regex (${r})`);throw b.languageName=r,b.badRule=Y.rule,b}return 1}if(Y=g,g.type==="begin")return gt(g);if(g.type==="illegal"&&!_){const b=new Error('Illegal lexeme "'+p+'" for mode "'+(h.scope||"<unnamed>")+'"');throw b.mode=h,b}else if(g.type==="end"){const b=ft(g);if(b!==Ie)return b}if(g.type==="illegal"&&p==="")return 1;if(ne>1e5&&ne>g.index*3)throw new Error("potential infinite loop, way more iterations than matches");return w+=p,p.length}const T=D(r);if(!T)throw B(c.replace("{}",r)),new Error('Unknown language: "'+r+'"');const dt=Rn(T);let te="",h=E||dt;const be={},y=new s.__emitter(s);ht();let w="",Z=0,v=0,ne=0,ie=!1;try{if(T.__emitTokens)T.__emitTokens(f,y);else{for(h.matcher.considerAll();;){ne++,ie?ie=!1:h.matcher.considerAll(),h.matcher.lastIndex=v;const l=h.matcher.exec(f);if(!l)break;const g=f.substring(v,l.index),p=_e(g,l);v=l.index+p}_e(f.substring(v))}return y.finalize(),te=y.toHTML(),{language:r,value:te,relevance:Z,illegal:!1,_emitter:y,_top:h}}catch(l){if(l.message&&l.message.includes("Illegal"))return{language:r,value:se(f),illegal:!0,relevance:0,_illegalBy:{message:l.message,index:v,context:f.slice(v-100,v+100),mode:l.mode,resultSoFar:te},_emitter:y};if(u)return{language:r,value:se(f),illegal:!1,relevance:0,errorRaised:l,_emitter:y,_top:h};throw l}}function S(r){const f={value:se(r),illegal:!1,relevance:0,_top:i,_emitter:new s.__emitter(s)};return f._emitter.addText(r),f}function $(r,f){f=f||s.languages||Object.keys(t);const _=S(r),E=f.filter(D).filter(fe).map(N=>k(N,r,!1));E.unshift(_);const O=E.sort((N,A)=>{if(N.relevance!==A.relevance)return A.relevance-N.relevance;if(N.language&&A.language){if(D(N.language).supersetOf===A.language)return 1;if(D(A.language).supersetOf===N.language)return-1}return 0}),[x,C]=O,X=x;return X.secondBest=C,X}function Qe(r,f,_){const E=f&&n[f]||_;r.classList.add("hljs"),r.classList.add(`language-${E}`)}function ee(r){let f=null;const _=d(r);if(a(_))return;if(z("before:highlightElement",{el:r,language:_}),r.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",r);return}if(r.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(r)),s.throwUnescapedHTML))throw new xn("One of your code blocks includes unescaped HTML.",r.innerHTML);f=r;const E=f.textContent,O=_?M(E,{language:_,ignoreIllegals:!0}):$(E);r.innerHTML=O.value,r.dataset.highlighted="yes",Qe(r,_,O.language),r.result={language:O.language,re:O.relevance,relevance:O.relevance},O.secondBest&&(r.secondBest={language:O.secondBest.language,relevance:O.secondBest.relevance}),z("after:highlightElement",{el:r,result:O,text:E})}function $e(r){s=Te(s,r)}const et=()=>{F(),H("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function tt(){F(),H("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ue=!1;function F(){if(document.readyState==="loading"){ue=!0;return}document.querySelectorAll(s.cssSelector).forEach(ee)}function nt(){ue&&F()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",nt,!1);function it(r,f){let _=null;try{_=f(e)}catch(E){if(B("Language definition for '{}' could not be registered.".replace("{}",r)),u)B(E);else throw E;_=i}_.name||(_.name=r),t[r]=_,_.rawDefinition=f.bind(null,e),_.aliases&&ge(_.aliases,{languageName:r})}function st(r){delete t[r];for(const f of Object.keys(n))n[f]===r&&delete n[f]}function rt(){return Object.keys(t)}function D(r){return r=(r||"").toLowerCase(),t[r]||t[n[r]]}function ge(r,{languageName:f}){typeof r=="string"&&(r=[r]),r.forEach(_=>{n[_.toLowerCase()]=f})}function fe(r){const f=D(r);return f&&!f.disableAutodetect}function at(r){r["before:highlightBlock"]&&!r["before:highlightElement"]&&(r["before:highlightElement"]=f=>{r["before:highlightBlock"](Object.assign({block:f.el},f))}),r["after:highlightBlock"]&&!r["after:highlightElement"]&&(r["after:highlightElement"]=f=>{r["after:highlightBlock"](Object.assign({block:f.el},f))})}function ct(r){at(r),o.push(r)}function ot(r){const f=o.indexOf(r);f!==-1&&o.splice(f,1)}function z(r,f){const _=r;o.forEach(function(E){E[_]&&E[_](f)})}function lt(r){return H("10.7.0","highlightBlock will be removed entirely in v12.0"),H("10.7.0","Please use highlightElement now."),ee(r)}Object.assign(e,{highlight:M,highlightAuto:$,highlightAll:F,highlightElement:ee,highlightBlock:lt,configure:$e,initHighlighting:et,initHighlightingOnLoad:tt,registerLanguage:it,unregisterLanguage:st,listLanguages:rt,getLanguage:D,registerAliases:ge,autoDetection:fe,inherit:Te,addPlugin:ct,removePlugin:ot}),e.debugMode=function(){u=!1},e.safeMode=function(){u=!0},e.versionString=Nn,e.regex={concat:m,lookahead:We,either:ce,optional:Ut,anyNumberOfTimes:Pt};for(const r in J)typeof J[r]=="object"&&Ue(J[r]);return Object.assign(e,J),e},P=qe({});P.newInstance=()=>qe({});var An=P;P.HighlightJS=P;P.default=P;const De=vt(An);function Tn(e){let t;return{c(){t=Et(e[0])},l(n){t=Mt(n,e[0])},m(n,o){re(n,t,o)},p(n,o){o&1&&wt(t,n[0])},d(n){n&&G(t)}}}function In(e){let t,n;return{c(){t=new Ot(!1),n=Re(),this.h()},l(o){t=yt(o,!1),n=Re(),this.h()},h(){t.a=n},m(o,u){t.m(e[1],o,u),re(o,n,u)},p(o,u){u&2&&t.p(o[1])},d(o){o&&(G(n),t.d())}}}function Dn(e){let t,n;function o(a,d){return a[1]?In:Tn}let u=o(e),c=u(e),i=[{"data-language":e[2]},e[4]],s={};for(let a=0;a<i.length;a+=1)s=j(s,i[a]);return{c(){t=Ee("pre"),n=Ee("code"),c.c(),this.h()},l(a){t=Me(a,"PRE",{"data-language":!0});var d=we(t);n=Me(d,"CODE",{});var M=we(n);c.l(M),M.forEach(G),d.forEach(G),this.h()},h(){U(n,"hljs",!0),Oe(t,s),U(t,"langtag",e[3]),U(t,"svelte-1w9vok",!0)},m(a,d){re(a,t,d),bt(t,n),c.m(n,null)},p(a,[d]){u===(u=o(a))&&c?c.p(a,d):(c.d(1),c=u(a),c&&(c.c(),c.m(n,null))),Oe(t,s=Pe(i,[d&4&&{"data-language":a[2]},d&16&&a[4]])),U(t,"langtag",a[3]),U(t,"svelte-1w9vok",!0)},i:ye,o:ye,d(a){a&&G(t),c.d()}}}function Cn(e,t,n){const o=["code","highlighted","languageName","langtag"];let u=V(t,o),{code:c}=t,{highlighted:i}=t,{languageName:s="plaintext"}=t,{langtag:a=!1}=t;return e.$$set=d=>{t=j(j({},t),ve(d)),n(4,u=V(t,o)),"code"in d&&n(0,c=d.code),"highlighted"in d&&n(1,i=d.highlighted),"languageName"in d&&n(2,s=d.languageName),"langtag"in d&&n(3,a=d.langtag)},[c,i,s,a,u]}class Ln extends Be{constructor(t){super(),me(this,t,Cn,Dn,Le,{code:0,highlighted:1,languageName:2,langtag:3})}}const vn=e=>({highlighted:e&8}),Ce=e=>({highlighted:e[3]});function Bn(e){let t,n;const o=[e[4],{languageName:e[0].name},{langtag:e[2]},{highlighted:e[3]},{code:e[1]}];let u={};for(let c=0;c<o.length;c+=1)u=j(u,o[c]);return t=new Ln({props:u}),{c(){Tt(t.$$.fragment)},l(c){It(t.$$.fragment,c)},m(c,i){Dt(t,c,i),n=!0},p(c,i){const s=i&31?Pe(o,[i&16&&Lt(c[4]),i&1&&{languageName:c[0].name},i&4&&{langtag:c[2]},i&8&&{highlighted:c[3]},i&2&&{code:c[1]}]):{};t.$set(s)},i(c){n||(He(t.$$.fragment,c),n=!0)},o(c){je(t.$$.fragment,c),n=!1},d(c){Ct(t,c)}}}function mn(e){let t;const n=e[6].default,o=Rt(n,e,e[5],Ce),u=o||Bn(e);return{c(){u&&u.c()},l(c){u&&u.l(c)},m(c,i){u&&u.m(c,i),t=!0},p(c,[i]){o?o.p&&(!t||i&40)&&St(o,n,c,c[5],t?xt(n,c[5],i,vn):Nt(c[5]),Ce):u&&u.p&&(!t||i&31)&&u.p(c,t?i:-1)},i(c){t||(He(u,c),t=!0)},o(c){je(u,c),t=!1},d(c){u&&u.d(c)}}}function Hn(e,t,n){const o=["language","code","langtag"];let u=V(t,o),{$$slots:c={},$$scope:i}=t,{language:s}=t,{code:a}=t,{langtag:d=!1}=t;const M=kt();let k="";return At(()=>{k&&M("highlight",{highlighted:k})}),e.$$set=S=>{t=j(j({},t),ve(S)),n(4,u=V(t,o)),"language"in S&&n(0,s=S.language),"code"in S&&n(1,a=S.code),"langtag"in S&&n(2,d=S.langtag),"$$scope"in S&&n(5,i=S.$$scope)},e.$$.update=()=>{e.$$.dirty&3&&(De.registerLanguage(s.name,s.register),n(3,k=De.highlight(a,{language:s.name}).value))},[s,a,d,k,u,i,c]}class Un extends Be{constructor(t){super(),me(this,t,Hn,mn,Le,{language:0,code:1,langtag:2})}}export{Un as H,Pe as g};
