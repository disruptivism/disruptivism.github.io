<div
	class="w-screen h-[calc(100vh-80px)] bg-ctp-base flex flex-col items-center justify-center bg-[url('/src/lib/images/blob-scene-haikei.svg')] bg-no-repeat bg-cover"
>
	<div
		class=" w-[30rem] h-[36rem] border-[1px] border-ctp-text bg-ctp-base bg-opacity-60 backdrop-blur-xl flex flex-col items-center justify-between p-5 shadow-lg shadow-ctp-crust"
	>
		<div class=" text-4xl text-ctp-text flex flex-row items-center justify-center">Sign Up</div>
		<form
			action="?/signup"
			method="POST"
			class="flex flex-col items-center justify-evenly text-ctp-text text-xl"
		>
			<div class="flex flex-col justify-evenly m-1">
				<label for="name">
					<span>Name</span>
				</label>
				<input
					type="text"
					name="name"
					class="h-10 w-64 px-2 bg-ctp-surface0 border-[1px] border-ctp-subtext0 focus:outline-none focus:border-ctp-text"
				/>
			</div>
			<div class="flex flex-col justify-evenly m-1">
				<label for="email">
					<span>Email</span>
				</label>
				<input
					type="email"
					name="email"
					class="h-10 w-64 px-2 bg-ctp-surface0 border-[1px] border-ctp-subtext0 focus:outline-none focus:border-ctp-text"
				/>
			</div>
			<div class="flex flex-col justify-evenly m-1">
				<label for="password">
					<span>Password</span>
				</label>
				<input
					type="password"
					name="password"
					class="h-10 w-64 px-2 bg-ctp-surface0 border-[1px] border-ctp-subtext0 focus:outline-none focus:border-ctp-text"
				/>
			</div>
			<div class="flex flex-col justify-evenly m-1">
				<label for="passwordConfirm">
					<span>Confirm Password</span>
				</label>
				<input
					type="password"
					name="passwordConfirm"
					class="h-10 w-64 px-2 bg-ctp-surface0 border-[1px] border-ctp-subtext0 focus:outline-none focus:border-ctp-text"
				/>
			</div>
			<div><button type="submit" class=" m-1 hover:text-ctp-subtext0 transition-colors duration-300 underline">Submit</button></div>
		</form>
		<div class="text-ctp-text text-xl">Or <a class="text-ctp-lavender hover:text-ctp-blue underline transition-colors duration-300" href="/login">Login</a> if you already have an account.</div>
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
