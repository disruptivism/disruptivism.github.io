<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-grow');
					console.log(entry);
				} else {
					entry.target.classList.remove('animate-grow');
				}
			});
		});
		const elements = document.querySelectorAll('.will-grow');
		elements.forEach((element) => observer.observe(element));
	});
</script>

<div
	class="bg-ctp-base h-[calc(100vh-80px)] w-screen flex flex-col items-center justify-center bg-[url('/src/lib/images/blob-scene-haikei.svg')] bg-no-repeat bg-cover"
>
	<div class=""></div>
	<div class=" text-8xl text-ctp-text flex flex-row items-center justify-center">
		<div>Disruptivism</div>
		<div class="w-[2px] h-32 bg-ctp-subtext0 m-10"></div>
		<div>The Future</div>
	</div>
	<div class=" text-ctp-subtext1 text-3xl text-center ">
		Find our lord and saviour through the power of Disruption.<br />
		Join our community today.<br />
		Find eternal salvation in Philip Mackessy.
	</div>
</div>
<div class=" bg-ctp-text h-[33vh] w-screen flex flex-row items-center justify-center">
	<div class="flex flex-col items-center justify-center">
		<div class="text-8xl text-ctp-surface0 italic uppercase">Achive complete disruption.</div>
		<div class="w-[90rem] flex flex-row justify-start">
			<div class="will-grow animate-grow h-[2px] w-[90rem] bg-ctp-surface0 m-2 origin-left"></div>
		</div>
	</div>
</div>
<div
	class=" bg-ctp-base h-[calc(67vh-80px)] w-screen flex flex-col items-center justify-center text-ctp-text text-5xl"
>
	<div>Upcoming Events</div>
	<div class="flex flex-row items-center justify-center m-4">
		<div class="w-96 h-60 bg-ctp-text m-4"></div>
		<div class="w-96 h-60 bg-ctp-text m-4"></div>
		<div class="w-96 h-60 bg-ctp-text m-4"></div>
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
	.will-grow {
		transform-origin: left1;
		transform: scaleX(0);
		transition: transform 1.5s cubic-bezier(0.39, 0.575, 0.565, 1);
		transition-delay: 200ms;
	}
	.animate-grow {
		transform: scaleX(1);
		transition-delay: 0;
	}
</style>
