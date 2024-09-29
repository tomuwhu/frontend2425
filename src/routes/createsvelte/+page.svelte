<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import bash from "svelte-highlight/languages/bash";
</script>

<div class="cont">
    <Highlight language={bash} code={`npm create vite`} let:highlighted>
        <LineNumbers {highlighted} />
    </Highlight>
    <p>
        Projeknév megadása, Svelte választása
        <br /><br />
        vite.config.js:
    </p>
    <div class="code">
        <Highlight
            language={javascript}
            code={`export default defineConfig({
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
        <p>Projekt elindítása</p>
        <Highlight language={bash} code={`npm run dev`} let:highlighted>
            <LineNumbers {highlighted} />
        </Highlight>
        <p>Projekt buildelése</p>
        <Highlight language={bash} code={`npm run build`} let:highlighted>
            <LineNumbers {highlighted} />
        </Highlight>
        <p>git commit -m "commit message"</p>
    </div>
</div>

<style>
    div.cont {
        margin: 10px;
        padding: 10px;
        box-shadow: 1px 1px 4px black;
        border: solid 10px gray;
        border-radius: 20px;
    }
    p {
        padding: 0px;
        padding-left: 72px;
        margin: 0px;
        background-color: #282c34;
        color: white;
        font-family: monospace;
    }
</style>
