<script lang="ts">
	import '$lib/style.css';
	import GithubLink from '$lib/components/GithubLink.svelte';
	import Todo from '$lib/components/Todo.svelte';
</script>

<svelte:head>
	<title>Todo &bull; test2user-aqil</title>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<div class="container">
	<div class="header">
		<h1>TODO</h1>
		<p>Add Todos and manage them!</p>
		<GithubLink />
	</div>

	<div class="content">
		<div class="input" />
		<div class="todos">
			<Todo id={1} title="Test todo1" completed={true} />
			<Todo id={2} title="Test todo2" completed={false} />
		</div>
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

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		align-self: stretch;
	}

	.todos {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 1rem;
		gap: 1rem;
		order: 1;
		align-self: stretch;
	}
</style>
