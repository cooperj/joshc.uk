<template>
  <div>
    <h1>
      {{ project.title }}
    </h1>
    <nuxt-content :document="project" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('portfolio', params.slug).fetch()
    return { project }
  },

  head () {
    return {
      title: this.project.title
    }
  }
}
</script>
