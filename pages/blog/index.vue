<template>
  <main>
    <h1> Blog! </h1>

    <li v-for="article in articles" :key="article.slug">
      <nuxt-link :to="`/blog/${article.slug}`">
        {{ article.title }}
      </nuxt-link>
      <p>
        {{ article.description }} | {{ formatDate(article.publishDate) }}
      </p>
    </li>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug).sortBy('publishDate', 'desc').fetch()
    return { articles }
  },

  head () {
    return {
      title: 'Blog',
      description: 'this.article.description'
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
