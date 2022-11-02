<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
    import { page } from "$app/stores";


    export let to = "#";
    export let title = "Link";

    $: isActive = $page.url.pathname == to;

    const handleClick = () => {
        if (to.startsWith("/") && base) goto(`${base}/${to}`);
        else goto(to);
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu-link" class:active={isActive} on:click={handleClick}>
    <p>{title}</p>
</div>

<style lang="scss">
    .menu-link {
        width: 90%;
        height: 3%;

        margin: 1%;
        padding: 3% 4%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        color: white;
        border: 1px solid #ffffff4f;
        cursor: pointer;
        outline: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        user-select: none;

        border-radius: 8px;
        background-color: transparent;

        transition:
            color 0.5s ease,
            border-color 0.5s ease,
            background-color 0.5s ease;
        
        &:not(:last-child) {
            margin-bottom: 4%;
        }

        &:hover {
            color: black;
            border-color: #ffffff6c;
            background-color: #ffffff6c;
        }

        &.active {
            border-color: #004f8f;
            background-color: #004f8f;

            &:hover {
                color: white;
                border-color: #006faf;
                background-color: #006faf;
            }
        }
    }
</style>
