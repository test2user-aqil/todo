<script lang="ts">
	import '$lib/style.css';
	import GithubLink from '$lib/components/GithubLink.svelte';
	import Todo from '$lib/components/Todo.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import { filteredTodos, filter } from '$lib/stores/todoStore';

	let filterValue = false;

	function setFilter(value: boolean) {
		filterValue = value;
	}
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
			<div class="status">
				<p class="total">Total: {$filteredTodos.length}</p>
				<div class="filter">
					{#if $filter}
						<button
							on:click={() => {
								$filter = false;
							}}
						>
							<span class="material-symbols-outlined"> done </span>Hide completed
						</button>
					{:else}
						<button
							on:click={() => {
								$filter = true;
							}}
						>
							<span class="unchecked" />Hide completed
						</button>
					{/if}

					<span />
				</div>
			</div>
		</div>
		<div class="todos">
			{#each $filteredTodos as todo}
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
		gap: 0.375rem;
	}

	.status {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 0.75rem;
		font-size: 0.875rem;
	}

	.total {
		color: var(--fg-muted);
	}

	.filter button {
		background: none;
		border: none;
		color: var(--fg);
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}
	.filter button span {
		width: 1rem;
		height: 1rem;
		border-radius: 0.25rem;
	}

	.filter button .material-symbols-outlined {
		background: var(--accent-1);
		display: flex;
		font-size: 1rem;
	}

	.unchecked {
		border: 2px solid var(--accent-1);
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

	@media (max-width: 700px) {
		.todos {
			padding: 0 0.25rem;
		}
	}
</style>
