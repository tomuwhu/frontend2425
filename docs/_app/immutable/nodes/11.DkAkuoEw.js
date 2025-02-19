import{s as W,e as r,a as o,c as m,r as y,g as h,b as B,f as b,m as u,i as F,h as n}from"../chunks/scheduler.BuapcMvJ.js";import{S as X,i as Z,c as C,b as j,m as N,t as q,a as I,d as T}from"../chunks/index.Dg-vM5ye.js";import{H,j as ee,L as te}from"../chunks/javascript.BkBNL8AQ.js";import{b as Q}from"../chunks/bash.CiiqfXL8.js";function se(w){let l,d;return l=new te({props:{highlighted:w[0]}}),{c(){C(l.$$.fragment)},l(a){j(l.$$.fragment,a)},m(a,e){N(l,a,e),d=!0},p(a,e){const i={};e&1&&(i.highlighted=a[0]),l.$set(i)},i(a){d||(q(l.$$.fragment,a),d=!0)},o(a){I(l.$$.fragment,a),d=!1},d(a){T(l,a)}}}function le(w){let l,d="Frontend számonkérés: Céges leltárptogram implementációja",a,e,i,U='<span>1. feladat: </span>Projekt létrehozása, config beállítása, projekt elindítása, <a href="https://cdnjs.com/libraries/semantic-ui" target="_blank">ui beállítása</a>, projekt publikálása.',L,c,V,g,Y="2. feladat: Adatstruktúra és adatbázis létrehozása.",K,M,S,f,x,p,A,z,E,v,G="3. Projekt elindítása fejlesztés közbeni teszteléshez.",P,$,R,k,J=`4. További önálló feladatok:<ul class="svelte-1hphzp2"><li class="svelte-1hphzp2">menü készítése, Regisztrációs űrlap szükséges módosítása a <a href="https://github.com/tomuwhu/szamonkeres">(minta)</a> szerint,</li><li class="svelte-1hphzp2">CRUD alkalmazás készítése az eszközök felviteléhez és userek hozzárendeléséhez, kereső funkció,</li><li class="svelte-1hphzp2">különböző nézetek készítése: 
    - eszközök és az, hogy melyik eszköz kinél van, 
    - userek és az, hogy kinél milyen eszköz van,
    - statisztika nézet.</li></ul>`,D;return c=new H({props:{language:Q,code:`npx sv create # "szamonkeres", 'SvelteKit minimal', 'No', 'drizzle + lucia', 'SQLite', 'better-sqlite3', 'Yes', 'npm'
cd szamonkeres
git init && git add -A && git commit -m "Initial commit"
code .`}}),p=new H({props:{language:ee,code:`//src/lib/server/db/schema.js:
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    name: text('name').notNull(), // 'age' mező helyett 'name' mező, 'text'
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
})`,$$slots:{default:[se,({highlighted:t})=>({0:t}),({highlighted:t})=>t?1:0]},$$scope:{ctx:w}}}),z=new H({props:{language:Q,code:"npm run db:push"}}),$=new H({props:{language:Q,code:"npm run dev -- --open"}}),{c(){l=r("h1"),l.textContent=d,a=o(),e=r("div"),i=r("div"),i.innerHTML=U,L=o(),C(c.$$.fragment),V=o(),g=r("div"),g.textContent=Y,K=o(),M=r("br"),S=o(),f=r("div"),x=r("div"),C(p.$$.fragment),A=o(),C(z.$$.fragment),E=o(),v=r("div"),v.textContent=G,P=o(),C($.$$.fragment),R=o(),k=r("div"),k.innerHTML=J,this.h()},l(t){l=m(t,"H1",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-jdiiq9"&&(l.textContent=d),a=h(t),e=m(t,"DIV",{class:!0});var s=B(e);i=m(s,"DIV",{class:!0,"data-svelte-h":!0}),y(i)!=="svelte-1q57vem"&&(i.innerHTML=U),L=h(s),j(c.$$.fragment,s),V=h(s),g=m(s,"DIV",{class:!0,"data-svelte-h":!0}),y(g)!=="svelte-o83m6r"&&(g.textContent=Y),K=h(s),M=m(s,"BR",{}),S=h(s),f=m(s,"DIV",{class:!0});var _=B(f);x=m(_,"DIV",{class:!0});var O=B(x);j(p.$$.fragment,O),O.forEach(b),A=h(_),_.forEach(b),j(z.$$.fragment,s),E=h(s),v=m(s,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-xypj65"&&(v.textContent=G),P=h(s),j($.$$.fragment,s),R=h(s),k=m(s,"DIV",{class:!0,"data-svelte-h":!0}),y(k)!=="svelte-1hina9t"&&(k.innerHTML=J),s.forEach(b),this.h()},h(){u(l,"class","svelte-1hphzp2"),u(i,"class","pl svelte-1hphzp2"),u(g,"class","pl svelte-1hphzp2"),u(x,"class","codein svelte-1hphzp2"),u(f,"class","code svelte-1hphzp2"),u(v,"class","pl svelte-1hphzp2"),u(k,"class","pl svelte-1hphzp2"),u(e,"class","cont svelte-1hphzp2")},m(t,s){F(t,l,s),F(t,a,s),F(t,e,s),n(e,i),n(e,L),N(c,e,null),n(e,V),n(e,g),n(e,K),n(e,M),n(e,S),n(e,f),n(f,x),N(p,x,null),n(f,A),N(z,e,null),n(e,E),n(e,v),n(e,P),N($,e,null),n(e,R),n(e,k),D=!0},p(t,[s]){const _={};s&3&&(_.$$scope={dirty:s,ctx:t}),p.$set(_)},i(t){D||(q(c.$$.fragment,t),q(p.$$.fragment,t),q(z.$$.fragment,t),q($.$$.fragment,t),D=!0)},o(t){I(c.$$.fragment,t),I(p.$$.fragment,t),I(z.$$.fragment,t),I($.$$.fragment,t),D=!1},d(t){t&&(b(l),b(a),b(e)),T(c),T(p),T(z),T($)}}}class oe extends X{constructor(l){super(),Z(this,l,null,le,W,{})}}export{oe as component};
