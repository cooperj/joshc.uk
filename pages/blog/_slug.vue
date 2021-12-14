<template>
  <main>
    <summary>
      <h1> {{ article.title }} </h1>
      <span class="publish-label">
        Published:
      </span>
      <span class="publish-date">
        {{ formatDate(article.publishDate) }}
      </span>
      <p>{{ article.readingTime }}</p>
    </summary>

    <article>
      <nuxt-content :document="article" />
    </article>

    <div id="comment-box">
      <p>
        Thank you for reading this blog post! <span aria-hidden="true">👍</span>
      </p>
      <p>
        If you have any comments or questions, please
        <a :href="commentsLink()">
          send them to me via email.
        </a>
        <span aria-hidden="true">
          🧙🏻‍♂️
        </span>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },

  head () {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          property: 'og:description',
          content: this.article.description
        },
        {
          property: 'og:title',
          content: this.article.title
        }
      ]
    }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

    commentsLink () {
      return 'mailto:comments@joshc.uk?subject=RE: ' + this.article.title
    }
  }
}
</script>
