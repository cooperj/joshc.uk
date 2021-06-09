<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        joshc.uk
      </h1>

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
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
