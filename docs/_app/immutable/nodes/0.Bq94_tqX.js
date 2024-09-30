import{s as H,l as O,H as P,x as v,e as y,a as w,y as $,v as z,c as k,r as L,f as m,g as E,b as q,h as x,i as g,u as M,o as A,p as D,q as F,k as N,t as R,d as U,m as b}from"../chunks/scheduler.Bton-jdO.js";import{S as Y,i as B,t as G,a as I}from"../chunks/index.Bg754y_a.js";import{e as S}from"../chunks/each.D6YF6ztN.js";import{p as J}from"../chunks/stores.CCL0dBcW.js";const K=!0,le=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"})),Q=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,
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
.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}</style>`;function C(n,t,c){const a=n.slice();return a[5]=t[c],a}function T(n){let t,c=n[5].name+"",a,d;return{c(){t=y("a"),a=R(c),this.h()},l(r){t=k(r,"A",{class:!0,href:!0});var o=q(t);a=U(o,c),o.forEach(m),this.h()},h(){b(t,"class",d="menu "+(n[0].includes(n[5].href)?"selected":"norm")),b(t,"href",n[5].href)},m(r,o){g(r,t,o),x(t,a)},p(r,o){o&1&&d!==(d="menu "+(r[0].includes(r[5].href)?"selected":"norm"))&&b(t,"class",d)},d(r){r&&m(t)}}}function V(n){let t,c,a,d=`a {
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
        }`,r,o,p,u,f=S(n[1]),s=[];for(let e=0;e<f.length;e+=1)s[e]=T(C(n,f,e));const j=n[4].default,i=O(j,n,n[3],null);return{c(){t=new P(!1),c=v(),a=y("style"),a.textContent=d,r=w(),o=y("menu");for(let e=0;e<s.length;e+=1)s[e].c();p=w(),i&&i.c(),this.h()},l(e){const h=$("svelte-hiak7",document.head);t=z(h,!1),c=v(),a=k(h,"STYLE",{"data-svelte-h":!0}),L(a)!=="svelte-1j7ldh0"&&(a.textContent=d),h.forEach(m),r=E(e),o=k(e,"MENU",{});var l=q(o);for(let _=0;_<s.length;_+=1)s[_].l(l);l.forEach(m),p=E(e),i&&i.l(e),this.h()},h(){t.a=c},m(e,h){t.m(Q,document.head),x(document.head,c),x(document.head,a),g(e,r,h),g(e,o,h);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(o,null);g(e,p,h),i&&i.m(e,h),u=!0},p(e,[h]){if(h&3){f=S(e[1]);let l;for(l=0;l<f.length;l+=1){const _=C(e,f,l);s[l]?s[l].p(_,h):(s[l]=T(_),s[l].c(),s[l].m(o,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=f.length}i&&i.p&&(!u||h&8)&&M(i,j,e,e[3],u?D(j,e[3],h,null):A(e[3]),null)},i(e){u||(G(i,e),u=!0)},o(e){I(i,e),u=!1},d(e){e&&(t.d(),m(r),m(o),m(p)),m(c),m(a),F(s,e),i&&i.d(e)}}}function W(n,t,c){let a,d;N(n,J,u=>c(2,d=u));let{$$slots:r={},$$scope:o}=t;const p=[{name:"Példaprogramok",href:"/frontend2425/peldaprog"},{name:"Tananyag",href:"/frontend2425/sveltetut/new_proj"},{name:"Portfólió követelmények",href:"/frontend2425/portfolio"},{name:"Frontend tematika",href:"/frontend2425/tematika"}];return n.$$set=u=>{"$$scope"in u&&c(3,o=u.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&c(0,a=d.url.pathname)},[a,p,d,o,r]}class ne extends Y{constructor(t){super(),B(this,t,W,V,H,{})}}export{ne as component,le as universal};
