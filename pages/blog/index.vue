<template>
  <main>
    <summary>
      <h1> Blog </h1>
    </summary>

    <article>
      <card
        v-for="article in articles"
        :key="article.slug"
        :data="article"
        type="blog"
      />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug).only(['title', 'slug', 'publishDate', 'description', 'readingTime']).sortBy('publishDate', 'desc').where({ draft: false }).fetch()
    return { articles }
  },

  head () {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Things I go and write'
        },
        { 
          property: 'og:description', 
          content: 'Things I go and write'
        },
        { 
          property: 'og:title', 
          content: 'Blog'
        },
      ]
    }
  }
}
</script>
