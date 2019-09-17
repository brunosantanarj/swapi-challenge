<script>
  import { titleApp } from '../../stores/title';

  let title;
  const unsubscribe = titleApp.subscribe(value => {
    title = value;
  });
</script>

<style>
  .title {
    font-size: 4em;
    text-align: center;
    margin-top: 41px;
    color: var(--primary-color);
  }
</style>

<h1 class="title">{title}</h1>