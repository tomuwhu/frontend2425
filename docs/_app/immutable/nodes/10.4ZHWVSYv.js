import{s as B,e as d,a as x,c as f,b as I,r as M,g as w,f as z,m as p,i as G,h as l}from"../chunks/scheduler.BuapcMvJ.js";import{S as J,i as Q,c as D,b as S,m as V,t as k,a as L,d as C}from"../chunks/index.Dg-vM5ye.js";import{H as A,j as O,L as R}from"../chunks/javascript.BkBNL8AQ.js";import{b as U}from"../chunks/bash.CiiqfXL8.js";function W(u){let e,a;return e=new R({props:{highlighted:u[0]}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){V(e,t,o),a=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){L(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function X(u){let e,a;return e=new R({props:{highlighted:u[0]}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){V(e,t,o),a=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){L(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function Y(u){let e,a,t="SvelteKit (FullStack) projekt létrehozása:",o,r,q,g,K="SvelteKit Load / Actions (+page.server.js)<br/>",E,m,$,i,T,v,P="SvelteKit API (+server.js)<br/>",y,h,_,c,H;return r=new A({props:{language:U,code:`npx sv create
# Ajánlott add-ons: drizzle, lucia
cd <myproject> #projekt könyvtár kiválasztása
code . #vscode elindítása
npm run dev`}}),i=new A({props:{language:O,code:`
// szerver => frontend
export const load = ({locals}) => {
    return {
        ...
    }
} // Read it in +page.svelte: let { data } = $props()

// frontend => szerver
export const actions = {
    default: async ({ locals, request }) => {
        ...
    }
} // Send data from +page.svelte: <form method="post" ...`,$$slots:{default:[W,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:u}}}),c=new A({props:{language:O,code:`import { json } from '@sveltejs/kit';
export const POST = async ({ request }) => {
    console.log(await request.json())
    return json({ ... })
};`,$$slots:{default:[X,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:u}}}),{c(){e=d("div"),a=d("div"),a.textContent=t,o=x(),D(r.$$.fragment),q=x(),g=d("div"),g.innerHTML=K,E=x(),m=d("div"),$=d("div"),D(i.$$.fragment),T=x(),v=d("div"),v.innerHTML=P,y=x(),h=d("div"),_=d("div"),D(c.$$.fragment),this.h()},l(s){e=f(s,"DIV",{class:!0});var n=I(e);a=f(n,"DIV",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-1w53qfd"&&(a.textContent=t),o=w(n),S(r.$$.fragment,n),q=w(n),g=f(n,"DIV",{class:!0,"data-svelte-h":!0}),M(g)!=="svelte-1gi8uwk"&&(g.innerHTML=K),E=w(n),m=f(n,"DIV",{class:!0});var j=I(m);$=f(j,"DIV",{class:!0});var b=I($);S(i.$$.fragment,b),b.forEach(z),j.forEach(z),T=w(n),v=f(n,"DIV",{class:!0,"data-svelte-h":!0}),M(v)!=="svelte-7v3tnx"&&(v.innerHTML=P),y=w(n),h=f(n,"DIV",{class:!0});var F=I(h);_=f(F,"DIV",{class:!0});var N=I(_);S(c.$$.fragment,N),N.forEach(z),F.forEach(z),n.forEach(z),this.h()},h(){p(a,"class","p svelte-p3z4zo"),p(g,"class","p svelte-p3z4zo"),p($,"class","codein svelte-p3z4zo"),p(m,"class","code svelte-p3z4zo"),p(v,"class","p svelte-p3z4zo"),p(_,"class","codein svelte-p3z4zo"),p(h,"class","code svelte-p3z4zo"),p(e,"class","cont svelte-p3z4zo")},m(s,n){G(s,e,n),l(e,a),l(e,o),V(r,e,null),l(e,q),l(e,g),l(e,E),l(e,m),l(m,$),V(i,$,null),l(e,T),l(e,v),l(e,y),l(e,h),l(h,_),V(c,_,null),H=!0},p(s,[n]){const j={};n&3&&(j.$$scope={dirty:n,ctx:s}),i.$set(j);const b={};n&3&&(b.$$scope={dirty:n,ctx:s}),c.$set(b)},i(s){H||(k(r.$$.fragment,s),k(i.$$.fragment,s),k(c.$$.fragment,s),H=!0)},o(s){L(r.$$.fragment,s),L(i.$$.fragment,s),L(c.$$.fragment,s),H=!1},d(s){s&&z(e),C(r),C(i),C(c)}}}class ne extends J{constructor(e){super(),Q(this,e,null,Y,B,{})}}export{ne as component};
