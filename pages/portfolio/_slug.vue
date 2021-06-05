<template>
  <nuxt-content :document="project" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('portfolio', params.slug).fetch()

    return { project }
  }
}
</script>
