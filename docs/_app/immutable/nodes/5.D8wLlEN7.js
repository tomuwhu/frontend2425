import{s as J,e as u,a as h,c as f,b as K,l as A,g as v,f as U,m as $,i as Y,h as a}from"../chunks/scheduler.Gg1qObrg.js";import{S as Z,i as X,c as T,a as H,m as D,t as L,b as B,d as O}from"../chunks/index.3uUcdeal.js";import{H as V,j as ee,L as te}from"../chunks/javascript.CcgQQwQH.js";function se(i){const e=i.regex,n={},l={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:e.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},l]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[i.BACKSLASH_ESCAPE]},o=i.inherit(i.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),y={begin:/<<-?\s*(?=\w+)/,starts:{contains:[i.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,contains:[i.BACKSLASH_ESCAPE,n,r]};r.contains.push(c);const M={match:/\\"/},w={className:"string",begin:/'/,end:/'/},k={match:/\\'/},C={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},i.NUMBER_MODE,n]},b=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],_=i.SHEBANG({binary:`(${b.join("|")})`,relevance:10}),m={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[i.inherit(i.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},N=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],d=["true","false"],P={match:/(\/[a-z._-]+)+/},x=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],g=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],z=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],p=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:N,literal:d,built_in:[...x,...g,"set","shopt",...z,...p]},contains:[_,i.SHEBANG(),m,C,o,y,P,c,M,w,k,n]}}const q={name:"bash",register:se};function ne(i){let e,n;return e=new te({props:{highlighted:i[0]}}),{c(){T(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,r){D(e,l,r),n=!0},p(l,r){const o={};r&1&&(o.highlighted=l[0]),e.$set(o)},i(l){n||(L(e.$$.fragment,l),n=!0)},o(l){B(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function ae(i){let e,n,l="Projekt létrehozása:",r,o,y,c,M="Config beállítása (GitHub Deploy-hoz)",w,k,C,b,_,m,N,d,P="<br/>Projekt elindítása",x,g,z,p,Q="Projekt buildelése",j,S,G,E,W=`Projekt publikálása (deploy)
        <img src="/frontend2425/commit.jpg" alt="Commit" class="svelte-1nggmsl"/> <img src="/frontend2425/sync.jpg" alt="Sync" class="svelte-1nggmsl"/> <span class="svelte-1nggmsl">GitHub - Settings - Pages - Build and deployment: <i class="svelte-1nggmsl">master;</i> - <i class="svelte-1nggmsl">/docs</i> - Save</span>`,R;return o=new V({props:{language:q,code:`npm create vite
# majd: Projeknév megadása (myproject), Svelte választása, JavaScript választása
cd myproject #projekt könyvtár kiválasztása
npm i #függőségek telepítése
code . #vscode elindítása`}}),m=new V({props:{language:ee,code:`//vite.config.js:
export default defineConfig({
    plugins: [svelte()],
    base: '/myproject/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})`,$$slots:{default:[ne,({highlighted:s})=>({0:s}),({highlighted:s})=>s?1:0]},$$scope:{ctx:i}}}),g=new V({props:{language:q,code:"npm run dev -- --open"}}),S=new V({props:{language:q,code:"npm run build"}}),{c(){e=u("div"),n=u("div"),n.textContent=l,r=h(),T(o.$$.fragment),y=h(),c=u("div"),c.textContent=M,w=h(),k=u("br"),C=h(),b=u("div"),_=u("div"),T(m.$$.fragment),N=h(),d=u("div"),d.innerHTML=P,x=h(),T(g.$$.fragment),z=h(),p=u("div"),p.textContent=Q,j=h(),T(S.$$.fragment),G=h(),E=u("div"),E.innerHTML=W,this.h()},l(s){e=f(s,"DIV",{class:!0});var t=K(e);n=f(t,"DIV",{class:!0,"data-svelte-h":!0}),A(n)!=="svelte-ue1lre"&&(n.textContent=l),r=v(t),H(o.$$.fragment,t),y=v(t),c=f(t,"DIV",{class:!0,"data-svelte-h":!0}),A(c)!=="svelte-5pttv4"&&(c.textContent=M),w=v(t),k=f(t,"BR",{}),C=v(t),b=f(t,"DIV",{class:!0});var I=K(b);_=f(I,"DIV",{class:!0});var F=K(_);H(m.$$.fragment,F),F.forEach(U),I.forEach(U),N=v(t),d=f(t,"DIV",{class:!0,"data-svelte-h":!0}),A(d)!=="svelte-1dzzyrx"&&(d.innerHTML=P),x=v(t),H(g.$$.fragment,t),z=v(t),p=f(t,"DIV",{class:!0,"data-svelte-h":!0}),A(p)!=="svelte-19abbms"&&(p.textContent=Q),j=v(t),H(S.$$.fragment,t),G=v(t),E=f(t,"DIV",{class:!0,"data-svelte-h":!0}),A(E)!=="svelte-urtw29"&&(E.innerHTML=W),t.forEach(U),this.h()},h(){$(n,"class","p svelte-1nggmsl"),$(c,"class","p svelte-1nggmsl"),$(_,"class","codein svelte-1nggmsl"),$(b,"class","code svelte-1nggmsl"),$(d,"class","p svelte-1nggmsl"),$(p,"class","p svelte-1nggmsl"),$(E,"class","p svelte-1nggmsl"),$(e,"class","cont svelte-1nggmsl")},m(s,t){Y(s,e,t),a(e,n),a(e,r),D(o,e,null),a(e,y),a(e,c),a(e,w),a(e,k),a(e,C),a(e,b),a(b,_),D(m,_,null),a(e,N),a(e,d),a(e,x),D(g,e,null),a(e,z),a(e,p),a(e,j),D(S,e,null),a(e,G),a(e,E),R=!0},p(s,[t]){const I={};t&3&&(I.$$scope={dirty:t,ctx:s}),m.$set(I)},i(s){R||(L(o.$$.fragment,s),L(m.$$.fragment,s),L(g.$$.fragment,s),L(S.$$.fragment,s),R=!0)},o(s){B(o.$$.fragment,s),B(m.$$.fragment,s),B(g.$$.fragment,s),B(S.$$.fragment,s),R=!1},d(s){s&&U(e),O(o),O(m),O(g),O(S)}}}class re extends Z{constructor(e){super(),X(this,e,null,ae,J,{})}}export{re as component};
