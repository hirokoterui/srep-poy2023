<script>
  import { marked } from 'marked';
  export let block;
</script>

<blockquote class="blockquote">
  <p class="quote">
    {@html marked.parse(block.Text)}
  </p>
  {#if block.Credit}
    <footer class="blockquote-footer credit">
      {block.Credit}
    </footer>
  {/if}
</blockquote>
