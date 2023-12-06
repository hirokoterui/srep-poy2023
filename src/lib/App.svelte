<script>
  import { onMount, getContext, afterUpdate } from 'svelte';

  //console.log(getContext('nav-active-section'));
  // Import ai2svelte components...
  import Masthead from '$lib/components/Masthead.svelte';
  import Article from '$lib/components/Article.svelte';

  export let content; // Google doc content
  export let embedded = false;

  let header;
  let headerOffset;

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }

  function handleScroll() {
    if (
      document.body.classList.contains('scroll-down') &&
      !header.classList.contains('open')
    ) {
      header.style.top = `${headerOffset * -1}px`;
    } else {
      header.style.top = 0;
    }
  }

  onMount(() => {
    appHeight();
    header = document.querySelector('header');
    headerOffset = document.body.getAttribute('data-offset');
  });
</script>

<Masthead {content} />
<Article {content} />

<svelte:window on:resize="{appHeight}" on:scroll="{handleScroll}" />
