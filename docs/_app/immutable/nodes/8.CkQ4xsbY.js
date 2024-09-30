import{s as N,e as p,a as E,c as g,b as w,r as z,g as S,f as v,m as u,i as R,h as i}from"../chunks/scheduler.Bton-jdO.js";import{S as q,i as J,c as T,b as D,m as I,t as V,a as H,d as L}from"../chunks/index.Bg754y_a.js";import{H as O,j as P,L as A}from"../chunks/javascript.CVyrrqYT.js";function K(h){let e,s;return e=new A({props:{highlighted:h[0]}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,o){I(e,t,o),s=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function B(h){let e,s;return e=new A({props:{highlighted:h[0]}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,o){I(e,t,o),s=!0},p(t,o){const r={};o&1&&(r.highlighted=t[0]),e.$set(r)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function F(h){let e,s,t="Kezdeti adatok lekérdezése a szerverről:<br/>",o,r,f,l,M,d,k="POST data:<br/>",y,m,$,c,j;return l=new O({props:{language:P,code:`//App.js <script></sript> -be:
import { onMount } from "svelte";
onMount(async () => {
    let data = await fetch('https://tomuwhu.github.io/orarend_generator_svelte/tanarok.json')
        .then(v =>v.json())
    console.log(data)
})`,$$slots:{default:[K,({highlighted:a})=>({0:a}),({highlighted:a})=>a?1:0]},$$scope:{ctx:h}}}),c=new O({props:{language:P,code:`async () => {
  const rawResponse = await fetch('http://localhost:3000/post/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  })
  let answer = await rawResponse.json()
  console.log(answer)
}`,$$slots:{default:[B,({highlighted:a})=>({0:a}),({highlighted:a})=>a?1:0]},$$scope:{ctx:h}}}),{c(){e=p("div"),s=p("div"),s.innerHTML=t,o=E(),r=p("div"),f=p("div"),T(l.$$.fragment),M=E(),d=p("div"),d.innerHTML=k,y=E(),m=p("div"),$=p("div"),T(c.$$.fragment),this.h()},l(a){e=g(a,"DIV",{class:!0});var n=w(e);s=g(n,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1j6gka4"&&(s.innerHTML=t),o=S(n),r=g(n,"DIV",{class:!0});var _=w(r);f=g(_,"DIV",{class:!0});var b=w(f);D(l.$$.fragment,b),b.forEach(v),_.forEach(v),M=S(n),d=g(n,"DIV",{class:!0,"data-svelte-h":!0}),z(d)!=="svelte-soiila"&&(d.innerHTML=k),y=S(n),m=g(n,"DIV",{class:!0});var C=w(m);$=g(C,"DIV",{class:!0});var x=w($);D(c.$$.fragment,x),x.forEach(v),C.forEach(v),n.forEach(v),this.h()},h(){u(s,"class","p svelte-86hhpa"),u(f,"class","codein svelte-86hhpa"),u(r,"class","code svelte-86hhpa"),u(d,"class","p svelte-86hhpa"),u($,"class","codein svelte-86hhpa"),u(m,"class","code svelte-86hhpa"),u(e,"class","cont svelte-86hhpa")},m(a,n){R(a,e,n),i(e,s),i(e,o),i(e,r),i(r,f),I(l,f,null),i(e,M),i(e,d),i(e,y),i(e,m),i(m,$),I(c,$,null),j=!0},p(a,[n]){const _={};n&3&&(_.$$scope={dirty:n,ctx:a}),l.$set(_);const b={};n&3&&(b.$$scope={dirty:n,ctx:a}),c.$set(b)},i(a){j||(V(l.$$.fragment,a),V(c.$$.fragment,a),j=!0)},o(a){H(l.$$.fragment,a),H(c.$$.fragment,a),j=!1},d(a){a&&v(e),L(l),L(c)}}}class W extends q{constructor(e){super(),J(this,e,null,F,N,{})}}export{W as component};
