<script>
  import Loading from '../Loading/Index.svelte';
  export let starships;
</script>

<style>
  .align-center {
    text-align: center;
  }

  .starships-list {
    list-style: none;
  }

  .starships-list li {
    margin-bottom: 10px;
  }
</style>

{#if Array.isArray(starships)}
  <ul class="starships-list align-center">
    {#each starships as starship}
      <li>
        Nave {starship.name}, modelo {starship.model} 
        com capacidade para {starship.cargo_capacity} vidas.
      </li>
    {:else}
      <Loading />
    {/each}
  </ul>
{:else}
  <p class="align-center">Nenhuma nave foi encontrada.</p>
{/if}