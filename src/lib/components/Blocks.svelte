<script>
  import Block from './Block.svelte';
  export let content;

  const Groups = [];
  let currentGroup = [];

  content.Blocks.forEach((block) => {
    const { Layout } = block;
    if (currentGroup.length > 0 && currentGroup[0].Layout !== Layout) {
      Groups.push([...currentGroup]);
      currentGroup = [];
    }
    currentGroup.push(block);
  });

  if (currentGroup.length > 0) {
    Groups.push([...currentGroup]);
  }
</script>

{#each Groups as group}
  {#if group[0].Layout === 'Regular'}
    <div class="container">
      <div class="article-row row d-block">
        {#each group as block, i}
          <Block {block} />
        {/each}
      </div>
    </div>
  {:else}
    {#each group as block, i}
      <Block {block} />
    {/each}
  {/if}
{/each}
