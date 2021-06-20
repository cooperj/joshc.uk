<template>
  <main>
    <summary>
      <h1> Contact </h1>
    </summary>
    <article>
      <p>
        This is some text to say that you should contact me.
      </p>
      <p>
        Something about me having a
        <nuxt-link to="/contact/standing-invitation">
          Standing Invitation
        </nuxt-link>
        in place so that y'all can just reach out.
      </p>
    </article>
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
