<template>
  <div>
    <h1>
      {{ page.title }}
    </h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(`${params.category}/${params.slug}`).fetch()
    return { page }
  },

  head () {
    return {
      title: this.page.title,
      description: this.page.description
    }
  }
}
</script>
