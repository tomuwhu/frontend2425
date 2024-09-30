<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
</script>

<div class="cont">
    <div class="p">Kezdeti adatok lekérdezése a szerverről:<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`//App.js <script></sript> -be:
import { onMount } from "svelte";
onMount(async () => {
    let data = await fetch('https://tomuwhu.github.io/orarend_generator_svelte/tanarok.json')
        .then(v =>v.json())
    console.log(data)
})`}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
    <div class="p">POST data:<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`async () => {
  const rawResponse = await fetch('http://localhost:3000/post/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  })
  let answer = await rawResponse.json()
  console.log(answer)
}`}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
</div>

<style>
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
