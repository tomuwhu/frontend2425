import{s as W,e as r,a as o,c as m,r as C,g as p,b as B,f as b,m as d,i as F,h as a}from"../chunks/scheduler.BBYLFFrh.js";import{S as X,i as Z,c as y,b as N,m as j,t as q,a as I,d as T}from"../chunks/index.Bz4zfSzi.js";import{H as w,j as ee,L as te}from"../chunks/javascript.DTTPHHew.js";import{b as Q}from"../chunks/bash.CiiqfXL8.js";function se(D){let l,u;return l=new te({props:{highlighted:D[0]}}),{c(){y(l.$$.fragment)},l(n){N(l.$$.fragment,n)},m(n,e){j(l,n,e),u=!0},p(n,e){const i={};e&1&&(i.highlighted=n[0]),l.$set(i)},i(n){u||(q(l.$$.fragment,n),u=!0)},o(n){I(l.$$.fragment,n),u=!1},d(n){T(l,n)}}}function le(D){let l,u="Frontend számonkérés: Céges leltárptogram implementációja",n,e,i,U='<span>1. feladat: </span>Projekt létrehozása, config beállítása, projekt elindítása, <a href="https://cdnjs.com/libraries/semantic-ui" target="_blank">ui beállítása</a>, projekt publikálása',L,c,V,g,Y="2. feladat: Adatstruktúra létrehozása",K,M,S,f,_,h,A,v,E,z,G="3. Projekt elindítása fejlesztés közben teszteléshez.",P,$,R,x,J='4. További önálló feladatok:<ul class="svelte-1hphzp2"><li class="svelte-1hphzp2">menü készítése, Regisztrációs űrlap szükséges módosítása, </li><li class="svelte-1hphzp2">CRUD alkalmazás készítése az eszközök felviteléhez és userek hozzárendeléséhez,</li><li class="svelte-1hphzp2">különböző nézetek készítése eszközök és melyi kinél van, userek és kinél milyen eszköz van, statisztika nézet.</li></ul>',H;return c=new w({props:{language:Q,code:`npx sv create # "szamonkeres", 'SvelteKit minimal', 'No', 'drizzle + lucia', 'SQLite', 'better-sqlite3', 'Yes', 'npm'
cd szamonkeres
git init && git add -A && git commit -m "Initial commit"
code .`}}),h=new w({props:{language:ee,code:`//src/lib/server/db/schema.js:
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    name: text('username').notNull(), // 'age' mező helyett 'name' mező, 'text'
    username: text('username').notNull().unique(),
    passwordHash: text('password_hash').notNull()
})

export const session = sqliteTable("session", {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
})

export const tools = sqliteTable("tools", {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    image: text('image').notNull(),
    serialnum: text('link').notNull(),
    user_id: text('user_id').notNull().references(() => user.id),
})`,$$slots:{default:[se,({highlighted:t})=>({0:t}),({highlighted:t})=>t?1:0]},$$scope:{ctx:D}}}),v=new w({props:{language:Q,code:"npm run db:push"}}),$=new w({props:{language:Q,code:"npm run dev -- --open"}}),{c(){l=r("h1"),l.textContent=u,n=o(),e=r("div"),i=r("div"),i.innerHTML=U,L=o(),y(c.$$.fragment),V=o(),g=r("div"),g.textContent=Y,K=o(),M=r("br"),S=o(),f=r("div"),_=r("div"),y(h.$$.fragment),A=o(),y(v.$$.fragment),E=o(),z=r("div"),z.textContent=G,P=o(),y($.$$.fragment),R=o(),x=r("div"),x.innerHTML=J,this.h()},l(t){l=m(t,"H1",{class:!0,"data-svelte-h":!0}),C(l)!=="svelte-jdiiq9"&&(l.textContent=u),n=p(t),e=m(t,"DIV",{class:!0});var s=B(e);i=m(s,"DIV",{class:!0,"data-svelte-h":!0}),C(i)!=="svelte-1h5nrfy"&&(i.innerHTML=U),L=p(s),N(c.$$.fragment,s),V=p(s),g=m(s,"DIV",{class:!0,"data-svelte-h":!0}),C(g)!=="svelte-55bhko"&&(g.textContent=Y),K=p(s),M=m(s,"BR",{}),S=p(s),f=m(s,"DIV",{class:!0});var k=B(f);_=m(k,"DIV",{class:!0});var O=B(_);N(h.$$.fragment,O),O.forEach(b),A=p(k),k.forEach(b),N(v.$$.fragment,s),E=p(s),z=m(s,"DIV",{class:!0,"data-svelte-h":!0}),C(z)!=="svelte-1lrq6io"&&(z.textContent=G),P=p(s),N($.$$.fragment,s),R=p(s),x=m(s,"DIV",{class:!0,"data-svelte-h":!0}),C(x)!=="svelte-1t3py8p"&&(x.innerHTML=J),s.forEach(b),this.h()},h(){d(l,"class","svelte-1hphzp2"),d(i,"class","pl svelte-1hphzp2"),d(g,"class","pl svelte-1hphzp2"),d(_,"class","codein svelte-1hphzp2"),d(f,"class","code svelte-1hphzp2"),d(z,"class","pl svelte-1hphzp2"),d(x,"class","pl svelte-1hphzp2"),d(e,"class","cont svelte-1hphzp2")},m(t,s){F(t,l,s),F(t,n,s),F(t,e,s),a(e,i),a(e,L),j(c,e,null),a(e,V),a(e,g),a(e,K),a(e,M),a(e,S),a(e,f),a(f,_),j(h,_,null),a(f,A),j(v,e,null),a(e,E),a(e,z),a(e,P),j($,e,null),a(e,R),a(e,x),H=!0},p(t,[s]){const k={};s&3&&(k.$$scope={dirty:s,ctx:t}),h.$set(k)},i(t){H||(q(c.$$.fragment,t),q(h.$$.fragment,t),q(v.$$.fragment,t),q($.$$.fragment,t),H=!0)},o(t){I(c.$$.fragment,t),I(h.$$.fragment,t),I(v.$$.fragment,t),I($.$$.fragment,t),H=!1},d(t){t&&(b(l),b(n),b(e)),T(c),T(h),T(v),T($)}}}class oe extends X{constructor(l){super(),Z(this,l,null,le,W,{})}}export{oe as component};
