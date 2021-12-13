<template>
  <main>
    <summary>
      <h1> Portfolio </h1>
    </summary>

    <article>
      <card
        v-for="project in projects"
        :key="project.slug"
        :data="project"
        type="portfolio"
      />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const projects = await $content('portfolio', params.slug).only(['title', 'slug', 'publishDate', 'description', 'icon', 'readingTime']).sortBy('publishDate', 'desc').where({ draft: false }).fetch()
    return { projects }
  },

  head () {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A collection of projects I have worked on.'
        },
        {
          property: 'og:description',
          content: 'A collection of projects I have worked on.'
        },
        {
          property: 'og:title',
          content: 'Portfolio'
        }
      ]
    }
  }
}
</script>
