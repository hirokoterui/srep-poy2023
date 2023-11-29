<script>
  import { onMount } from 'svelte';
  // Import ai2svelte components...
  import Masthead from '$lib/components/Masthead.svelte';
  import Article from '$lib/components/Article.svelte';

  export let content; // Google doc content
  export let embedded = false;

  let scriptContainer;

  onMount(() => {
    const s = document.createElement('script');
    s.src =
      'https://www.reuters.com/investigates/static/4-3-5/en/scripts/main.js?v=131915181123';
    scriptContainer.appendChild(s);
  });
</script>

<svelte:head>
  <script
    src="https://www.reuters.com/investigates/static/4-3-5/en/scripts/vendor.js?v=131915181123"
  ></script>
</svelte:head>
<Masthead {content} />
<Article {content} />

<div bind:this="{scriptContainer}"></div>
