<script>
    const charlist="²³⁴⁵⁶⁷⁸⁹ø±«»½½¾αβγδεφπλξ࿊⇐⇒⇦⇨←→↑↓⇔⇆⇧ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯ⇰⊕⊗⊙⊚⊛∞⌘⌫⏰⌛⏳⏻⏼⏿⏴⏵⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾"
    const intv = [
        [9312, 9691],
        [9728, 9983],
        [9985, 10174]
    ]
</script>
<h1><a href="https://gyakg.es6.eu/Brython/utf-8_list.html" target="_blank">UFT-8</a> karakterek</h1>
<div class="sample">
{#each charlist as char}
    <span>{char}</span>
{/each}
</div>
{#each intv as int}
    <hr>
    <div class="sample">
        {#each Array.from({length: int[1] - int[0] + 1}, (_, i) => int[0] + i) as chr}
            <span>{String.fromCharCode(chr)}</span>
        {/each}
    </div>
{/each}
<style>
    a {
        text-decoration: none;
        color: rgb(46, 129, 120);
    }
    a:hover {
        color: rgb(86, 86, 42);
        text-decoration: underline;
        background-color: transparent;
    }
    @import url('https://pvinis.github.io/iosevka-webfont/3.4.1/iosevka.css');
    .sample {
        font-family: "Iosevka", monospace;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
    .sample span{
        font-size: 3em;
        margin: 5px;
    }
</style>