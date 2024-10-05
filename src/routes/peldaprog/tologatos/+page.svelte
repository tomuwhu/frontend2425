<script>
    import { onMount } from "svelte"
    var n = 5
    const t = [...Array(n).keys()].map(y =>
        [...Array(n).keys()].map((x) => y * n + x + 1))
    t[n - 1][n - 1] = ""
    const check = (x, y) => {
        let v = [];
        [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([dx, dy]) => {
            if (t[y + dy] && t[y + dy][x + dx] === "") v = [dx, dy]
        })
        return v
    };
    const click = (x, y) => {
        let [dx, dy] = check(x, y)
        if (!dx && !dy) return
        t[y + dy][x + dx] = t[y][x]
        t[y][x] = ""
    };
    onMount(() => {
        for (let i = 0; i < n ** 5; i++) 
            click(Math.floor(Math.random() * n), Math.floor(Math.random() * n))
    })
</script>
<br /><br />
<h1>Kirakós</h1>
<div class="cont">
    <table>
        {#each t as row, y}
            <tr>
                {#each row as cell, x}
                    <td
                        class={
                        (t[y - 1] && t[y - 1][x] === "") || (t[y + 1] && t[y + 1][x] === "") ||
                        (t[y] && t[y][x + 1] === "") || (t[y] && t[y][x - 1] === "")
                            ? "sz" : t[y] && t[y][x] === "" ? "w" : ""
                        } on:click={() => click(x, y)}>{cell}</td
                    >
                {/each}
            </tr>
        {/each}
    </table>
</div>
<style>
    table {
        margin: auto;
        background-color: aquamarine;
        border-spacing: 10px;
        border-radius: 14px;
        border: solid 1px gray;
    }
    td.w {
        visibility: hidden;
    }
    td {
        border-radius: 9px;
        border: solid 1px gray;
        padding: 5px;
        text-align: center;
        width: 30px;
        height: 30px;
        cursor: default;
        background-color: antiquewhite;
    }
    td.sz {
        cursor: pointer;
        background-color: rgb(188, 242, 225);
    }
    td.sz:hover {
        box-shadow: 1px 1px 3px inset black;
    }
    div.cont {
        color: rgb(36, 57, 66);
        margin-top: 10px;
    }
</style>
