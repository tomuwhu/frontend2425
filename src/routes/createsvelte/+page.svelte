<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import bash from "svelte-highlight/languages/bash";
</script>

<div class="cont">
    <div class="p">Projekt létrehozása:</div>
    <Highlight
        language={bash}
        code={`npm create vite
# majd: Projeknév megadása (myproject), Svelte választása, JavaScript választása
cd myproject #projekt könyvtár kiválasztása
npm i #függőségek telepítése
code . #vscode elindítása`}
    ></Highlight>
    <div class="p">Config beállítása (GitHub Deploy-hoz)</div>
    <br />
    <div class="code"> 
        <div class="codein">
            <Highlight
                language={javascript}
                code={`//vite.config.js:
export default defineConfig({
    plugins: [svelte()],
    base: '/myproject/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})`}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
    <div class="p"><br />Projekt elindítása</div>
    <Highlight language={bash} code={`npm run dev -- --open`}></Highlight>
    <div class="p">Projekt buildelése</div>
    <Highlight language={bash} code={`npm run build`}></Highlight>
    <div class="p">
        Projekt publikálása (deploy)
        <img src="commit.jpg" alt="Commit" /> <img src="sync.jpg" alt="Sync" />
        <span>GitHub - Settings - Pages - Build and deployment: <i>master;</i> - <i>/docs</i> - Save</span>
    </div>
</div>

<style>
    i {
        color: rgb(86, 86, 42);
    }
    span {
        display: block;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
    img {
        margin: 20px;
        height: 140px;
        border-radius: 11px;
        border:solid 10px rgb(10, 62, 62);
        box-shadow: 1px 1px 5px black;
    }
    :global(code.hljs) {
        border-radius: 14px;
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
