<template>
  <main>
    <summary>
      <h1> ZZ Links Page </h1>
    </summary>
    <article>
      <p>
        Page to help developement things
      </p>
      <ul>
        <li>
          <nuxt-link to="/zz/">
            This page
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
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
          <nuxt-link to="/privacy/">
            Privacy Policy
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/sitemap/">
            Sitemap
          </nuxt-link>
        </li>
        <li>
          <a href="/sitemap.xml">
            XML Sitemap
          </a>
        </li>
      </ul>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sample Text!'
        },
        {
          property: 'og:description',
          content: 'Sample Text!'
        },
        {
          property: 'og:title',
          content: 'About Josh'
        }
      ]
    }
  }
}
</script>
