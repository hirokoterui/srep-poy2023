<script>
  import ArticleHead from './ArticleHead.svelte';
  import Container from './Container.svelte';
  import SignOff from './SignOff.svelte';

  export let content;
</script>

<article
  class="special-report special-report-article-container first"
  id="article-israel-palestinians-gaza-days-1"
  itemscope
  itemtype="http://schema.org/NewsArticle"
>
  <ArticleHead {content} />
  <div class="story-content-container">
    {#each content.containers as container}
      <Container {container} />
    {/each}

    <SignOff {content} />
  </div>
</article>
