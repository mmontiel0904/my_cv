<script lang="ts">
  import Nav from './components/Nav.svelte';
  import { route } from './router';
</script>

<Nav />
<main>
  <svelte:component this={$route} />
</main>
