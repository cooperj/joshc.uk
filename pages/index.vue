<template>
  <main class="home">

    <div id="hi">
      <h1>
        Hello I'm Josh! <span aria-hidden="true">👋</span>
      </h1>

      <picture>
        <source srcset="/images/joshua.webp" type="image/webp">
        <source srcset="/images/joshua.jpg" type="image/jpeg"> 
        <img aria-hidden="true"
            class="profile"
            src="/images/joshua.jpg"
            alt="Profile Picture of Joshua"
          >
      </picture>
    </div>
    <div id="about">
      <!--<p>
        I'm currently a third year <strong>Games Computing <span aria-hidden="true">👨‍🎓</span></strong> student.
      </p>-->
      <p>
        My interests include a collection of <strong>user experience <span aria-hidden="true">👬</span></strong>, <strong>games <span aria-hidden="true">🎮</span></strong>, <strong>web <span aria-hidden="true">🌍</span></strong>, <strong>open source software <span aria-hidden="true">🥣</span></strong>, and cool <strong>hardware <span aria-hidden="true">📦</span></strong>.
      </p>
    </div>

    <div id="projects">
      <p>
        In the past, I have made projects <span aria-hidden="true">🧪</span> such as...
      </p>
      <div class="cards-container">
        <home-card-aquanaut />
        <home-card-lft-scanning />
        <home-card-bananapocalypse />
      </div>
      <p>
        ...and many more on my <nuxt-link class="link-highlighted" to="/portfolio">portfolio</nuxt-link> <span aria-hidden="true">📚</span>!
      </p>
    </div>

    <div id="blog">
      <p>
        You might also want to check out
        <nuxt-link class="link-highlighted" to="/blog">my blog</nuxt-link> <span aria-hidden="true">📝</span>.
      </p>
      <p>
        My last post was
        <nuxt-link class="link-highlighted" :to="'/blog/' + article[0].slug">{{ article[0].title }}</nuxt-link> <span aria-hidden="true">📃</span>
        where {{ article[0].description }}
      </p>
    </div>

  <div id="thank-you">
      <p>
        Thank you <span aria-hidden="true">🙌</span> for visiting my site! Please feel free to
        <nuxt-link class="link-highlighted" to="/contact/">get in contact with me!</nuxt-link>
        <span aria-hidden="true">📬</span>
      </p>
    </div>
    
  </main>
</template>

<script>
import HomeCardBananapocalypse from '~/components/HomeCardBananapocalypse.vue'
export default {
  components: { HomeCardBananapocalypse },
  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I\'m a multidisciplined software developer with a focus on games technologies. I help ideas come alive!'
        },
        {
          property: 'og:description',
          content: 'I\'m a multidisciplined software developer with a focus on games technologies. I help ideas come alive!'
        },
        {
          property: 'og:title',
          content: 'Josh Cooper'
        }
      ]
    }
  },
  async asyncData ({ $content }) {
    const article = await $content('blog').only(['title', 'slug', 'description', 'publishDate']).sortBy('publishDate', 'desc').where({ draft: false }).limit(1).fetch()
    return { article }
  },
}
</script>
