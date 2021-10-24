<template>
  <main class="home">
    <div class="header">
      <div class="hi">
        <h1>
          Hi! 👋 <br> My name is Josh!
        </h1>
        <img aria-hidden="true"
          class="profile"
          src="/assets/images/joshua.webp"
          alt="Profile Picture of Joshua"
        >
      </div>
      <div>
        <p>
          I'm currently a second year <strong>Games Computing 👨‍🎓</strong> student.
        </p>
        <p>
          My interests include a collection of <strong>user experience 👬</strong>, <strong>games 🎮</strong>, <strong>web 🌍</strong>, <strong>open source software 🥣</strong>, and cool <strong>hardware 📦</strong>.
        </p>
      </div>

      <div id="projects">
        <p>
          In the past, I have made projects 🧪 such as...
        </p>
        <div class="cards-container">
          <home-card-bananapocalypse />
        </div>
        <p>
          ...and many more on my <nuxt-link to="portfolio">portfolio</nuxt-link> 📚!
        </p>
      </div>

      <div>
        <p>
          Thank you 🙌 for visiting my site! Please feel free to
          <nuxt-link to="/contact/">
            get in contact with me!
          </nuxt-link>
          📬
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I\'m currently a second year Games Computing student with interests that include a collection of user experience, games, web, open source software, and cool hardware.'
        },
        {
          property: 'og:description',
          content: 'I\'m currently a second year Games Computing student with interests that include a collection of user experience, games, web, open source software, and cool hardware.'
        },
        {
          property: 'og:title',
          content: 'Josh Cooper'
        }
      ]
    }
  }
}
</script>
