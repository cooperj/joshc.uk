<template>
  <main>
    <summary>
      <h1> Portfolio </h1>
    </summary>

    <article>
      <li v-for="project in projects" :key="project.slug">
        <nuxt-link :to="`/portfolio/${project.slug}`">
          {{ project.title }}
        </nuxt-link>
        <p>
          {{ project.description }} | {{ formatDate(project.publishDate) }}
        </p>
      </li>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const projects = await $content('portfolio', params.slug).only(['title', 'slug', 'publishDate', 'description']).sortBy('publishDate').fetch()
    return { projects }
  },

  head () {
    return {
      title: 'Portfolio',
      meta: [
        { description: 'this.project.description' }
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
