<template>
  <div>
    <h1>
      {{ article.title }}
    </h1>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [article] = await $content({ deep: true }).where({ path }).fetch()

    // Console Logs
    console.log(path)
    console.log(article)

    if (!article) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      article
    }
  },

  head () {
    return {
      title: this.article.title,
      description: this.article.description
    }
  }
}
</script>

// export default {
//   async asyncData ({ $content, params }) {
//     const page = await $content(`${params.category}/${params.slug}`).fetch()
//     return { page }
//   },

// }
