<script>
  export let image;
  export let alt;
</script>

<style>
  .people-card__image {
    max-width: 100%;
    max-height: 360px;
    display: block;
    margin: var(--size) auto;
  }
</style>

{#if image !== 'not-found'}
  <img
    src={image}
    alt={alt}
    class="people-card__image"
  />
{:else}
  <img
    src="https://starwarsblog.starwars.com/wp-content/uploads/2014/06/default-img@2x-1536x864-617311431234.jpg"
    alt="StarWar People"
    class="people-card__image"
  /> 
{/if}