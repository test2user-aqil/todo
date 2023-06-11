<script lang="ts">
	import '$lib/style.css';
	import GithubLink from '$lib/components/GithubLink.svelte';
</script>

<svelte:head>
	<title>Todo &bull; test2user-aqil</title>
</svelte:head>

<div class="container">
	<div class="header">
		<h1>TODO</h1>
		<p>Add Todos and manage them!</p>
		<GithubLink />
	</div>

	<div class="content">
		<div class="input" />
		<div class="todos" />
	</div>
</div>

<style>
	.container {
		max-width: 700px;
		margin: 0 auto;
		padding: 4rem 0.625rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
