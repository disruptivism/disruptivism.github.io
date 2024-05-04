<script>
	import { onMount } from 'svelte';

	$: dark = false;
	$: loaded = false;

	// @ts-expect-error --- body cannot be undefined as loaded cannot be true until onMount ---
	$: if (loaded) document.querySelector('body').classList.toggle('dark', dark);
	onMount(() => {
		loaded = true;
	});
</script>

<div
	class=" w-screen h-20 p-4 px-16 flex flex-row items-center justify-between bg-ctp-surface0 dark:bg-red-500 main text-ctp-text border-b-[1px] border-ctp-text"
>
	<div class="flex flex-row items-center justify-between">
		<img src="/src/lib/images/logo.png" alt="missing" class="w-16" />
	</div>
	<div class="flex flex-row items-center gap-4">
		<a href="/" class="hover:text-ctp-subtext0 transition-colors duration-300">Locations</a>
		<span class="w-[1px] h-8 bg-ctp-subtext1"></span>
		<a href="/" class="hover:text-ctp-subtext0 transition-colors duration-300">Texts</a>
		<span class="w-[1px] h-8 bg-ctp-subtext1"></span>
		<a href="/" class="hover:text-ctp-subtext0 transition-colors duration-300">Festivals</a>
		<span class="w-[1px] h-8 bg-ctp-subtext1"></span>
		<a href="/" class="hover:text-ctp-subtext0 transition-colors duration-300">Joining</a>
		<span class="w-[1px] h-8 bg-ctp-subtext1"></span>
		<a href="/" class="hover:text-ctp-subtext0 transition-colors duration-300">About Us</a>
	</div>
	<button on:click={() => (dark = !dark)} class="flex flex-row items-center gap-1">
		<div class="">light</div>
		<div>/</div>
		<di class=" underline">dark</di>
	</button>
</div>
