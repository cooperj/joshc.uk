<template>
  <main>
    <summary>
      <h1> Portfolio </h1>
    </summary>

    <article>
      <nuxt-link
        v-for="project in projects"
        :key="project.slug"
        :to="`/portfolio/${project.slug}`"
        class="card-link"
      >
        <div class="card">
          <div class="img">
            <img :src="project.icon" alt="">
          </div>
          <div class="card-body">
            <h1> {{ project.title }} </h1>
            <p>
              {{ project.description }}
            </p>
            <p class="date">
              <span class="label">Published:</span>
              {{ formatDate(project.publishDate) }}
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
