<script>
  export let content;
  let delay = 4;

  const leadImages = [
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_02.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_03.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_04.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_05.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_06.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_07.jpg?v=0',
    'https://www.reuters.com/investigates/special-report/assets/global-poy-2023/poy_lead_08.jpg?v=0',
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
          {content.Head}
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
