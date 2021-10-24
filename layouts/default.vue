<template>
  <div class="page">
    <header-nav></header-nav>
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
