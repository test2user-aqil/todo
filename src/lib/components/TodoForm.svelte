<script lang="ts">
	import { addTodo } from '$lib/stores/todoStore';

	let title: string;

	const handleSubmit = () => {
		addTodo(title);
		title = '';
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={title} placeholder="Add task..." />
	<button type="submit"><span class="material-symbols-outlined"> add </span></button>
</form>

<style>
	form {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.5rem;
		background: var(--dark-1);
		gap: 0.625rem;
		border-radius: 1rem;
		height: 3rem;
		width: 100%;
		filter: drop-shadow(var(--drop-shadow));
	}

	input {
		background-color: var(--dark-1);
		border: none;
		padding-left: 0.5rem;
		outline: 0;
		color: var(--fg);
		flex-grow: 1;
		font-size: 1rem;
	}
	.material-symbols-outlined {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
	}
	button {
		border: none;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2rem;
		widows: 2rem;
		background: var(--accent-1);
		cursor: pointer;
	}

	.material-symbols-outlined {
		color: var(--fg);
	}
</style>
