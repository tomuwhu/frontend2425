<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
</script>

<div class="cont">
    <div class="p">SvelteKit Load / Actions<br /></div>
        <div class="p2">

    </div>
    <div class="p">Szerver oldal (+page.server.js):<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`export const load = ({locals}) => {
    return {
        ...
    }
} // Read it in +page.svelte: let { data } = $props()
export const actions = {
    default: async ({ locals, request }) => {
        ...
    }
} // Send data from +page.svelte: <form method="post" ...`
}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
</div>



<style>
    :global(code.hljs) {
        border-radius: 15px;
        background-color: rgb(10, 62, 62);
        border: solid 9px rgb(19, 82, 60);
        box-shadow: 0px 0px 3px inset white;
    }
    div.p2 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        white-space: pre-wrap;
        font-size: 14px;
        color:rgb(87, 142, 181);
    }
    div.p2 table {
        border-radius: 15px;
        border: solid 14px rgb(135, 173, 163);
        border-spacing: 5px;
        background-color: rgb(253, 255, 240);
        box-shadow: 1px 1px 4px inset black;
    }
    div.p2 table tr td {
        vertical-align: top;
        min-width: 10px;
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
