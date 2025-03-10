import{s as B,e as d,a as D,c as g,b as w,r as M,g as I,f as x,m as f,i as G,h as l}from"../chunks/scheduler.C0ZLY-_k.js";import{S as J,i as Q,c as S,b as V,m as k,t as L,a as q,d as z}from"../chunks/index.BslVKfKp.js";import{j as O,L as R}from"../chunks/javascript.pnGyKMTE.js";import{b as U}from"../chunks/bash.CiiqfXL8.js";import{H as A}from"../chunks/Highlight.bvuGEGRy.js";function W(m){let e,n;return e=new R({props:{highlighted:m[0]}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,o){k(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function X(m){let e,n;return e=new R({props:{highlighted:m[0]}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,o){k(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Y(m){let e,n,t="SvelteKit (FullStack) projekt létrehozása:",o,r,H,h,K="SvelteKit Load / Actions (+page.server.js)<br/>",E,v,$,i,T,u,P="SvelteKit API (+server.js)<br/>",y,p,_,c,C;return r=new A({props:{language:U,code:`npx sv create
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
        const formData = await event.request.formData();
        const ... = formData.get('...'); // form input name
    }
} // Send data from +page.svelte: <form method="post" ...`,$$slots:{default:[W,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:m}}}),c=new A({props:{language:O,code:`import { json } from '@sveltejs/kit';
export const POST = async ({ request }) => {
    console.log(await request.json())
    return json({ ... })
};`,$$slots:{default:[X,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:m}}}),{c(){e=d("div"),n=d("div"),n.textContent=t,o=D(),S(r.$$.fragment),H=D(),h=d("div"),h.innerHTML=K,E=D(),v=d("div"),$=d("div"),S(i.$$.fragment),T=D(),u=d("div"),u.innerHTML=P,y=D(),p=d("div"),_=d("div"),S(c.$$.fragment),this.h()},l(s){e=g(s,"DIV",{class:!0});var a=w(e);n=g(a,"DIV",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-1w53qfd"&&(n.textContent=t),o=I(a),V(r.$$.fragment,a),H=I(a),h=g(a,"DIV",{class:!0,"data-svelte-h":!0}),M(h)!=="svelte-1gi8uwk"&&(h.innerHTML=K),E=I(a),v=g(a,"DIV",{class:!0});var j=w(v);$=g(j,"DIV",{class:!0});var b=w($);V(i.$$.fragment,b),b.forEach(x),j.forEach(x),T=I(a),u=g(a,"DIV",{class:!0,"data-svelte-h":!0}),M(u)!=="svelte-7v3tnx"&&(u.innerHTML=P),y=I(a),p=g(a,"DIV",{class:!0});var F=w(p);_=g(F,"DIV",{class:!0});var N=w(_);V(c.$$.fragment,N),N.forEach(x),F.forEach(x),a.forEach(x),this.h()},h(){f(n,"class","p svelte-1aeghxn"),f(h,"class","p svelte-1aeghxn"),f($,"class","codein svelte-1aeghxn"),f(v,"class","code svelte-1aeghxn"),f(u,"class","p svelte-1aeghxn"),f(_,"class","codein svelte-1aeghxn"),f(p,"class","code svelte-1aeghxn"),f(e,"class","cont svelte-1aeghxn")},m(s,a){G(s,e,a),l(e,n),l(e,o),k(r,e,null),l(e,H),l(e,h),l(e,E),l(e,v),l(v,$),k(i,$,null),l(e,T),l(e,u),l(e,y),l(e,p),l(p,_),k(c,_,null),C=!0},p(s,[a]){const j={};a&3&&(j.$$scope={dirty:a,ctx:s}),i.$set(j);const b={};a&3&&(b.$$scope={dirty:a,ctx:s}),c.$set(b)},i(s){C||(L(r.$$.fragment,s),L(i.$$.fragment,s),L(c.$$.fragment,s),C=!0)},o(s){q(r.$$.fragment,s),q(i.$$.fragment,s),q(c.$$.fragment,s),C=!1},d(s){s&&x(e),z(r),z(i),z(c)}}}class ne extends J{constructor(e){super(),Q(this,e,null,Y,B,{})}}export{ne as component};
