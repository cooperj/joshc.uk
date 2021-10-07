<template>
  <header>
    <span class="title">
      <nuxt-link to="/">
        Josh Cooper
      </nuxt-link>
    </span>
    <div id="links" class="">
      <a href="#" class="close-btn">
        <i class="fas fa-times" />
      </a>
      <ul>
        <li>
          <nuxt-link to="/">
            About
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
          <nuxt-link to="/contact/">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
    <a href="#" class="open-nav-btn">
      <i class="fas fa-bars" />
    </a>
  </header>
</template>
