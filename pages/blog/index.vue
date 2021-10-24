<template>
  <main>
    <summary>
      <h1> Blog </h1>
    </summary>

    <article>
      <nuxt-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="card-link"
      >
        <div class="card">
          <!-- If Icon, use it Else use unsplash random image -->
          <div class="img" :style="'background-image: url(' + (article.icon ? article.icon : 'https://source.unsplash.com/300x300/?nature,water,landscape') + ');'" />
          <div class="card-body">
            <h1> {{ article.title }} </h1>
            <p>
              {{ article.description }}
            </p>
            <p class="date">
              <span class="label">Published:</span>
              {{ formatDate(article.publishDate) }}
            </p>
          </div>
        </div>
      </nuxt-link>
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
