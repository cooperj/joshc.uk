<template>
  <main class="home">
    <div class="header">
      <div class="hi">
        <h1>
          Hi! 👋 <br> My name is Josh!
        </h1>
        <img
          src="/assets/images/joshua.webp"
          alt="Josh"
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
      <div class="metabox">
        <!-- <h1>meta</h1> -->
      </div>
      <div>
        <p>
          Thank you  for getting to the end of this page! 🙌
          Please feel free to
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
      title: '',
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
          content: 'Josh Cooper'
        }
      ]
    }
  }
}
</script>
