<template>
  <main>
    <summary>
      <h1> {{ article.title }} </h1>
      <span class="publish-label">
        Published:
      </span>
      <span class="publish-date">
        {{ formatDate(article.publishDate) }}
      </span>
    </summary>

    <article>
      <nuxt-content :document="article" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },

  head () {
    return {
      title: this.article.title,
      meta: [
        { description: this.article.description }
      ]
    }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
