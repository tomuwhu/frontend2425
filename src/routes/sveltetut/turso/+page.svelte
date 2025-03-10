<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import bash from "svelte-highlight/languages/bash";
</script>

<div class="cont">
    <div class="p">Create and Publicate SvelteKit/Drizzle/Lucia/Turso (FullStack) project to Netlify</div>
    <Highlight
        language={bash}
        code={`curl -sSfL https://get.tur.so/install.sh | bash
turso auth signup
npx sv create
`}
    ></Highlight>
<code>
<pre>
    ┌  Welcome to the Svelte CLI! (v0.6.25)
    ◇  Where would you like your project to be created? # turso
    ◇  Which template would you like? # SvelteKit minimal
    ◇  Add type checking with TypeScript? # No
    ◇  What would you like to add to your project? (use arrow keys / space bar) # drizzle, lucia
    ◇  drizzle: Which database would you like to use? # SQLite
    ◇  drizzle: Which SQLite client would you like to use? # Turso
    ◇  lucia: Do you want to include a demo? (includes a login/register page) # Yes
    ◇  Which package manager do you want to install dependencies with? # npm
</pre>
</code>
<Highlight
        language={bash}
        code={`turso auth login
turso db create _dbname_
turso db shell _dbname_
turso db show --url _dbname_
turso db tokens create _dbname_
`}
    ></Highlight>
    <h3>Set .env url and token variables</h3>
    <Highlight
        language={bash}
        code={`npm run db:push
npm run dev
`}
    ></Highlight>
    <h3>Register a new user <a class="this" href="http://localhost:5173/demo/lucia">on local</a> (/demo/lucia)</h3>
    <Highlight
        language={bash}
        code={`turso db shell _dbname_
  → PRAGMA table_list;
  → SELECT * FROM user;
  → .quit
`}
    ></Highlight>

<pre>
    Create first commit

    Publish to GitHub as Public
    
    On netlify:
    - add new site
    - set enviroment variables (DATABASE_URL and DATABASE_AUTH_TOKEN)
    - deploy
</pre>

</div>
<style>
    pre {
        text-shadow: 1px 1px 3px gray;
    }
    a.this {
        all: unset;
        cursor: pointer;

        text-shadow: 1px 1px 3px gray;
        color: rgb(37, 104, 123);
    }
    a.this:hover {
        text-shadow: 1px 1px 3px gray;
        color: rgb(119, 32, 148);
    }
    h3 {
        font-weight: normal;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding-left: 30px;
    }
    :global(code.hljs) {
        border-radius: 15px;
        background-color: rgb(10, 62, 62);
        border: solid 9px rgb(19, 82, 60);
        box-shadow: 0px 0px 3px inset white;
    }
    div.p {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        text-shadow: 1px 1px 3px gray;
        text-align: center;
        display: block;
        white-space: pre;
        color: rgb(37, 104, 123);
        margin: 10px;
    }
    div.cont {
        margin: 10px;
        padding: 10px;
        box-shadow: 1px 1px 4px black;
        border: solid 10px gray;
        border-radius: 20px;
        background-color: rgb(187, 195, 191);
    }
</style>
