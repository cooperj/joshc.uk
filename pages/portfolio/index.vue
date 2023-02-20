<template>
  <main>
    <div class="info">
      <h1> Portfolio </h1>
      <p> This is a collection of some of my projects ranging in: technology stack, domain, and skill level. </p>
      <p> Each project has a date attached to provide reference on when it was completed. </p>
    </div>

    <article>
      <card v-for="project in projects" :key="project.slug" :data="project" type="portfolio" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('portfolio', params.slug).only(['title', 'slug', 'publishDate', 'description', 'icon', 'readingTime']).sortBy('publishDate', 'desc').where({ draft: false }).fetch()
    return { projects }
  },

  head() {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is a collection of some of my projects ranging in: technology stack, domain, and skill level. Each project has a date attached to provide reference on when it was completed.'
        },
        {
          property: 'og:description',
          content: 'This is a collection of some of my projects ranging in: technology stack, domain, and skill level. Each project has a date attached to provide reference on when it was completed.'
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
