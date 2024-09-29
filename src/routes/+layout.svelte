<script>
    import { atomOneDark } from "svelte-highlight/styles";
    import { page } from "$app/stores";
    $: currentRoute = $page.url.pathname;
    const menu = [
        { name: "Órai munka és tananyagok", href: "/" },
        { name: "Portfólió követelmények", href: "/portfolio" },
        { name: "Frontend tematika", href: "/tematika" },
        { name: "Új (Vite-Svelte) projekt létrehozása", href: "/createsvelte" },
    ];
</script>

<svelte:head>
    {@html atomOneDark}
    <style>
        body {
            margin: 0px;
            background-color: blackMetal;
        }
        a.menu {
            padding: 0px;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 0px;
            white-space: nowrap;
            color: white;
        }
        a.menu.selected {
            background-color: white;
            color: black;
        }
        a.menu:hover {
            background-color: rgb(85, 107, 99);
        }
        menu {
            margin: 0px;
            background-color: black;
            text-align: center;
        }
    </style>
</svelte:head>
<menu>
    {#each menu as item}
        <a
            class="menu {currentRoute === item.href ? 'selected' : 'norm'}"
            href={item.href}>{item.name}</a
        >
    {/each}
</menu>
<slot></slot>
