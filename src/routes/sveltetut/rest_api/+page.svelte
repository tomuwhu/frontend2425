<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
</script>

<div class="cont">
    <div class="p">REST API működése<br /></div>
        <div class="p2">
<table>
    <tr><td colspan=3>A kliensek ...</td></tr>
    <tr>
        <td></td>
        <td>-</td>
        <td>a GET metódus segítségével érik el az erőforrásokat, amelyek a kiszolgáló megadott URL-címén találhatók, paramétereket küldhetnek a RESTful API kérésben, hogy utasítsák a szervert az adatok szűrésére a küldés előtt.</td>
    </tr>
    <tr>
        <td></td>
        <td>-</td>
        <td>a POST metódus segítségével küldik el az adatokat a szervernek. Tartalmazza az elküldendő adatot a kéréssel együtt.</td>
    </tr>
    <tr>
        <td></td>
        <td>-</td>
        <td>a PUT és , PATCH metódusok segítségével tudják módosítani a szerveren meglévő erőforrásokat.</td>
    </tr>
    <tr>
        <td></td>
        <td>-</td>
        <td>a DELETE metódus segítségével törölhetnek egy erőforrást.
Például termék törléséhez a webshopból a DELETE metódust használják.
        </td>
    </tr>
</table>
    </div>
    <div class=p>
        <img class="ra" src="/frontend2425/rest-api.png" alt="REST API">
    </div>
    <div class="p">Kezdeti adatok lekérdezése a szerverről (GET metódus):<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`//App.js <script></sript> -be:
import { onMount } from "svelte";
onMount(async () => {
    let data = await fetch('https://tomuwhu.github.io/orarend_generator_svelte/tanarok.json').then(v =>v.json())
    console.log(data)
})`}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
    <div class="p">Adat küldése szerverre: POST (PUT, PATCH, DELETE) metódus:<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`async () => { //Svelte eseménybe pl.: on:click={async () => { ...
  ...
  const rawResponse = await fetch('http://localhost:3000/post/', {
    method: 'POST', //v. PUT v. PATCH v. DELETE
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  }).then(v => v.json())
  console.log(answer)
  ...
}`}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
    <div class="p">Express Server API:<br /></div>
    <div class="code">
        <div class="codein">
            <Highlight
                language={javascript}
                code={`import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({x: 1, y: 2}))
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)`}
                let:highlighted
            >
                <LineNumbers {highlighted} />
            </Highlight>
        </div>
    </div>
</div>



<style>
    img {
        margin: 10px;
        height: 150px;
        border-radius: 30px;
        border:solid 13px rgb(22, 103, 103);
        box-shadow: 1px 1px 5px black;
    }
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
