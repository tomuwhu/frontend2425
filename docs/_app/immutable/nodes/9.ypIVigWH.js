import{s as ne,e as i,a as p,c as d,b as T,r as P,g as m,f,m as c,i as le,h as l}from"../chunks/scheduler.BBYLFFrh.js";import{S as re,i as oe,c as x,b as M,m as j,t as V,a as w,d as y}from"../chunks/index.Bz4zfSzi.js";import{H as W,j as B,L as F}from"../chunks/javascript.DTTPHHew.js";function ie(v){let e,n;return e=new F({props:{highlighted:v[0]}}),{c(){x(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,o){j(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function de(v){let e,n;return e=new F({props:{highlighted:v[0]}}),{c(){x(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,o){j(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ce(v){let e,n;return e=new F({props:{highlighted:v[0]}}),{c(){x(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,o){j(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ve(v){let e,n,t="REST API működése<br/>",o,r,Q=`<table class="svelte-9tnb45"><tr><td colspan="3" class="svelte-9tnb45">A kliensek ...</td></tr> <tr><td class="svelte-9tnb45"></td> <td class="svelte-9tnb45">-</td> <td class="svelte-9tnb45">a GET metódus segítségével érik el az erőforrásokat, amelyek a kiszolgáló megadott URL-címén találhatók, paramétereket küldhetnek a RESTful API kérésben, hogy utasítsák a szervert az adatok szűrésére a küldés előtt.</td></tr> <tr><td class="svelte-9tnb45"></td> <td class="svelte-9tnb45">-</td> <td class="svelte-9tnb45">a POST metódus segítségével küldik el az adatokat a szervernek. Tartalmazza az elküldendő adatot a kéréssel együtt.</td></tr> <tr><td class="svelte-9tnb45"></td> <td class="svelte-9tnb45">-</td> <td class="svelte-9tnb45">a PUT és , PATCH metódusok segítségével tudják módosítani a szerveren meglévő erőforrásokat.</td></tr> <tr><td class="svelte-9tnb45"></td> <td class="svelte-9tnb45">-</td> <td class="svelte-9tnb45">a DELETE metódus segítségével törölhetnek egy erőforrást.
Például termék törléséhez a webshopból a DELETE metódust használják.</td></tr></table>`,q,$,X='<img class="ra svelte-9tnb45" src="/frontend2425/rest-api.png" alt="REST API"/>',R,b,Y="Kezdeti adatok lekérdezése a szerverről (GET metódus):<br/>",U,E,L,g,N,_,Z="Adat küldése szerverre: POST (PUT, PATCH, DELETE) metódus:<br/>",G,z,H,h,J,k,ee="Express Server API:<br/>",K,D,I,u,O;return g=new W({props:{language:B,code:`//App.js <script></sript> -be:
import { onMount } from "svelte";
onMount(async () => {
    let data = await fetch('https://tomuwhu.github.io/orarend_generator_svelte/tanarok.json').then(v =>v.json())
    console.log(data)
})`,$$slots:{default:[ie,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:v}}}),h=new W({props:{language:B,code:`async () => { //Svelte eseménybe pl.: on:click={async () => { ...
  ...
  const answer = await fetch('http://localhost:3000/post/', {
    method: 'POST', //v. PUT v. PATCH v. DELETE
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  }).then(v => v.json())
  console.log(answer)
  ...
}`,$$slots:{default:[de,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:v}}}),u=new W({props:{language:B,code:`import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

app.post('/post', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({x: 1, y: 2}))
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)`,$$slots:{default:[ce,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:v}}}),{c(){e=i("div"),n=i("div"),n.innerHTML=t,o=p(),r=i("div"),r.innerHTML=Q,q=p(),$=i("div"),$.innerHTML=X,R=p(),b=i("div"),b.innerHTML=Y,U=p(),E=i("div"),L=i("div"),x(g.$$.fragment),N=p(),_=i("div"),_.innerHTML=Z,G=p(),z=i("div"),H=i("div"),x(h.$$.fragment),J=p(),k=i("div"),k.innerHTML=ee,K=p(),D=i("div"),I=i("div"),x(u.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0});var a=T(e);n=d(a,"DIV",{class:!0,"data-svelte-h":!0}),P(n)!=="svelte-9xizdk"&&(n.innerHTML=t),o=m(a),r=d(a,"DIV",{class:!0,"data-svelte-h":!0}),P(r)!=="svelte-17jhb0p"&&(r.innerHTML=Q),q=m(a),$=d(a,"DIV",{class:!0,"data-svelte-h":!0}),P($)!=="svelte-x22cje"&&($.innerHTML=X),R=m(a),b=d(a,"DIV",{class:!0,"data-svelte-h":!0}),P(b)!=="svelte-11x8inc"&&(b.innerHTML=Y),U=m(a),E=d(a,"DIV",{class:!0});var S=T(E);L=d(S,"DIV",{class:!0});var A=T(L);M(g.$$.fragment,A),A.forEach(f),S.forEach(f),N=m(a),_=d(a,"DIV",{class:!0,"data-svelte-h":!0}),P(_)!=="svelte-4mnaos"&&(_.innerHTML=Z),G=m(a),z=d(a,"DIV",{class:!0});var C=T(z);H=d(C,"DIV",{class:!0});var te=T(H);M(h.$$.fragment,te),te.forEach(f),C.forEach(f),J=m(a),k=d(a,"DIV",{class:!0,"data-svelte-h":!0}),P(k)!=="svelte-r5g3st"&&(k.innerHTML=ee),K=m(a),D=d(a,"DIV",{class:!0});var se=T(D);I=d(se,"DIV",{class:!0});var ae=T(I);M(u.$$.fragment,ae),ae.forEach(f),se.forEach(f),a.forEach(f),this.h()},h(){c(n,"class","p svelte-9tnb45"),c(r,"class","p2 svelte-9tnb45"),c($,"class","p svelte-9tnb45"),c(b,"class","p svelte-9tnb45"),c(L,"class","codein svelte-9tnb45"),c(E,"class","code svelte-9tnb45"),c(_,"class","p svelte-9tnb45"),c(H,"class","codein svelte-9tnb45"),c(z,"class","code svelte-9tnb45"),c(k,"class","p svelte-9tnb45"),c(I,"class","codein svelte-9tnb45"),c(D,"class","code svelte-9tnb45"),c(e,"class","cont svelte-9tnb45")},m(s,a){le(s,e,a),l(e,n),l(e,o),l(e,r),l(e,q),l(e,$),l(e,R),l(e,b),l(e,U),l(e,E),l(E,L),j(g,L,null),l(e,N),l(e,_),l(e,G),l(e,z),l(z,H),j(h,H,null),l(e,J),l(e,k),l(e,K),l(e,D),l(D,I),j(u,I,null),O=!0},p(s,[a]){const S={};a&3&&(S.$$scope={dirty:a,ctx:s}),g.$set(S);const A={};a&3&&(A.$$scope={dirty:a,ctx:s}),h.$set(A);const C={};a&3&&(C.$$scope={dirty:a,ctx:s}),u.$set(C)},i(s){O||(V(g.$$.fragment,s),V(h.$$.fragment,s),V(u.$$.fragment,s),O=!0)},o(s){w(g.$$.fragment,s),w(h.$$.fragment,s),w(u.$$.fragment,s),O=!1},d(s){s&&f(e),y(g),y(h),y(u)}}}class pe extends re{constructor(e){super(),oe(this,e,null,ve,ne,{})}}export{pe as component};
