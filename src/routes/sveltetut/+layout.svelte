<script>
  import { page } from "$app/stores";
  $: currentRoute = $page.url.pathname;
  const menu = [
    { name: "Vite - Új projekt", href: "/frontend2425/sveltetut/new_proj" },
    { name: "REST API", href: "/frontend2425/sveltetut/rest_api" },
    { name: "SvelteKit + Load / Actions", href: "/frontend2425/sveltetut/sveltekit_load" },
    { name: "SvelteKit FullStack Video tananyag", href: "/frontend2425/sveltetut/sveltekit_video" },
  ];
</script>

<menu class="am">
  {#each menu as item}
    <span> </span>
    <a
      class="am {currentRoute.includes(item.href) ? 'selected' : 'norm'}"
      href={item.href}>{item.name}</a
    >
  {/each}
</menu>
<slot></slot>

<style>
  menu.am {
    padding-top: 10px;
    background-color: #d5e4f3;
  }
  a.am {
    font-size: 12px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    padding: 0px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0px;
    white-space: nowrap;
    color: rgb(65, 25, 25);
    padding-top: 5px;
    padding-bottom: 5px;
    border: solid 0.5px gray;
    border-radius: 10px;
  }
  a.am.selected {
    background-color: black;
    color: yellow;
    cursor: default;
  }
  a.am.selected:hover {
      background-color: black;
      color: yellow;
  }
  a.am:hover {
    background-color: rgb(160, 164, 122);
    color: rgb(255, 255, 122);
  }
</style>
