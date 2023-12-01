<script>
  import { marked } from 'marked';
  import Image from './Image.svelte';
  import Quote from './Quote.svelte';
  export let block;
</script>

{#if block.Type === 'Text'}
  {@html marked
    .parse(block.Text)
    .replace(/<p>/gi, `<p class="${block.Class}">`)}
{:else if block.Type === 'Image'}
  <Image {block} />
{:else if block.Type === 'Quote'}
  <Quote {block} />
{/if}
