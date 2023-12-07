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
    class:restricted="{block.Restricted}"
    itemscope=""
    itemtype="http://schema.org/ImageObject"
    id="{block.Id ? `picture-${block.Id}` : ''}"
  >
    <div class="media-container">
      <div
        class:d-block="{block.Class === ''}"
        class:vertical="{block.Class === 'vertical'}"
      >
        <img
          class="img-fluid"
          itemprop="contentURL"
          src="{block.Image}"
          alt="{block.Caption}"
        />

        {#if block.Restricted}
          <div class="caution">
            <p class="warning">この写真には損傷の激しい遺体が写っています</p>
            <button
              class="btn warning"
              on:click="{() => {
                block.Restricted = false;
              }}">写真を表示する</button
            >
          </div>
        {/if}
      </div>
    </div>
    <figcaption class="caption article-paragraph" itemprop="caption">
      {block.Caption}
    </figcaption>
  </figure>
{/if}

<style lang="scss">
  .media-item {
    &.full:not(.cover) {
      margin-bottom: 6rem;
    }
    img {
      transition: opacity 0.5s ease;
    }

    &.image {
      .vertical {
        height: calc(var(--app-height) - 52px);
        max-height: 768px;
        display: flex;
        justify-content: center;
        align-items: center;
        img.img-fluid {
          height: 100%;
          width: auto;
          max-width: unset;
        }

        @media (max-width: 600px) {
          height: auto;
          max-height: unset;
          img.img-fluid {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  figure.restricted {
    .media-container {
      position: relative;
    }
    img {
      opacity: 0.5;
      filter: blur(20px);
    }
    .caution {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-height: 100vh;
    }
    button {
      background: var(--warning);
      color: var(--theme-colour-text-primary, #fff);
      color: var(--theme-colour-background, #000);
      font-weight: 700;
      border: none;
      border-radius: 8px;
      transition: all 0.2s ease;

      &:hover {
        background: var(--theme-colour-text-primary, #fff);
        color: var(--theme-colour-background, #000);
      }
    }
  }
</style>
