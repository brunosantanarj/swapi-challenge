<script>
  import { onMount } from 'svelte';
  import Subtitle from '../Subtitle/Index.svelte';
  import PeopleCard from '../PeopleCard/Index.svelte';
  import Loading from '../Loading/Index.svelte';
  import api from '../../utils/api';
  import { people } from '../../stores/people';

  let peoples = [];

  const unsubscribe = people.subscribe(p => peoples = p);

  onMount(async () => {
    const response = await api('people');
    const { results } = await response.json();
    people.set(results);
  });
</script>

<Subtitle title='PEOPLE' />

<div class="peoples">
  {#each peoples as people}
    <PeopleCard people={people} />
  {:else}
    <Loading />
  {/each}
</div>



