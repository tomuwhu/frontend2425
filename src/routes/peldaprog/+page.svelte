<script>
  const data = [
    {
      id: 1,
      sz: [1, 2],
      date: "2024.09.05.",
      theme: "HTML+CSS alap",
      source: "https://github.com/tomuwhu/2024szft_example01",
      online: "https://tomuwhu.github.io/2024szft_example01/",
    },
    {
      id: 2,
      sz: [3],
      date: "2024.09.05.",
      theme: "JavaScript",
      source:
        "https://github.com/tomuwhu/2024szft_example01/blob/main/p2/engine.js",
      online: "https://tomuwhu.github.io/2024szft_example01/p2",
    },
    {
      id: 3,
      sz: [4, 7],
      date: "2024.09.11.",
      theme: "JavaScript",
      source:
        "https://github.com/tomuwhu/2024szft_example01/blob/main/p3/egy.js",
      online: "https://tomuwhu.github.io/2024szft_example01/p3",
    },
    {
      id: 4,
      sz: [8, 10],
      date: "2024.09.12.",
      theme: `<a 
				href="https://kit.svelte.dev/docs/adapter-static" 
				target="sssg">
				SvelteKit Static Site Generator</a>`,
    },
    {
      id: 5,
      sz: [11, 14],
      date: "2024.09.18.",
      theme:
        '<a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> Számológép',
      source: "https://github.com/tomuwhu/sov02_sveltekit",
      online: "https://tomuwhu.github.io/sov02_sveltekit/",
    },
    {
      id: 5,
      sz: [15, 17],
      date: "2024.09.19.",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Reversi',
      source: "https://github.com/tomuwhu/reversi/blob/master/src/App.svelte",
      online: "https://tomuwhu.github.io/reversi/",
    },
    {
      id: 6,
      sz: ["-"],
      date: "-",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Órarend generator',
      source:
        "https://github.com/tomuwhu/orarend_generator_svelte/blob/master/src/App.svelte",
      online: "https://tomuwhu.github.io/orarend_generator_svelte/",
    },
    {
      id: 7,
      sz: [18, 21],
      date: "2024.09.25.",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Routing',
      source: "https://github.com/tomuwhu/App-routing/tree/master/src",
      online: "https://tomuwhu.github.io/App-routing",
    },
    {
      id: 8,
      sz: [22, 24],
      date: "2024.09.26.",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Osztályórarend',
      source: "https://github.com/tomuwhu/fetchex",
      online: "https://tomuwhu.github.io/fetchex",
    },
    {
      id: 9,
      sz: ["Esti tag"],
      date: "2024.09.27.",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Aknakereső',
      source: "https://github.com/tomuwhu/svelte-aknakereso",
      online: "https://tomuwhu.github.io/svelte-aknakereso/",
    },
    {
      id: 10,
      sz: [25, 32],
      date: "2024.10.02. - 024.10.03.",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Tologatós',
      source:
        "https://github.com/tomuwhu/frontend2425/blob/master/src/routes/peldaprog/tologatos/%2Bpage.svelte",
      online: "https://tomuwhu.github.io/frontend2425/peldaprog/tologatos",
    },
    {
      id: 11,
      sz: [33, 39],
      date: "2024.10.09. - 024.10.10.",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Komponens + Ellipszis',
      source: "https://github.com/tomuwhu/mai",
      online: "https://tomuwhu.github.io/mai/",
    },
    {
      id: 12,
      sz: ["Esti tag"],
      date: "2024.10.12.",
      theme:
        '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Óra + Számológép',
      source:
        "https://github.com/tomuwhu/vite_esti_fetch/blob/main/src/App.svelte",
      online: "https://tomuwhu.github.io/vite_esti_fetch/",
    },
    {
      id: 13,
      sz: [40, 46],
      date: "2024.10.16. - 024.10.17.",
      theme:
        'SvelteKit FullStack with <a href="https://my-json-server.typicode.com/" target="_blank">my-json-server</a>: Car database (Dávidnak)',
      source:
        "https://github.com/tomuwhu/autos",
      online: 'https://tomuwhu.github.io/autos/'
    },
    {
      id: 14,
      sz: ["Esti tag"],
      date: "2024.11.08.",
      theme:
        'Svelte-PHP FullStack on <a href="https://www.nethely.hu/" target="_blank">Nethely</a>',
      source:
        "https://github.com/tomuwhu/vite_nethely",
      online: 'https://vite.szte.eu/'
    },
    {
      id: 15,
      sz: ['??', '??'],
      date: "2025.01.08.",
      theme:
        'Tetris',
      source:
        "https://github.com/tomuwhu/tetris/blob/main/src/App.svelte",
      online: 'https://tomuwhu.github.io/tetris/'
    },
    {
			id: 16,
			sz: ['Esti tag'],
			date: '2025.01.11.',
			theme: '<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Snake Game',
			source: 'https://github.com/tomuwhu/kigyo/tree/main/src',
			online: 'https://tomuwhu.github.io/kigyo/'
		},
    {
			id: 17,
			sz: ['Nappali tagozat'],
			date: '2025.03.12.',
			theme: 'SvelteKit with Turso, Lucia and Drizzle',
			source: 'https://github.com/tomuwhu/turso',
			online: 'https://sveltekitwithturso.netlify.app/'
		}
  ];
</script>

<div class="cont">
  <h1 class="kh1">Szakképzési oldal 2024/25</h1>
  <hr />
  <table id="t0">
    <td>
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
    </td>
  </table>
</div>

<style>
  .id {
    height: 100%;
  }
  div.cont {
    text-align: center;
  }
  h1.kh1 {
    font-family: "Courier New", Courier, monospace;
    padding: 20px;
    font-size: 25px;
  }
  table#t0 {
    margin: auto;
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
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-shadow: 1px 1px 4px gray;
    color: rgb(37, 78, 95);
  }
  td.i1:hover,
  td.i2:hover {
    text-shadow: 1px 1px 4px black;
  }
</style>
