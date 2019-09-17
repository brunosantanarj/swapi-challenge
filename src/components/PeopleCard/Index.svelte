<script>
  export let name;
</script>

<div class="people-card">{name}</div>

<style>
  .people-card {
    max-width: 600px;
    margin: var(--size) auto;
    background-color: var(--secondary-color);
    padding: var(--size-md);
  }
</style>

