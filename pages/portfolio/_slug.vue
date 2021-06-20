<template>
  <main>
    <summary>
      <h1> {{ project.title }} </h1>
      <span class="publish-label">
        Published:
      </span>
      <span class="publish-date">
        {{ formatDate(project.publishDate) }}
      </span>
    </summary>

    <article>
      <nuxt-content :document="project" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('portfolio', params.slug).fetch()
    return { project }
  },

  head () {
    return {
      title: this.project.title,
      meta: [
        { description: this.project.description }
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
