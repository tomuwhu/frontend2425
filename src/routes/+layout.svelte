<script>
    import { atomOneDark } from "svelte-highlight/styles"
    import { page } from "$app/stores"
    $: currentRoute = $page.url.pathname
    const check = s => {
        let [a, b, c,...z] = s.split("/")
        return a + b + c
    }
    const menu = [
        { name: "Példaprogramok", href: "/frontend2425/peldaprog" },
        {
            name: "Tananyag",
            href: "/frontend2425/sveltetut/new_proj"
        },
        { name: "Portfólió követelmények", href: "/frontend2425/portfolio" },
        { name: "Frontend tematika", href: "/frontend2425/tematika" }
    ]
</script>

<svelte:head>
    {@html atomOneDark}
    <style>
        a {
            all: unset;
            cursor: pointer;
        }
        a:hover {
            background-color: gray;
        }
        body {
            margin: 0px;
            background-color: #d5e4f3;
        }
        a.menu {
            padding: 0px;
            padding-left: 20px;
            padding-right: 20px;
            margin-bottom: 0px;
            white-space: nowrap;
            color: white;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        a.menu.selected {
            background-color: #d5e4f3;
            color: black;
        }
        a.menu:hover {
            background-color: rgb(85, 107, 99);
        }
        menu {
            margin: 0px;
            background-color: black;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        h1 {
            text-align: center;
            color: rgb(8, 92, 98);
            text-shadow: 1px 1px 3px gray;
            margin-top: 0px;
            font-size: 20px;
        }
    </style>
</svelte:head>
<menu>
    {#each menu as item}
        <a
            class="menu {check(currentRoute) == check(item.href)
                ? 'selected'
                : 'norm'}"
            href={item.href}>{item.name}</a
        >
    {/each}
</menu>
<slot></slot>
