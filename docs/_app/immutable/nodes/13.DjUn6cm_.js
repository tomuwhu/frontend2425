import{s as W,e as r,a as o,c as m,r as w,g as u,b as B,f as b,m as c,i as F,h as a}from"../chunks/scheduler.C0ZLY-_k.js";import{S as X,i as Z,c as y,b as C,m as j,t as N,a as q,d as I}from"../chunks/index.BslVKfKp.js";import{j as ee,L as te}from"../chunks/javascript.pnGyKMTE.js";import{b as Q}from"../chunks/bash.CiiqfXL8.js";import{H}from"../chunks/Highlight.bvuGEGRy.js";function se(T){let n,p;return n=new te({props:{highlighted:T[0]}}),{c(){y(n.$$.fragment)},l(l){C(n.$$.fragment,l)},m(l,e){j(n,l,e),p=!0},p(l,e){const i={};e&1&&(i.highlighted=l[0]),n.$set(i)},i(l){p||(N(n.$$.fragment,l),p=!0)},o(l){q(n.$$.fragment,l),p=!1},d(l){I(n,l)}}}function ne(T){let n,p="Frontend számonkérés: Céges leltárptogram implementációja",l,e,i,U='<span>1. feladat: </span>Projekt létrehozása, config beállítása, projekt elindítása, <a href="https://cdnjs.com/libraries/semantic-ui" target="_blank">ui beállítása</a>, projekt publikálása.',L,g,V,h,Y="2. feladat: Adatstruktúra és adatbázis létrehozása.",K,M,S,f,k,d,A,v,E,$,G="3. Projekt elindítása fejlesztés közbeni teszteléshez.",P,x,R,z,J=`4. További önálló feladatok:<ul class="svelte-1nw82x9"><li class="svelte-1nw82x9">menü készítése, Regisztrációs űrlap szükséges módosítása a <a href="https://github.com/tomuwhu/szamonkeres">(minta)</a> szerint,</li><li class="svelte-1nw82x9">CRUD alkalmazás készítése az eszközök felviteléhez és userek hozzárendeléséhez,</li><li class="svelte-1nw82x9">különböző nézetek készítése: 
    - eszközök és az, hogy melyik eszköz kinél van, 
    - userek és az, hogy kinél milyen eszköz van,
    - statisztika nézet, kereső funkció.</li></ul>`,D;return g=new H({props:{language:Q,code:`npx sv create # "szamonkeres", 'SvelteKit minimal', 'No', 'drizzle + lucia', 'SQLite', 'better-sqlite3', 'Yes', 'npm'
cd szamonkeres
git init && git add -A && git commit -m "Initial commit"
code .`}}),d=new H({props:{language:ee,code:`//src/lib/server/db/schema.js:
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
    id: integer('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    image: text('image').notNull(),
    serialnum: text('link').notNull(),
    user_id: text('user_id').notNull().references(() => user.id),
})`,$$slots:{default:[se,({highlighted:t})=>({0:t}),({highlighted:t})=>t?1:0]},$$scope:{ctx:T}}}),v=new H({props:{language:Q,code:"npm run db:push"}}),x=new H({props:{language:Q,code:"npm run dev -- --open"}}),{c(){n=r("h1"),n.textContent=p,l=o(),e=r("div"),i=r("div"),i.innerHTML=U,L=o(),y(g.$$.fragment),V=o(),h=r("div"),h.textContent=Y,K=o(),M=r("br"),S=o(),f=r("div"),k=r("div"),y(d.$$.fragment),A=o(),y(v.$$.fragment),E=o(),$=r("div"),$.textContent=G,P=o(),y(x.$$.fragment),R=o(),z=r("div"),z.innerHTML=J,this.h()},l(t){n=m(t,"H1",{class:!0,"data-svelte-h":!0}),w(n)!=="svelte-jdiiq9"&&(n.textContent=p),l=u(t),e=m(t,"DIV",{class:!0});var s=B(e);i=m(s,"DIV",{class:!0,"data-svelte-h":!0}),w(i)!=="svelte-1q57vem"&&(i.innerHTML=U),L=u(s),C(g.$$.fragment,s),V=u(s),h=m(s,"DIV",{class:!0,"data-svelte-h":!0}),w(h)!=="svelte-o83m6r"&&(h.textContent=Y),K=u(s),M=m(s,"BR",{}),S=u(s),f=m(s,"DIV",{class:!0});var _=B(f);k=m(_,"DIV",{class:!0});var O=B(k);C(d.$$.fragment,O),O.forEach(b),A=u(_),_.forEach(b),C(v.$$.fragment,s),E=u(s),$=m(s,"DIV",{class:!0,"data-svelte-h":!0}),w($)!=="svelte-xypj65"&&($.textContent=G),P=u(s),C(x.$$.fragment,s),R=u(s),z=m(s,"DIV",{class:!0,"data-svelte-h":!0}),w(z)!=="svelte-16eceax"&&(z.innerHTML=J),s.forEach(b),this.h()},h(){c(n,"class","svelte-1nw82x9"),c(i,"class","pl svelte-1nw82x9"),c(h,"class","pl svelte-1nw82x9"),c(k,"class","codein svelte-1nw82x9"),c(f,"class","code svelte-1nw82x9"),c($,"class","pl svelte-1nw82x9"),c(z,"class","pl svelte-1nw82x9"),c(e,"class","cont svelte-1nw82x9")},m(t,s){F(t,n,s),F(t,l,s),F(t,e,s),a(e,i),a(e,L),j(g,e,null),a(e,V),a(e,h),a(e,K),a(e,M),a(e,S),a(e,f),a(f,k),j(d,k,null),a(f,A),j(v,e,null),a(e,E),a(e,$),a(e,P),j(x,e,null),a(e,R),a(e,z),D=!0},p(t,[s]){const _={};s&3&&(_.$$scope={dirty:s,ctx:t}),d.$set(_)},i(t){D||(N(g.$$.fragment,t),N(d.$$.fragment,t),N(v.$$.fragment,t),N(x.$$.fragment,t),D=!0)},o(t){q(g.$$.fragment,t),q(d.$$.fragment,t),q(v.$$.fragment,t),q(x.$$.fragment,t),D=!1},d(t){t&&(b(n),b(l),b(e)),I(g),I(d),I(v),I(x)}}}class me extends X{constructor(n){super(),Z(this,n,null,ne,W,{})}}export{me as component};
