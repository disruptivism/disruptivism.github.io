<script>
	import '../app.css';
	import Nav from './Nav.svelte';
	import PageFooter from './page_footer.svelte';
</script>

<div class="sticky top-0 z-50">
	<Nav />
</div>

<slot />

<div class=" bottom-0">
	<PageFooter />
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
	* {
		font-family: 'Urbanist', sans-serif;
		font-optical-sizing: auto;
		font-weight: 300;
		font-style: normal;
	}
</style>
