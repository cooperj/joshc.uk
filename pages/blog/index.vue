<template>
  <main>
    <summary>
      <h1> Blog </h1>
    </summary>

    <article>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="`/blog/${article.slug}`">
          {{ article.title }}
        </nuxt-link>
        <p>
          {{ article.description }} | {{ formatDate(article.publishDate) }}
        </p>
      </li>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug).only(['title', 'slug', 'publishDate', 'description']).sortBy('publishDate', 'desc').fetch()
    return { articles }
  },

  head () {
    return {
      title: 'Blog',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Things I go and write"
        },
        { 
          property: "og:description", 
          content: "Things I go and write"
        },
        { 
          property: "og:title", 
          content: "Blog"
        },
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
