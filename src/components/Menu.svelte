<script lang="ts">
	import MenuLink from "./MenuLink.svelte";
</script>

<div class="menu-bar">
    <MenuLink to="/" title="Home" />
    <MenuLink to="/roadmap" title="Roadmap" />
</div>

<style lang="scss">
    .menu-bar {
        width: 20%;
        height: 93%;

        margin: 1%;
        padding: 1% 1.25%;

        border-radius: 8px;
        background-color: #3f4140;
    }
</style>
