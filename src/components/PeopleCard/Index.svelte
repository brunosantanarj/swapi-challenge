<script>
  import { onMount } from 'svelte';
  import { fetchImages, fetchStarships } from '../../utils/api';
  import Loading from '../Loading/Index.svelte';
  import PeopleImage from '../PeopleImage/Index.svelte';
  import Starships from '../Starships/Index.svelte';
  import Button from '../Button/Index.svelte';
  import Modal from '../Modal/Index.svelte';
  import Details from '../Details/Index.svelte';
  import { people as storedPeople, selectedPeople } from '../../stores/people';

  export let people;
  let peoples;
  let imageUrl = '';
  let starships = [];
  let visible = false;

  const unsubscribe = storedPeople.subscribe(p => peoples = p);

  async function fetchDetails() {
    imageUrl = await fetchImages(people.name);
    starships = await fetchStarships(people.starships);
  }

  function showDetails() {
    selectedPeople.set(peoples.find(p => p.name === people.name));
    visible = true;
  }

  function onCloseModal() {
    visible = false;
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
    <Button on:click={showDetails}>
      Detalhes
    </Button>
    <Modal visible={visible} onClose={onCloseModal}>
      <Details />
    </Modal>
  {/if}
</div>

