<script>
	import Title from './components/Title.svelte';
	export let name;
</script>

<style>
	.wrapper {
		position: relative;
		z-index: 2;
	}
</style>

<div class="wrapper">
	<Title />
</div>
