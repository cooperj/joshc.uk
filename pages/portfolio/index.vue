<template>
  <div>
    <h1> Portfolio! </h1>

    <li v-for="project in projects" :key="project.slug">
      <nuxt-link :to="`/portfolio/${project.slug}`">
        {{ project.title }}
      </nuxt-link>
      <p>
        {{ project.description }} | {{ formatDate(project.publishDate) }}
      </p>
    </li>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const projects = await $content('projects', params.slug).sortBy('publishDate', 'desc').fetch()
    return { projects }
  },

  head () {
    return {
      title: 'Portfolio',
      description: 'this.project.description'
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
