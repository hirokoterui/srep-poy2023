<script>
  import { marked } from 'marked';
  import { page } from '$app/stores';
  export let content;
  const cls = 'article-paragraph';

  const link = encodeURIComponent($page.url.href);
  const title = encodeURIComponent(content.SEOTitle);
  const desc = encodeURIComponent(content.SEODescription);
  const readAt = encodeURIComponent(
    `${content.SEODescription}\nロイターで読む\n`
  );
</script>

<div class="container">
  <div class="article-row row d-block">
    <div class="signoff">
      <div class="article-row">
        <p class="article-paragraph">
          <strong class="styled-item">{content.Hed}</strong>
        </p>

        {#if content.Authors.author}
          {#each content.Authors as author}
            <p class="{cls}">{@html author.author}</p>
          {/each}
        {/if}
        {#if content.Photograph}
          <p class="{cls}">
            写真：{@html content.Photograph}
          </p>
        {/if}

        {@html marked
          .parse(content.EndNotes)
          .replace(/<p>/gi, `<p class="${cls}">`)}
      </div>
    </div>

    <div class="share-in-article-container">
      <ul class="share share-in-article list-group">
        <li class="list-group-item">
          <a
            data-id="facebook-bottom"
            href="https://www.facebook.com/sharer/sharer.php?u={link}&amp;t={title}"
            onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
            target="_blank"
            title="Share on Facebook"><i class="fa fa-facebook"></i></a
          >
        </li>
        <li class="list-group-item">
          <a
            data-id="twitter-bottom"
            href="https://twitter.com/intent/tweet?text={title}&amp;via=ReutersJapan&amp;url={link}"
            ><i
              ><!-- X --><svg
                height="20px"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M17.923 14.387 25.569 5.5h-1.812l-6.64 7.717-5.3-7.717H5.7l8.018 11.67L5.7 26.49h1.812l7.01-8.15 5.6 8.15h6.116l-8.316-12.102Zm-2.482 2.885-.812-1.162-6.464-9.246h2.783l5.216 7.462.813 1.162 6.78 9.7h-2.782l-5.534-7.915Z"
                ></path></svg
              >
            </i></a
          >
        </li>
        <li class="list-group-item">
          <a
            data-id="linkedin-bottom"
            href="http://www.linkedin.com/shareArticle?mini=true&amp;url={link}&amp;title={title}&amp;summary={desc}&amp;source=ReutersJapan"
            onclick="window.open(this.href,'template_window','320','300','yes','center');return false;"
            onfocus="this.blur()"
            rel="nofollow"><i class="fa fa-linkedin"></i></a
          >
        </li>
        <li class="list-group-item">
          <a
            data-id="reddit-bottom"
            href="http://www.reddit.com/submit"
            onclick="window.location = 'http://www.reddit.com/submit?url=' + encodeURIComponent(window.location); return false;"
            ><i class="fa fa-reddit"></i></a
          >
        </li>
        <li class="email list-group-item">
          <a
            data-id="email-bottom"
            href="mailto:?subject={title}&amp;body={readAt}{link}"
            ><i class="fa fa-envelope"></i></a
          >
        </li>
        <li class="print list-group-item">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a data-id="print-bottom" href="javascript:window.print();"
            ><i class="fa fa-print"></i></a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  :global {
    .signoff {
      p {
        a {
          color: #333;
          text-decoration: underline;
        }
      }
    }
  }
</style>
