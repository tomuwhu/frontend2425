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
# majd: Projeknév megadása, Svelte választása`}
    ></Highlight>
    <div class="p">Config beállítása (GitHub Deploy-hoz)</div>
    <br />
    <div class="code">
        <Highlight
            language={javascript}
            code={`//vite.config.js:
export default defineConfig({
    plugins: [svelte()],
    base: '/Projeknév/',
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
    <div class="p"><br />Projekt elindítása</div>
    <Highlight language={bash} code={`npm run dev`}></Highlight>
    <div class="p">Projekt buildelése</div>
    <Highlight language={bash} code={`npm run build`}></Highlight>
</div>

<style>
    :global(code.hljs) {
        border-radius: 10px;
        background-color: rgb(10, 62, 62);
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
    }
</style>
