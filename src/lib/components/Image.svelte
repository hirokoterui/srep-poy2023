<script>
  //https://www.reuters.com/investigates/special-report/assets/israel-palestinians-gaza-days/gaza_day_10.jpg?v=131915181123
  export let block;
  const sizes = [
    { width: 575, size: '-sm' },
    { width: 1200, size: '' },
    { width: 992, size: '-xl' },
    { width: 768, size: '-lg' },
    { width: 576, size: '-md' },
  ];
</script>

{#if block.Layout === 'Single'}
  <figure
    class="media-item image popup-gallery-item {block.Class}"
    itemscope=""
    itemtype="http://schema.org/ImageObject"
  >
    <div class="media-container">
      <div class="d-block">
        <picture>
          {#each sizes as size}
            <source
              media="(max-width: {size.width}px)"
              srcset="{block.Image.replace(/.jpg/gi, '')}{size.size}.jpg"
            />
          {/each}

          <img
            class="img-fluid"
            itemprop="contentURL"
            src="{block.Image}"
            alt="{block.Caption}"
          />
        </picture>
      </div>
    </div>
    <figcaption class="caption" itemprop="caption">
      {block.Caption}
    </figcaption>
  </figure>
{:else if block.Layout === 'Duo'}
  <div
    class="styled-box styled-item {block.Class} picture-box d-flex flex-column flex-lg-row"
    id="duo-id"
  >
    {#each block.Images as i}
      <figure
        class="media-item image large popup-gallery-item col-12 col-lg-6 col-md-12"
        itemscope=""
        itemtype="http://schema.org/ImageObject"
      >
        <div class="media-container">
          <div class="d-block">
            <img
              class="img-fluid"
              itemprop="contentURL"
              src="{i.Image}"
              alt="{i.Caption}"
            />
          </div>
        </div>
        <figcaption class="caption" itemprop="caption">
          {i.Caption}
        </figcaption>
      </figure>
    {/each}
  </div>
{:else if block.Layout === 'Cover'}
  <figure
    class="media-item image cover full"
    itemscope=""
    itemtype="http://schema.org/ImageObject"
  >
    <div class="media-container" style="background-image:url({block.Image});">
      <div class="d-block">
        <img
          class="img-fluid"
          itemprop="contentURL"
          src="{block.Image}"
          alt="{block.Caption}"
        />
      </div>
    </div>
    <figcaption class="caption" itemprop="caption">
      {block.Caption}
    </figcaption>
  </figure>
{:else if block.Layout === 'Full'}
  <figure
    class="media-item full image"
    itemscope=""
    itemtype="http://schema.org/ImageObject"
  >
    <div class="media-container">
      <div class="d-block">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="img-fluid" itemprop="contentURL" src="{block.Image}" />
      </div>
    </div>
    <figcaption class="caption" itemprop="caption">{block.Caption}</figcaption>
  </figure>
{/if}

<style lang="scss">
  .media-item {
    &.full:not(.cover) {
      margin-bottom: 6rem;
    }
  }
</style>
