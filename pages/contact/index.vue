<template>
  <main>
    <h1> Contact </h1>
    <nuxt-link to="/contact/standing-invitation">
      Standing Invitation
    </nuxt-link>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Contact',
      meta: [
        { description: 'this.article.description' }
      ]
    }
  }
}
</script>
