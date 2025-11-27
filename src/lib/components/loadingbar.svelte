<script lang="ts">
  let props = $props();
</script>

<main>
  <div style:width="{props.number}%"><p>{props.number}%</p></div>
</main>

<style>
  main {
    border: solid 1px green;
    height: 1rem;
    width: 250px;
  }
  div {
    background-color: purple;
    height: 100%;
  }
</style>
