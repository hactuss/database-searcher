<script lang="ts">
  let props = $props();
</script>

<header>
  <main>
    <div style:height="{props.number}%"></div>
  </main>
  <p>{props.number}%</p>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  main {
    border: solid 1px white;
    height: 250px;
    width: 1rem;
    display: flex;
    flex-direction: column-reverse;
  }
  div {
    background-color: rgb(0 0 150);
    width: 100%;
  }
</style>
