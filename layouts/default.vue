<template>
  <div class="page">
    <header>
      <span class="title">
        <nuxt-link to="/">
          Josh Cooper
        </nuxt-link>
      </span>
      <ul>
        <li>
          <nuxt-link to="/about/">
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
    </header>
    <Nuxt />
    <footer>
      &copy; Josh Cooper 2021
    </footer>
  </div>
</template>
