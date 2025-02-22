<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import bash from "svelte-highlight/languages/bash";
</script>
<h1>Frontend számonkérés: Céges leltárptogram implementációja</h1>
<div class="cont">
    <div class="pl"><span>1. feladat: </span
        >Projekt létrehozása, config beállítása, projekt elindítása, <a
         href="https://cdnjs.com/libraries/semantic-ui" target="_blank"
    >ui beállítása</a>, projekt publikálása.</div>
    <Highlight
        language={bash}
        code={`npx sv create # "szamonkeres", 'SvelteKit minimal', 'No', 'drizzle + lucia', 'SQLite', 'better-sqlite3', 'Yes', 'npm'
cd szamonkeres
git init && git add -A && git commit -m "Initial commit"
code .`}
    ></Highlight>
    <div class="pl">2. feladat: Adatstruktúra és adatbázis létrehozása.</div>
    <br />
    <div class="code"> 
        <div class="codein">
            <Highlight
                language={javascript}
                code={`//src/lib/server/db/schema.js:
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
})`}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div><Highlight
    language={bash}
    code={`npm run db:push`}
    ></Highlight>
    <div class="pl">3. Projekt elindítása fejlesztés közbeni teszteléshez.</div>
    <Highlight language={bash} code={`npm run dev -- --open`}></Highlight>
    <div class="pl">4. További önálló feladatok:<ul><li
        >menü készítése, Regisztrációs űrlap szükséges módosítása a <a href='https://github.com/tomuwhu/szamonkeres'>(minta)</a> szerint,</li><li
        >CRUD alkalmazás készítése az eszközök felviteléhez és userek hozzárendeléséhez,</li><li
        >különböző nézetek készítése: 
    - eszközök és az, hogy melyik eszköz kinél van, 
    - userek és az, hogy kinél milyen eszköz van,
    - statisztika nézet, kereső funkció.</li></ul></div>
</div>

<style>
    ul {
        padding: 2px;
        margin: 0px;
    }
    li {
        color: rgb(46, 129, 120);
        padding: 0px;
        margin: 0px;
        margin-left:40px;
    }
    i {
        color: rgb(86, 86, 42);
    }
    h1 {
        padding: 10px;
        font-size: 23px;    
    }
    :global(code.hljs) {
        border-radius: 14px;
        background-color: rgb(10, 62, 62);
        border: solid 9px rgb(19, 82, 60);
        box-shadow: 0px 0px 3px inset white;
    }
    div.pl {
        border: solid 1px gray;
        padding: 8px;
        border-radius: 10px;
        text-shadow: 1px 1px 3px gray;
        text-align: left;
        display: block;
        white-space: pre;
        color: rgb(37, 104, 123);
        box-shadow: 1px 1px 3px inset gray;
        background-color: rgb(215, 249, 250);
    }
    div.p {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        text-shadow: 1px 1px 3px gray;
        text-align: center;
        display: block;
        white-space: pre;
        color: rgb(37, 104, 123);
    }
    div.cont {
        margin: 10px;
        padding: 10px;
        box-shadow: 1px 1px 4px black;
        border: solid 10px gray;
        border-radius: 20px;
        background-color: rgb(187, 195, 191);
    }
    div.code {
        padding: 8px;
        background-color: rgb(9, 65, 47);
        border-radius: 15px;
    }
    div.codein {
        padding: 5px;
        box-shadow: 0px 0px 4px inset white;
        border-radius: 10px;
        border: solid 4px rgb(22, 66, 51);
        background-color: rgb(9, 65, 47);
    }
</style>
