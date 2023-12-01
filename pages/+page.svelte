<script>
  import {
    //Analytics,
    //SEO,
    //Sharer,
    //SiteHeader,
    //SiteFooter,
    EmbedPreviewerLink,
    Theme,
  } from '@reuters-graphics/graphics-components';

  import {
    Analytics,
    SEO,
    //SiteHeader,
    SiteFooter,
  } from '@reuters-graphics/graphics-components-jp';

  import SiteHeader from '../../../graphics-components-jp/src/components/SiteHeader/SiteHeader.svelte';

  import App from '$lib/App.svelte';
  import pkg from '$pkg';
  import { dev } from '$app/environment';
  import { assets } from '$app/paths';
  import { page } from '$app/stores';

  // Google doc content
  import content from '$locales/ja/content.json';

  // Styles
  //import '@reuters-graphics/graphics-components/scss/main';
  import '$lib/styles/global.scss';
</script>

{#if /\Wreuters\.com$/.test($page.url?.hostname)}
  <Analytics
    authors="{pkg?.reuters?.graphic?.authors}"
    domain="jp.reuters.com"
  />
{/if}

<SEO
  baseUrl="{import.meta.env.BASE_URL}"
  pageUrl="{$page.url}"
  seoTitle="{content.SEOTitle}"
  seoDescription="{content.SEODescription}"
  shareTitle="{content.ShareTitle}"
  shareDescription="{content.ShareDescription}"
  shareImgPath="{`${assets}/${content.ShareImgPath}`}"
  shareImgAlt="{content.ShareImgAlt}"
  publishTime="{pkg?.reuters?.graphic?.published}"
  updateTime="{pkg?.reuters?.graphic?.updated}"
  authors="{pkg?.reuters?.graphic?.authors}"
/>

<Theme base="dark" theme="{{ colour: { background: '#000' } }}">
  <SiteHeader lang="ja" id="srep-header" />

  <App {content} />

  <SiteFooter lang="ja" />
</Theme>

<!-- Only visible in dev! -->
<EmbedPreviewerLink {dev} />
