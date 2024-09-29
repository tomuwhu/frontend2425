import{s as O,r as T,H as $,u as w,e as k,a as x,v as q,p as z,c as y,l as L,f as d,g as S,b as M,h as v,i as j,w as P,x as A,y as D,o as F,k as N,t as R,d as U,m as b}from"../chunks/scheduler.Gg1qObrg.js";import{S as V,i as Y,t as B,a as G}from"../chunks/index.BayaioMS.js";import{e as E}from"../chunks/each.D6YF6ztN.js";import{p as I}from"../chunks/stores.C4n15HBm.js";const J=!0,le=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"})),K=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,
.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,
.hljs-keyword,
.hljs-formula{color:#c678dd}.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string{color:#98c379}.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number{color:#d19a66}.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title{color:#61aeee}.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}</style>`;function C(a,t,c){const s=a.slice();return s[5]=t[c],s}function H(a){let t,c=a[5].name+"",s,u;return{c(){t=k("a"),s=R(c),this.h()},l(r){t=y(r,"A",{class:!0,href:!0});var n=M(t);s=U(n,c),n.forEach(d),this.h()},h(){b(t,"class",u="menu "+(a[0]===a[5].href?"selected":"norm")),b(t,"href",a[5].href)},m(r,n){j(r,t,n),v(t,s)},p(r,n){n&1&&u!==(u="menu "+(r[0]===r[5].href?"selected":"norm"))&&b(t,"class",u)},d(r){r&&d(t)}}}function Q(a){let t,c,s,u=`body {
            margin: 0px;
            background-color: blackMetal;
        }
        a.menu {
            padding: 0px;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 0px;
            white-space: nowrap;
            color: white;
        }
        a.menu.selected {
            background-color: white;
            color: black;
        }
        a.menu:hover {
            background-color: rgb(85, 107, 99);
        }
        menu {
            margin: 0px;
            background-color: black;
            text-align: center;
        }`,r,n,f,m,_=E(a[1]),o=[];for(let e=0;e<_.length;e+=1)o[e]=H(C(a,_,e));const g=a[4].default,i=T(g,a,a[3],null);return{c(){t=new $(!1),c=w(),s=k("style"),s.textContent=u,r=x(),n=k("menu");for(let e=0;e<o.length;e+=1)o[e].c();f=x(),i&&i.c(),this.h()},l(e){const h=q("svelte-1udrc4r",document.head);t=z(h,!1),c=w(),s=y(h,"STYLE",{"data-svelte-h":!0}),L(s)!=="svelte-h7r2yw"&&(s.textContent=u),h.forEach(d),r=S(e),n=y(e,"MENU",{});var l=M(n);for(let p=0;p<o.length;p+=1)o[p].l(l);l.forEach(d),f=S(e),i&&i.l(e),this.h()},h(){t.a=c},m(e,h){t.m(K,document.head),v(document.head,c),v(document.head,s),j(e,r,h),j(e,n,h);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(n,null);j(e,f,h),i&&i.m(e,h),m=!0},p(e,[h]){if(h&3){_=E(e[1]);let l;for(l=0;l<_.length;l+=1){const p=C(e,_,l);o[l]?o[l].p(p,h):(o[l]=H(p),o[l].c(),o[l].m(n,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=_.length}i&&i.p&&(!m||h&8)&&P(i,g,e,e[3],m?D(g,e[3],h,null):A(e[3]),null)},i(e){m||(B(i,e),m=!0)},o(e){G(i,e),m=!1},d(e){e&&(t.d(),d(r),d(n),d(f)),d(c),d(s),F(o,e),i&&i.d(e)}}}function W(a,t,c){let s,u;N(a,I,m=>c(2,u=m));let{$$slots:r={},$$scope:n}=t;const f=[{name:"Órai munka és tananyagok",href:"/"},{name:"Portfólió követelmények",href:"/portfolio"},{name:"Frontend tematika",href:"/tematika"},{name:"Új (Vite-Svelte) projekt létrehozása",href:"/createsvelte"}];return a.$$set=m=>{"$$scope"in m&&c(3,n=m.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&c(0,s=u.url.pathname)},[s,f,u,n,r]}class ae extends V{constructor(t){super(),Y(this,t,W,Q,O,{})}}export{ae as component,le as universal};
