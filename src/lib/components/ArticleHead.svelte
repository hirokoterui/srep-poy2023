<script>
  import { timeFormat } from 'd3-time-format';
  export let content;
  const timestamp = timeFormat('%Y年%-m月%-d日 %I:%M')(
    new Date(content.PublishedDate)
  );
</script>

<div class="container">
  <div class="row d-block">
    <div class="title-container">
      <h2 class="title" itemprop="headline">
        {content.Hed}
      </h2>
    </div>
  </div>
  <div class="row d-block">
    <div class="dek-container" itemprop="articleBody"></div>
  </div>
  <div class="row d-block">
    <div class="meta-container">
      <p class="byline" itemprop="author">
        {#each content.Authors as author, i}
          {@html author.author}
          {#if i < content.Authors.length - 1 && content.Authors.length > 1}
            、
          {/if}
        {/each}
        {#if content.Photograph}
          <br />
          写真：{@html content.Photograph}
        {/if}
      </p>
      <p class="time">
        <time itemprop="datePublished" datetime="{content.PublishedDate}"
          >{timestamp}</time
        > 作成
      </p>
    </div>
  </div>
</div>
