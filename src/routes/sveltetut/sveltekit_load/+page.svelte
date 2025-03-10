<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import bash from "svelte-highlight/languages/bash";
</script>

<div class="cont">
    <div class="p">SvelteKit (FullStack) projekt létrehozása:</div>
    <Highlight
        language={bash}
        code={`npx sv create
# Ajánlott add-ons: drizzle, lucia
cd <myproject> #projekt könyvtár kiválasztása
code . #vscode elindítása
npm run dev`}
    ></Highlight>
    <div class="p">SvelteKit Load / Actions (+page.server.js)<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`
// szerver => frontend
export const load = ({locals}) => {
    return {
        ...
    }
} // Read it in +page.svelte: let { data } = $props()

// frontend => szerver
export const actions = {
    default: async ({ locals, request }) => {
        const formData = await event.request.formData();
        const ... = formData.get('...'); // form input name
    }
} // Send data from +page.svelte: <form method="post" ...`
}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
    <div class="p">SvelteKit API (+server.js)<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`import { json } from '@sveltejs/kit';
export const POST = async ({ request }) => {
    console.log(await request.json())
    return json({ ... })
};`
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
