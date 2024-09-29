<script>
    const data = [
		{
			id: 1,
			sz: [1, 2],
			date: '2024.09.05.',
			theme: 'HTML+CSS alap',
			source: 'https://github.com/tomuwhu/2024szft_example01',
			online: 'https://tomuwhu.github.io/2024szft_example01/'
		},
		{
			id: 2,
			sz: [3],
			date: '2024.09.05.',
			theme: 'JavaScript',
			source: 'https://github.com/tomuwhu/2024szft_example01/blob/main/p2/engine.js',
			online: 'https://tomuwhu.github.io/2024szft_example01/p2'
		},
		{
			id: 3,
			sz: [4, 7],
			date: '2024.09.11.',
			theme: 'JavaScript',
			source: 'https://github.com/tomuwhu/2024szft_example01/blob/main/p3/egy.js',
			online: 'https://tomuwhu.github.io/2024szft_example01/p3'
		},
		{
			id: 4,
			sz: [8, 10],
			date: '2024.09.12.',
			theme: `<a 
				href="https://kit.svelte.dev/docs/adapter-static" 
				target="sssg">
				SvelteKit Static Site Generator</a>`
		},
		{
			id: 5,
			sz: [11, 14],
			date: '2024.09.18.',
			theme: '<a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> Számológép',
			source: 'https://github.com/tomuwhu/sov02_sveltekit',
			online: 'https://tomuwhu.github.io/sov02_sveltekit/'
		},
		{
			id: 5,
			sz: [15, 17],
			date: '2024.09.19.',
			theme: '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Reversi',
			source: 'https://github.com/tomuwhu/reversi/blob/master/src/App.svelte',
			online: 'https://tomuwhu.github.io/reversi/'
		},
		{
			id: 6,
			sz: ['-'],
			date: '-',
			theme: '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Órarend generator',
			source: 'https://github.com/tomuwhu/orarend_generator_svelte/blob/master/src/App.svelte',
			online: 'https://tomuwhu.github.io/orarend_generator_svelte/'
		},
		{
			id: 7,
			sz: [18, 21],
			date: '2024.09.25.',
			theme: '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Routing',
			source: 'https://github.com/tomuwhu/App-routing/tree/master/src',
			online: 'https://tomuwhu.github.io/App-routing'
		},
		{
			id: 8,
			sz: [22, 24],
			date: '2024.09.26.',
			theme: '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Osztályórarend',
			source: 'https://github.com/tomuwhu/fetchex',
			online: 'https://tomuwhu.github.io/fetchex'
		},
		{
			id: 9,
			sz: ['Esti tag'],
			date: '2024.09.27.',
			theme: '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Aknakereső',
			source: 'https://github.com/tomuwhu/svelte-aknakereso',
			online: 'https://tomuwhu.github.io/svelte-aknakereso/'
		}
	]
</script>
<div class="cont">
    <h1>Szakképzési oldal 2024/25</h1>
    <hr />
    <a class="x" href="https://discord.gg/q4G2k479Zw" target="_blank"
	>Discord Server Invite: q4G2k479Zw</a
    >
    <hr />
    <table id="t1">
        {#each data as item}
		<tr>
            {#if item.sz[1]}
            <td class="id">{item.sz[0]}-{item.sz[1]}.</td>
			{:else}
            <td class="id">{item.sz[0]}.</td>
			{/if}
			<td class="t">{item.date}</td>
			<td class="t">{@html item.theme}</td>
			{#if item.source}
            <td class="i1"><a target="_blank" href={item.source}>👓</a></td>
			{/if}
			{#if item.online}
            <td class="i2"><a target="_blank" href={item.online}>💻</a></td>
			{/if}
		</tr>
        {/each}
    </table>
</div>
    
<style>
    div.cont {
        text-align: center;
    }
    h1 {
		font-family: 'Courier New', Courier, monospace;
		padding: 20px;
		font-size: 25px;
	}

	table#t1 {
		margin: auto;
		border-collapse: separate;
        border-spacing: 6px;
        background-color: rgb(222, 217, 210);
        border: solid 16px gray;
        border-radius: 30px;
        box-shadow: 1px 1px 4px black;
	}
	td {
		padding-left: 10px;
		padding-right: 10px;
	}
	.id {
		text-align: center;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		white-space: nowrap;
		color: rgb(101, 101, 43);
	}
	td.i1,
	td.i2 {
		font-size: 30px;
		cursor: pointer;
		padding: 0px;
	}
	td.t {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		text-shadow: 1px 1px 4px gray;
		color: rgb(37, 78, 95);
	}
	td.i1:hover,
	td.i2:hover {
		text-shadow: 1px 1px 4px black;
	}
	a.x {
        text-decoration: none;
		padding: 3px;
		padding-left: 25px;
		padding-right: 25px;
		margin: 3px;
		width: 200px;
		border-radius: 6px;
		background-color: #a9cedb;
		text-decoration: none;
	}
	a.x:hover {
		background-color: #a9dbd4;
		border: solid 3px rgb(159, 69, 69);
	}
</style>