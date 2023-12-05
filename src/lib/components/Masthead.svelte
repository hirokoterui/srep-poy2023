<script>
  export let content;
  let delay = 4;

  const leadImages = [
    //'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_02.jpg?v=0', //　void
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/PoY_44.jpg',
    //'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/PoY_07.jpg',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_03.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_04.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_05.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_06.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_07.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_08.jpg?v=0',
    //content.HeadImage,
  ];
</script>

<div
  class="masthead-container background-based-masthead special-report bottom-aligned bottom-title-container full-bleed transparent-title-background mobile-smaller always-display-dropdown"
>
  <div class="image-container-x">
    <div class="image-container-y">
      <div
        class="masthead-image"
        style="background-image:url({content.HeadImage});"
      ></div>
      {#each leadImages as image, i}
        <div
          class="masthead-image"
          style="background-image: url({image}); animation-delay: {delay *
            (i + 1)}s;"
        ></div>
      {/each}
    </div>
    <div class="masthead-title-container over-image-masthead-title-container">
      <div class="container">
        <div class="row">
          <h6 class="series-kicker">{content.Kicker}</h6>
          <h1 class="series-title">
            {content.Hed}
          </h1>
          <!-- svelte-ignore a11y-missing-content -->
          <h5 class="series-subtitle"></h5>
        </div>
      </div>
    </div>
  </div>
  <div class="masthead-title-container under-image-masthead-title-container">
    <div class="container">
      <div class="row">
        <h6 class="series-kicker">{content.Kicker}</h6>
        <h1 class="series-title">
          {content.Hed}
        </h1>
        <!-- svelte-ignore a11y-missing-content -->
        <h5 class="series-subtitle"></h5>
      </div>
    </div>
  </div>
  <div class="masthead-caption">
    <div class="caption-container">
      <p class="caption">
        {#if content.HeadImageCaption}
          {content.HeadImageCaption}
        {/if}
      </p>
    </div>
  </div>
</div>
<div class="masthead-clear"></div>

<style lang="scss">
  /* lead slideshow styles */

  /* DESKTOP image positioning */

  /*.masthead-container.background-based-masthead {
    .image-container-x .image-container-y .masthead-image {
      &:nth-of-type(2) {
        background-position-x: 10%;
        background-position-y: 100%;
      }

      &:nth-of-type(3) {
        background-position-y: 100%;
      }

      &:nth-of-type(4) {
        background-position-y: 100%;
      }

      &:nth-of-type(6) {
        background-position-y: 50%;
      }

      &:nth-of-type(7) {
        background-position-y: 100%;
      }

      &:nth-of-type(9) {
        background-position-y: 100%;
      }

      //MOBILE image positioning 
      @media (max-width: 834px) {
        background-position-x: 50%;

      //NOTE: the nth number here is +1 of the list position, 
      //so the first image in the list would be nth-of-type(2) 
        &:nth-of-type(2) {
          background-position-x: 60%;
        }
      }

    }
  }*/
  .masthead-title-container {
    .row {
      justify-content: center;
    }
  }
  .series-title,
  .series-kicker {
    @media (min-width: 992px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .masthead-container.background-based-masthead {
    @media (min-width: 768px) and (max-width: 768px) {
      .masthead-title-container.under-image-masthead-title-container {
        display: none;
      }
    }
    .image-container-x .image-container-y {
      .masthead-image {
        background-position-y: 100%;
        &:nth-of-type(1) {
          background-position-y: 50%;
        }
        &:nth-of-type(2) {
          background-position-y: 30%;
        }
        &:nth-of-type(3) {
          background-position-y: 50%;
        }
        &:nth-of-type(4) {
          background-position-y: 30%;
        }
        //}
        @media (max-width: 768px) {
          background-position-x: 50%;
        }
      }
    }
  }

  /* styles for slideshow */

  .image-container-y {
    position: relative;
    overflow: hidden;
  }

  .masthead-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    animation: slide 32s infinite;
    opacity: 0;
  }
  .masthead-image {
    &:nth-of-type(1) {
      opacity: 1;
    }
  }

  @keyframes slide {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    38% {
      transform: scale(1.05);
    }
  }
</style>
