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
      <div class="left">
        <ul>
          <li>&copy; Josh Cooper, {{ new Date().getFullYear() }}</li>
        </ul>
      </div>
      <!-- <div class="center">
        <ul>
          <li>aaaaa</li>
          <li>aaaaa</li>
          <li>aaaaa</li>
        </ul>
      </div> -->
      <div class="right">
        <ul>
          <li>
            <a href="https://github.com/cooperj/joshc.uk">
              View Source
            </a>
          </li>
          <li>
            <nuxt-link to="/privacy">
              Privacy Policy
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sitemap">
              Sitemap
            </nuxt-link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
