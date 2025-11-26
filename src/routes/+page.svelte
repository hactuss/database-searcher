<script>
	let uid = $state();
	let progress3 = $state(0);

	// setInterval((uid = Math.floor(Math.random() * 100)), 1000);
	const list = ['hello', ':)', 'search for anything'];

	function resolveAfter2Seconds() {
		return new Promise((resolve) => {
			setTimeout(() => {
				//resolve(Math.floor(Math.random() * 100));
				resolve(list[Math.floor(Math.random() * list.length)]);
			}, 1500);
		});
	}
	function progressbar() {
		let progress2 = 0;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Math.floor(Math.random() * 100));
			}, 1500);
		});
	}

	async function asyncCall() {
		const result = await resolveAfter2Seconds();
		progress3 = await progressbar();
		progress3 = await progressbar();
		progress3 = await progressbar();
		progress3 = 100;
		uid = result;
	}
	function capped() {
		asyncCall();
	}
	capped();
	let input = '';
	function handleKeydown(event) {
		if (event.key == 'Enter') {
			console.log(input);
		} else {
			return null;
		}
	}
	function presssearch() {
		console.log(input);
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<main id="MAIN_CONTAINER">
	<img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Compactcassette.jpg" alt="bruh" />
	<a href="https://hactuss.vercel.app/" >hactuss</a>
	<h1>{uid}</h1>
	<div id="SEARCH_BOX">
		<input type="text" contextmenu="hello" bind:value={input} />
		<button onclick={presssearch}>Search</button>
	</div>
	<br />
	{#await resolveAfter2Seconds()}
		<p>waiting...</p>
	{:then uid}
		<p>awaited svelte snipped, welcome</p>
	{/await}

	<div id="loadingbar">
		<div id="progress" style:width={progress3 + '%'}>{progress3}%</div>
	</div>
	<p>look @ console</p>
</main>

<style>
	#MAIN_CONTAINER {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 99vh;
	}
	#SEARCH_BOX {
		background-color: rgba(0 0 200 0.5);
	}
	#loadingbar {
		height: 1rem;
		width: 100px;
		background-color: red;
	}
	#progress {
		height: 1rem;
		background-color: blue;
	}
</style>
