<template>
  <div>
    <h1> Title: {{ this.article.title }} </h1>
    <nuxt-content :document="article" />
  </div>
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
      description: this.article.description
    }
  }
}
</script>
