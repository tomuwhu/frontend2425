import{s as D,e as u,c as d,b as m,f as h,m as v,i as k,h as b,n as E,q,w as S,a as $,g as w,t as y,d as z,x as B,j as C}from"../chunks/scheduler.BmOjrqpW.js";import{e as p}from"../chunks/each.D6YF6ztN.js";import{S as I,i as L}from"../chunks/index.BXKFiZHy.js";function M(o,n,s){const a=o.slice();return a[4]=n[s],a[6]=s,a}function j(o,n,s){const a=o.slice();return a[7]=n[s],a[9]=s,a}function A(o){let n,s=o[7]+"",a,l,t;function c(){return o[2](o[9],o[6])}return{c(){n=u("td"),a=y(s),this.h()},l(e){n=d(e,"TD",{class:!0});var r=m(n);a=z(r,s),r.forEach(h),this.h()},h(){v(n,"class","sz svelte-8f9jf2")},m(e,r){k(e,n,r),b(n,a),l||(t=B(n,"click",c),l=!0)},p(e,r){o=e,r&1&&s!==(s=o[7]+"")&&C(a,s)},d(e){e&&h(n),l=!1,t()}}}function T(o){let n,s,a=p(o[4]),l=[];for(let t=0;t<a.length;t+=1)l[t]=A(j(o,a,t));return{c(){n=u("tr");for(let t=0;t<l.length;t+=1)l[t].c();s=$()},l(t){n=d(t,"TR",{});var c=m(n);for(let e=0;e<l.length;e+=1)l[e].l(c);s=w(c),c.forEach(h)},m(t,c){k(t,n,c);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(n,null);b(n,s)},p(t,c){if(c&3){a=p(t[4]);let e;for(e=0;e<a.length;e+=1){const r=j(t,a,e);l[e]?l[e].p(r,c):(l[e]=A(r),l[e].c(),l[e].m(n,s))}for(;e<l.length;e+=1)l[e].d(1);l.length=a.length}},d(t){t&&h(n),q(l,t)}}}function P(o){let n,s,a=p(o[0]),l=[];for(let t=0;t<a.length;t+=1)l[t]=T(M(o,a,t));return{c(){n=u("div"),s=u("table");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){n=d(t,"DIV",{class:!0});var c=m(n);s=d(c,"TABLE",{class:!0});var e=m(s);for(let r=0;r<l.length;r+=1)l[r].l(e);e.forEach(h),c.forEach(h),this.h()},h(){v(s,"class","svelte-8f9jf2"),v(n,"class","cont svelte-8f9jf2")},m(t,c){k(t,n,c),b(n,s);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(s,null)},p(t,[c]){if(c&3){a=p(t[0]);let e;for(e=0;e<a.length;e+=1){const r=M(t,a,e);l[e]?l[e].p(r,c):(l[e]=T(r),l[e].c(),l[e].m(s,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=a.length}},i:E,o:E,d(t){t&&h(n),q(l,t)}}}var i=5;function R(o,n,s){var a=[...Array(i).keys()].map(e=>[...Array(i).keys()].map(r=>e*i+r+1));a[i-1][i-1]="";const l=(e,r)=>{let f=[];return[[1,0],[0,1],[-1,0],[0,-1]].forEach(([_,g])=>{a[r+g]&&a[r+g][e+_]===""&&(f=[_,g])}),f},t=(e,r)=>{let[f,_]=l(e,r);!f&&!_||(s(0,a[r+_][e+f]=a[r][e],a),s(0,a[r][e]="",a))};return S(()=>{for(let e=0;e<i**4;e++)t(Math.floor(Math.random()*i),Math.floor(Math.random()*i))}),[a,t,(e,r)=>t(e,r)]}class H extends I{constructor(n){super(),L(this,n,R,P,D,{})}}export{H as component};
