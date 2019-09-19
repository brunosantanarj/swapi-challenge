<script>
  import { onMount } from 'svelte';
  import Subtitle from '../Subtitle/Index.svelte';
  import PeopleCard from '../PeopleCard/Index.svelte';
  import Loading from '../Loading/Index.svelte';
  import api, { fetchNewsPeople } from '../../utils/api';
  import { people } from '../../stores/people';

  let peoples = [];
  let nextPage = '';
  let final;
  let loading = false;

  const unsubscribe = people.subscribe(p => peoples = p);

  function onFinal([ entry ]) {
   if(entry.isIntersecting){
     console.log(nextPage);
      fecthMore()
    }
  }

  async function fecthMore() {
    loading = true;
    const response = await fetchNewsPeople(nextPage);
    const { results, next } = await response.json();
    people.update(p => [...p, ...results]);
    nextPage = next;
    loading = false;
  }

  onMount(async () => {
    const response = await api('people');
    const { results, next } = await response.json();
    nextPage = next;
    people.set(results);

    const observer = new IntersectionObserver(onFinal);
    observer.observe(final);

    return () => observer.unobserve(final);
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
{#if loading}
  <Loading />
{/if}
<div bind:this={final}></div>



