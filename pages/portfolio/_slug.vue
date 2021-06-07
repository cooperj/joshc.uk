<template>
  <article>
    <h1> Title: article.title </h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('projects', params.slug).fetch()
    return { article }
  },

  head () {
    return {
      title: 'this.article.title',
      description: 'this.article.description'
    }
  }
}
</script>
