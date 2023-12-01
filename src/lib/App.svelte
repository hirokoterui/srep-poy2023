<script>
  import { onMount, getContext, afterUpdate } from 'svelte';

  //console.log(getContext('nav-active-section'));
  // Import ai2svelte components...
  import Masthead from '$lib/components/Masthead.svelte';
  import Article from '$lib/components/Article.svelte';

  export let content; // Google doc content
  export let embedded = false;

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }

  onMount(() => {
    appHeight();
  });
</script>

<Masthead {content} />
<Article {content} />

<svelte:window on:resize="{appHeight}" />
