<template>
  <main>
    <div class="info">
      <h1> {{ page.title }} </h1>
    </div>
    <article>
      <nuxt-content :document="page" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()
    return { page }
  },

  head () {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        {
          property: 'og:description',
          content: this.page.description
        },
        {
          property: 'og:title',
          content: this.page.title
        }
      ],
      htmlAttrs: {
        prefix: 'https://ogp.me/ns/article#'
      }
    }
  }
}
</script>
