<template>
  <main>
    <summary>
      <h1> Portfolio </h1>
    </summary>

    <article>
      <div
        v-for="project in projects"
        :key="project.slug"
        class="card"
      >
        <nuxt-link :to="`/portfolio/${project.slug}`">
          <div>
            <h1> {{ project.title }} </h1>
            <p>
              {{ project.description }}
            </p>
            <p class="date">
              <span class="label">Published:</span>
              {{ formatDate(project.publishDate) }}
            </p>
          </div>
          <img :src="project.icon">
        </nuxt-link>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const projects = await $content('portfolio', params.slug).only(['title', 'slug', 'publishDate', 'description', 'icon']).sortBy('publishDate', 'desc').fetch()
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
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
