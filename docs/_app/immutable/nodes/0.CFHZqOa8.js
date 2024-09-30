import{s as L,l as M,H as P,x as S,e as j,a as k,y as z,v as O,c as b,r as H,f as m,g as v,b as q,h as w,i as g,u as $,o as A,p as N,q as D,k as F,t as R,d as U,m as x}from"../chunks/scheduler.Bton-jdO.js";import{S as Y,i as B,t as G,a as I}from"../chunks/index.Bg754y_a.js";import{e as T}from"../chunks/each.D6YF6ztN.js";import{p as J}from"../chunks/stores.DgdSJ_2o.js";const K=!0,le=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"})),Q=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,
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
.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}</style>`;function C(a,n,c){const o=a.slice();return o[5]=n[c],o}function E(a){let n,c="",o,r,f=a[5].name+"",h,p;return{c(){n=j("span"),n.innerHTML=c,o=k(),r=j("a"),h=R(f),this.h()},l(t){n=b(t,"SPAN",{"data-svelte-h":!0}),H(n)!=="svelte-1qufua2"&&(n.innerHTML=c),o=v(t),r=b(t,"A",{class:!0,href:!0});var i=q(r);h=U(i,f),i.forEach(m),this.h()},h(){x(r,"class",p="menu "+(a[0].includes(a[5].href)?"selected":"norm")),x(r,"href",a[5].href)},m(t,i){g(t,n,i),g(t,o,i),g(t,r,i),w(r,h)},p(t,i){i&1&&p!==(p="menu "+(t[0].includes(t[5].href)?"selected":"norm"))&&x(r,"class",p)},d(t){t&&(m(n),m(o),m(r))}}}function V(a){let n,c,o,r=`a {
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
            padding-left: 20px;
            padding-right: 20px;
            margin-bottom: 0px;
            white-space: nowrap;
            color: white;
            padding-top: 5px;
            padding-bottom: 5px;
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
            padding-top: 5px;
            padding-bottom: 5px;
        }
        h1 {
            text-align: center;
            color: rgb(8, 92, 98);
            text-shadow: 1px 1px 3px gray;
            margin-top: 0px;
            font-size: 20px;
        }
        span {
            font-size: 10px;
            color: white;
        }`,f,h,p,t,i=T(a[1]),s=[];for(let e=0;e<i.length;e+=1)s[e]=E(C(a,i,e));const y=a[4].default,d=M(y,a,a[3],null);return{c(){n=new P(!1),c=S(),o=j("style"),o.textContent=r,f=k(),h=j("menu");for(let e=0;e<s.length;e+=1)s[e].c();p=k(),d&&d.c(),this.h()},l(e){const u=z("svelte-18rx77f",document.head);n=O(u,!1),c=S(),o=b(u,"STYLE",{"data-svelte-h":!0}),H(o)!=="svelte-15eajw8"&&(o.textContent=r),u.forEach(m),f=v(e),h=b(e,"MENU",{});var l=q(h);for(let _=0;_<s.length;_+=1)s[_].l(l);l.forEach(m),p=v(e),d&&d.l(e),this.h()},h(){n.a=c},m(e,u){n.m(Q,document.head),w(document.head,c),w(document.head,o),g(e,f,u),g(e,h,u);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(h,null);g(e,p,u),d&&d.m(e,u),t=!0},p(e,[u]){if(u&3){i=T(e[1]);let l;for(l=0;l<i.length;l+=1){const _=C(e,i,l);s[l]?s[l].p(_,u):(s[l]=E(_),s[l].c(),s[l].m(h,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}d&&d.p&&(!t||u&8)&&$(d,y,e,e[3],t?N(y,e[3],u,null):A(e[3]),null)},i(e){t||(G(d,e),t=!0)},o(e){I(d,e),t=!1},d(e){e&&(n.d(),m(f),m(h),m(p)),m(c),m(o),D(s,e),d&&d.d(e)}}}function W(a,n,c){let o,r;F(a,J,t=>c(2,r=t));let{$$slots:f={},$$scope:h}=n;const p=[{name:"Példaprogramok",href:"/frontend2425/peldaprog"},{name:"Tananyag",href:"/frontend2425/sveltetut/new_proj"},{name:"Portfólió követelmények",href:"/frontend2425/portfolio"},{name:"Frontend tematika",href:"/frontend2425/tematika"}];return a.$$set=t=>{"$$scope"in t&&c(3,h=t.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&c(0,o=r.url.pathname)},[o,p,r,h,f]}class ne extends Y{constructor(n){super(),B(this,n,W,V,L,{})}}export{ne as component,le as universal};
