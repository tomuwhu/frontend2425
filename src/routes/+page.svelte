<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import atomOneDark from "svelte-highlight/styles/atom-one-dark";
    const code = "const add = (a: number, b: number) => a + b;";
</script>

<svelte:head>
    {@html atomOneDark}
</svelte:head>

<Highlight language={javascript} {code} let:highlighted>
    <LineNumbers {highlighted} />
</Highlight>
