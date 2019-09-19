<script>
  import { onMount } from 'svelte';
  import { fetchImages, fetchStarships } from '../../utils/api';
  import Loading from '../Loading/Index.svelte';
  import PeopleImage from '../PeopleImage/Index.svelte';
  import Starships from '../Starships/Index.svelte';
  import Button from '../Button/Index.svelte';

  export let people;
  let imageUrl = '';
  let starships = [];

  async function fetchDetails() {
    imageUrl = await fetchImages(people.name);
    starships = await fetchStarships(people.starships);
  }

  onMount(() => { fetchDetails() });
</script>

<style>
  .title {
    text-align: center;
    font-size: 2em;
  }

  .people-card {
    max-width: 600px;
    background-color: var(--secondary-color);
    padding: var(--size-md);
    margin: var(--size) auto;
  }
</style>

<div class="people-card">
  <h4 class="title">{people.name}</h4>
  {#if !imageUrl && (Array.isArray(starships) && starships.length === 0)}
    <Loading />
  {:else}
    <PeopleImage image={imageUrl} alt={people.name} />
    <Starships starships={starships} />
    <Button>Detalhes</Button>
  {/if}
</div>

