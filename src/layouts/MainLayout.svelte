<script lang="ts">
	import Menu from "../components/Menu.svelte";
</script>

<div class="layout">
    <div class="top">
        <Menu />
        
        <slot name="top">

        </slot>
    </div>

    <slot name="main"></slot>
</div>

<style lang="scss">
    .layout {
        width: 100%;
        height: 100%;
        
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        & > .top {
            width: 100%;
            height: 100%;
        
            margin: 0;
            padding: 0;

            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }
</style>
