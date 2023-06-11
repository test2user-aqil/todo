<script lang="ts">
	import github_mark from '$lib/assets/github-mark-white.svg';
</script>

<a href="https://github.com/test2user-aqil/todo" target="_blank" rel="noopener noreferrer">
	<img src={github_mark} alt="" />
	test2user-aqil/todo
</a>

<style>
	a {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 1rem;
		gap: 0.5rem;
		background: var(--dark-1);
		filter: drop-shadow(var(--drop-shadow));
		border-radius: 1rem;
		color: var(--fg);
		text-decoration: none;
		font-family: 'Roboto Mono', monospace;
		font-size: 0.875rem;
	}

	a img {
		height: 1rem;
		width: 1rem;
	}
</style>
