<script>
  export let type = 'button';
</script>

<style>
  button {
    background-color: var(--primary-color);
    padding: 20px;
    border-radius: 10px;
    padding: 20px;
    border-radius: 10px;
    display: block;
    margin: 30px auto 10px;
    font-size: 1em;
    font-family: inherit;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>

<button type={type}>
  <slot />
</button>

