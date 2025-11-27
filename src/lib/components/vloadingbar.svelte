<script lang="ts">
  let props = $props();
</script>

<main>
  <div style:height="{props.number}%"><p>{props.number}%</p></div>
</main>

<style>
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
