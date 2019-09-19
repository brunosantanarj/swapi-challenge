<script>
  import { selectedPeople } from '../../stores/people';
  let people;

  const unsubscribe = selectedPeople.subscribe(v => people = v);
</script>

<style>
 h5 {
   font-size: 4em;
   margin: var(--size-xl) 0;
 }

 p {
   font-size: 2em;
   margin:  0 0 var(--size-md);
 }
</style>

<section>
  <h5>{people.name}</h5>
  <p>
    Nasceu no ano de {people.birth_year}, tem {people.height}cm de altura e
    a cor dos seus olhos é {people.eye_color}
  </p>
</section>