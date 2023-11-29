<script>
  import { marked } from 'marked';
  import { assets } from '$app/paths';

  import Image from './Image.svelte';
  import Quote from './Quote.svelte';
  //import Graphic from './Graphic.svelte';
  //import Chart from './Chart.svelte';
  //import Map from './Map.svelte';

  /*const aiGraphics = {
    chart: Chart,
    'sat-image': Map,
  };*/
  export let container;
</script>

{#if container.Layout === 'Cover'}
  {#each container.blocks as block}
    <Image {block} />
  {/each}
{:else}
  <div class="container">
    <div class="article-row row d-block">
      {#each container.blocks as block}
        {#if block.Type === 'Text'}
          {@html marked
            .parse(block.Text)
            .replace(/<p>/gi, `<p class="${block.Class}">`)}
        {:else if block.Type === 'Image'}
          <Image {block} />
        {:else if block.Type === 'Quote'}
          <Quote {block} />
        {/if}
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
</style>
