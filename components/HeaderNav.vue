<template>
  <header>
    <span class="title">
      <nuxt-link to="/">
        Josh Cooper
      </nuxt-link>
    </span>
    <div id="links" :class="linksStateClass">
        <header>
          <span class="title">
            <nuxt-link to="/">
              Josh Cooper
            </nuxt-link>
          </span>
          <a v-on:click="closeNav()" class="close-btn">
            <i class="fas fa-times" />
          </a>
        </header>
      <ul>
        <li>
          <nuxt-link to="/" v-on:click.native="closeNav()">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/portfolio/" v-on:click.native="closeNav()">
            Portfolio
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog/" v-on:click.native="closeNav()">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact/" v-on:click.native="closeNav()">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
    <a v-on:click="openNav()" class="open-nav-btn">
      <i class="fas fa-bars" />
    </a>
  </header>
</template>

<script>
export default {
  data () {
    return {
      linksStateClass: "links-closed"
    }
  },

  methods: {
    openNav: function () {
      this.linksStateClass = "links-open"
    },
    closeNav: function () {
      this.linksStateClass = "links-closed"
    }
  }
}
</script>