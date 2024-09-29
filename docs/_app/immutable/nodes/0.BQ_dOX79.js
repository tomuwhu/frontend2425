import{s as O,r as T,H as $,u as x,e as k,a as w,v as q,p as L,c as y,l as M,f as d,g as S,b as H,h as v,i as g,w as P,x as A,y as D,o as F,k as N,t as R,d as U,m as b}from"../chunks/scheduler.Gg1qObrg.js";import{S as V,i as Y,t as B,a as G}from"../chunks/index.BayaioMS.js";import{e as E}from"../chunks/each.D6YF6ztN.js";import{p as I}from"../chunks/stores.Bv8u0cl9.js";const J=!0,le=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"})),K=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,
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
.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}</style>`;function z(n,t,c){const a=n.slice();return a[5]=t[c],a}function C(n){let t,c=n[5].name+"",a,u;return{c(){t=k("a"),a=R(c),this.h()},l(r){t=y(r,"A",{class:!0,href:!0});var s=H(t);a=U(s,c),s.forEach(d),this.h()},h(){b(t,"class",u="menu "+(n[0]===n[5].href?"selected":"norm")),b(t,"href",n[5].href)},m(r,s){g(r,t,s),v(t,a)},p(r,s){s&1&&u!==(u="menu "+(r[0]===r[5].href?"selected":"norm"))&&b(t,"class",u)},d(r){r&&d(t)}}}function Q(n){let t,c,a,u=`a {
            all: unset;
            cursor: pointer;
        }
        a:hover {
            background-color: gray;
        }
        body {
            margin: 0px;
            background-color: #d5e4f3;
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
            background-color: #d5e4f3;
            color: black;
        }
        a.menu:hover {
            background-color: rgb(85, 107, 99);
        }
        menu {
            margin: 0px;
            background-color: black;
            text-align: center;
        }
        h1 {
            text-align: center;
            color: rgb(8, 92, 98);
            text-shadow: 1px 1px 3px gray;
            margin-top: 0px;
            font-size: 20px;
        }`,r,s,f,m,p=E(n[1]),o=[];for(let e=0;e<p.length;e+=1)o[e]=C(z(n,p,e));const j=n[4].default,i=T(j,n,n[3],null);return{c(){t=new $(!1),c=x(),a=k("style"),a.textContent=u,r=w(),s=k("menu");for(let e=0;e<o.length;e+=1)o[e].c();f=w(),i&&i.c(),this.h()},l(e){const h=q("svelte-ze0491",document.head);t=L(h,!1),c=x(),a=y(h,"STYLE",{"data-svelte-h":!0}),M(a)!=="svelte-5k6v9e"&&(a.textContent=u),h.forEach(d),r=S(e),s=y(e,"MENU",{});var l=H(s);for(let _=0;_<o.length;_+=1)o[_].l(l);l.forEach(d),f=S(e),i&&i.l(e),this.h()},h(){t.a=c},m(e,h){t.m(K,document.head),v(document.head,c),v(document.head,a),g(e,r,h),g(e,s,h);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(s,null);g(e,f,h),i&&i.m(e,h),m=!0},p(e,[h]){if(h&3){p=E(e[1]);let l;for(l=0;l<p.length;l+=1){const _=z(e,p,l);o[l]?o[l].p(_,h):(o[l]=C(_),o[l].c(),o[l].m(s,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=p.length}i&&i.p&&(!m||h&8)&&P(i,j,e,e[3],m?D(j,e[3],h,null):A(e[3]),null)},i(e){m||(B(i,e),m=!0)},o(e){G(i,e),m=!1},d(e){e&&(t.d(),d(r),d(s),d(f)),d(c),d(a),F(o,e),i&&i.d(e)}}}function W(n,t,c){let a,u;N(n,I,m=>c(2,u=m));let{$$slots:r={},$$scope:s}=t;const f=[{name:"Órai munka és tananyagok",href:"/frontend2425/"},{name:"Portfólió követelmények",href:"/frontend2425/portfolio"},{name:"Frontend tematika",href:"/frontend2425/tematika"},{name:"Új (Vite-Svelte) projekt létrehozása",href:"/frontend2425/createsvelte"}];return n.$$set=m=>{"$$scope"in m&&c(3,s=m.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&c(0,a=u.url.pathname)},[a,f,u,s,r]}class ne extends V{constructor(t){super(),Y(this,t,W,Q,O,{})}}export{ne as component,le as universal};
