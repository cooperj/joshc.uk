<template>
  <main>
    <h1> Blog! </h1>

    <nav>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="`/blog/${article.slug}`">
          {{ article.title }}
        </nuxt-link>
        <p>
          {{ article.description }} | {{ formatDate(article.publishDate) }}
        </p>
      </li>
    </nav>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug).only(['title', 'slug', 'publishDate', 'description']).sortBy('publishDate').fetch()
    return { articles }
  },

  head () {
    return {
      title: 'Blog',
      meta: [
        { description: 'this.article.description' }
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
