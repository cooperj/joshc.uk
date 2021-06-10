<template>
  <main>
    <article>
      <p>
        This is the placeholder home page.
      </p>

      <ul>
        <li>
          <nuxt-link to="/about/">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact/">
            Contact
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/portfolio/">
            Portfolio
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog/">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/privacy-policy/">
            Privacy Policy
          </nuxt-link>
        </li>
      </ul>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home',
      meta: [
        { description: 'The personal website of Josh Cooper' }
      ]
    }
  }
}
</script>
