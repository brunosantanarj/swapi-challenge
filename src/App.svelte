<script>
	import Title from './components/Title/Index.svelte';
	import Peoples from './components/Peoples/Index.svelte';
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
	<Peoples />
</div>
