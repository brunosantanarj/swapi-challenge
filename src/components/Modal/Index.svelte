<script>
  import { fade, fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  export let visible = false;
  export let onClose = event => event;
</script>


<style>
  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal {
    max-width: 1200px;
    width: 80%;
    margin: var(--size-xl) auto;
    padding: var(--size-md);
    background-color: white;
  }

  button {
    appearance: none;
    background-color: transparent;
    font-family: inherit;
    padding: 10px;
    float: right;
    cursor: pointer;
    transition: .8s all;
  }

  button:hover {
    background-color: var(--primary-color);
  }
</style>

{#if visible}
  <div class="overlay" transition:fade>
    <div
      class="modal"
      transition:fly="{{delay: 250, duration: 400, x: 0, y: -500, opacity: 1}}"
    >
      <button on:click={() => onClose(false)}>fechar</button>
      <slot />
    </div>
  </div>
{/if}