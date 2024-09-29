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
        Projeknév megadása Svelte választása<br />
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
    </div>
</div>

<style>
    p {
        padding: 0px;
        margin: 0px;
        background-color: gray;
    }
</style>
