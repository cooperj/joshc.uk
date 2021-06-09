<template>
  <main>
    <h1> Title: {{ article.title }} </h1>
    <nuxt-content :document="article" />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },

  head () {
    return {
      title: this.article.title,
      meta: [
        { description: this.article.description }
      ]
    }
  }
}
</script>
