<script>
  import { onMount } from 'svelte';
  import Subtitle from '../Subtitle/Index.svelte';
  import PeopleCard from '../PeopleCard/Index.svelte';
  import api from '../../utils/api';

  let peoples = [];

  onMount(async () => {
    const response = await api('people');
    const { results } = await response.json();
    peoples = results;
  });
</script>

<Subtitle title='PEOPLE' />

<div class="peoples">
  {#each peoples as people}
    <PeopleCard {...people} />
  {:else}
    <p>carregando</p>
  {/each}
</div>



