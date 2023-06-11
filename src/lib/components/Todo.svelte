<script lang="ts">
	export let id: number;
	export let title: string;
	export let completed: boolean;
</script>

<div class="todo">
	{#if completed}
		<span class="material-symbols-outlined completed"> done </span>
	{:else}
		<span class="pending" />
	{/if}

	{#if completed}
		<p class="title" style="text-decoration: line-through;">{title}</p>
	{:else}
		<p class="title">{title}</p>
	{/if}

	<span class="material-symbols-outlined remove"> remove </span>
</div>

<style>
	.todo {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 3rem;
		background: var(--dark-1);
		border-radius: 1rem;
		filter: drop-shadow(var(--drop-shadow));
		padding: 0.5rem;
		gap: 0.625rem;
	}

	.title {
		flex-grow: 1;
	}

	.material-symbols-outlined {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		width: 2rem;
		height: 2rem;
	}
	.pending {
		height: 2rem;
		width: 2rem;
		border: 2px solid var(--accent-1);
		border-radius: 0.5rem;
	}
	.completed {
		background: var(--accent-1);
	}
	.remove {
		background: var(--accent-2);
	}

	.pending,
	.completed,
	.remove {
		cursor: pointer;
	}
</style>
