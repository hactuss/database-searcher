<script>
  import Loadingbar from "$lib/components/loadingbar.svelte";
  let uid = $state();
  let progress2 = 0;
  let progress3 = $state(0);
  const list = ["hello", ":)", "search for anything"];
  let input = $state("");
  let posx = $state(0);
  let posy = $state(0);
  let nf = ["this will hurt (ultrakill)", "bruh"];
  let ths = "";
  //let der = $derived(input + " ");

  // setInterval((uid = Math.floor(Math.random() * 100)), 1000);

  export function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        //resolve(Math.floor(Math.random() * 100));
        resolve(list[Math.floor(Math.random() * list.length)]);
      }, 100);
    });
  }
  function progressbar() {
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
  function handleKeydown(event) {
    if (event.key == "Enter") {
      $inspect(input);
    }
  }
  function presssearch() {
    $inspect(input);
  }

  asyncCall();
</script>

<svelte:window onkeydown={handleKeydown} />

<main id="MAIN_CONTAINER">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Compactcassette.jpg"
    alt="bruh"
  />
  <a href="https://hactuss.vercel.app/">hactuss</a>
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

  <Loadingbar number={progress3} />

  <p>look @ console</p>
  <main>{input.length}</main>

  <div id="list">
    <div id="each">
      {#each input as msg}
        <p>{msg}</p>
      {:else}{/each}
    </div>
  </div>
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
  #list {
    border: "solid white 1px";
    min-width: "100%";
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
  #each {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  p {
    display: inline-block;
  }
  input,
  button {
    height: 3 rem;
    color: black;
  }
</style>
