<script>
	import { page } from '$app/stores';
</script>

<div
	class="w-screen h-[calc(100vh-80px-192px)] bg-ctp-base flex flex-col items-center justify-center"
>
	<div class=" text-8xl text-ctp-text flex flex-row items-center justify-center">
		<div>{$page.status}</div>
		<div class="w-[2px] h-32 bg-ctp-subtext0 m-10"></div>
		<div>{$page.error && $page.error.message}</div>
	</div>
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
