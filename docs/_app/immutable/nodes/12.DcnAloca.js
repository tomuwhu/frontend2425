import{s as q,e as g,a as l,c as f,b as B,r as v,g as s,f as K,m as _,i as F,h as n,n as G}from"../chunks/scheduler.C5oQXhGe.js";import{S as Q,i as U,c as b,b as y,m as k,t as w,a as C,d as x}from"../chunks/index.BeDZARuC.js";import{b as S}from"../chunks/bash.CiiqfXL8.js";import{H as T}from"../chunks/Highlight.DZSFdoca.js";function V(N){let e,r,M="Create and Publicate SvelteKit/Drizzle/Lucia/Turso (FullStack) project to Netlify",j,o,L,p,P=`<pre class="svelte-12jlkml">    ┌  Welcome to the Svelte CLI! (v0.6.25)
    ◇  Where would you like your project to be created? # turso
    ◇  Which template would you like? # SvelteKit minimal
    ◇  Add type checking with TypeScript? # No
    ◇  What would you like to add to your project? (use arrow keys / space bar) # drizzle, lucia
    ◇  drizzle: Which database would you like to use? # SQLite
    ◇  drizzle: Which SQLite client would you like to use? # Turso
    ◇  lucia: Do you want to include a demo? (includes a login/register page) # Yes
    ◇  Which package manager do you want to install dependencies with? # npm
</pre>`,A,i,H,u,R="Set .env url and token variables",z,c,E,d,O='Register a new user <a class="this svelte-12jlkml" href="http://localhost:5173/demo/lucia">on local</a> (/demo/lucia)',D,h,W,m,I=`    Create first commit

    Publish to GitHub as Public
    
    On netlify:
    - add new site
    - set enviroment variables (DATABASE_URL and DATABASE_AUTH_TOKEN)
    - deploy
`,$;return o=new T({props:{language:S,code:`curl -sSfL https://get.tur.so/install.sh | bash
turso auth signup
npx sv create
`}}),i=new T({props:{language:S,code:`turso auth login
turso db create _dbname_
turso db shell _dbname_
turso db show --url _dbname_
turso db tokens create _dbname_
`}}),c=new T({props:{language:S,code:`npm run db:push
npm run dev
`}}),h=new T({props:{language:S,code:`turso db shell _dbname_
  → PRAGMA table_list;
  → SELECT * FROM user;
  → .quit
`}}),{c(){e=g("div"),r=g("div"),r.textContent=M,j=l(),b(o.$$.fragment),L=l(),p=g("code"),p.innerHTML=P,A=l(),b(i.$$.fragment),H=l(),u=g("h3"),u.textContent=R,z=l(),b(c.$$.fragment),E=l(),d=g("h3"),d.innerHTML=O,D=l(),b(h.$$.fragment),W=l(),m=g("pre"),m.textContent=I,this.h()},l(a){e=f(a,"DIV",{class:!0});var t=B(e);r=f(t,"DIV",{class:!0,"data-svelte-h":!0}),v(r)!=="svelte-10b80lh"&&(r.textContent=M),j=s(t),y(o.$$.fragment,t),L=s(t),p=f(t,"CODE",{"data-svelte-h":!0}),v(p)!=="svelte-rbz2ta"&&(p.innerHTML=P),A=s(t),y(i.$$.fragment,t),H=s(t),u=f(t,"H3",{class:!0,"data-svelte-h":!0}),v(u)!=="svelte-16g03cd"&&(u.textContent=R),z=s(t),y(c.$$.fragment,t),E=s(t),d=f(t,"H3",{class:!0,"data-svelte-h":!0}),v(d)!=="svelte-1ef09t3"&&(d.innerHTML=O),D=s(t),y(h.$$.fragment,t),W=s(t),m=f(t,"PRE",{class:!0,"data-svelte-h":!0}),v(m)!=="svelte-jt8hye"&&(m.textContent=I),t.forEach(K),this.h()},h(){_(r,"class","p svelte-12jlkml"),_(u,"class","svelte-12jlkml"),_(d,"class","svelte-12jlkml"),_(m,"class","svelte-12jlkml"),_(e,"class","cont svelte-12jlkml")},m(a,t){F(a,e,t),n(e,r),n(e,j),k(o,e,null),n(e,L),n(e,p),n(e,A),k(i,e,null),n(e,H),n(e,u),n(e,z),k(c,e,null),n(e,E),n(e,d),n(e,D),k(h,e,null),n(e,W),n(e,m),$=!0},p:G,i(a){$||(w(o.$$.fragment,a),w(i.$$.fragment,a),w(c.$$.fragment,a),w(h.$$.fragment,a),$=!0)},o(a){C(o.$$.fragment,a),C(i.$$.fragment,a),C(c.$$.fragment,a),C(h.$$.fragment,a),$=!1},d(a){a&&K(e),x(o),x(i),x(c),x(h)}}}class ee extends Q{constructor(e){super(),U(this,e,null,V,q,{})}}export{ee as component};
