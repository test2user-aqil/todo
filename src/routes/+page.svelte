<script lang="ts">
	import '$lib/style.css';
	import GithubLink from '$lib/components/GithubLink.svelte';
	import Todo from '$lib/components/Todo.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import { todos } from '$lib/stores/todoStore';
</script>

<svelte:head>
	<title>Todo &bull; test2user-aqil</title>
</svelte:head>

<div class="container">
	<div class="header">
		<h1>TODO</h1>
		<p>Add Tasks and manage them!</p>
		<GithubLink />
	</div>

	<div class="content">
		<div class="form">
			<TodoForm />
		</div>
		<div class="todos">
			{#each $todos as todo}
				<Todo id={todo.id} title={todo.title} completed={todo.completed} />
			{/each}
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
		gap: 4rem;
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

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
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
