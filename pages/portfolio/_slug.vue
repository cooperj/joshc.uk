<template>
  <main>
    <summary>
      <h1> {{ project.title }} </h1>
      <span class="publish-label">
        Published:
      </span>
      <span class="publish-date">
        {{ formatDate(project.publishDate) }}
      </span>
    </summary>

    <nav>
      <ul>
        <li
          v-for="link of project.toc"
          :key="link.id"
          :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
          >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <article>
      <nuxt-content :document="project" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('portfolio', params.slug).fetch()
    return { project }
  },

  head () {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description
        },
        {
          property: 'og:description',
          content: this.project.description
        },
        {
          property: 'og:title',
          content: this.project.title
        },
        {
          property: 'og:image',
          content: this.project.icon
        },
        {
          property: 'twitter:image',
          content: this.project.icon
        },
        {
          property: 'og:article:published_time',
          content: this.project.publishDate
        }
      ],
      htmlAttrs: {
        prefix: 'https://ogp.me/ns/article#'
      }
    }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
