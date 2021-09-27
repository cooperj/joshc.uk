<template>
  <main class="home">
    <div class="header">
      <div class="hi">
        <h1>
          Hi! 👋🏻 My name is Josh! <em>(he/him)</em>
        </h1>
        <img
          src="/assets/images/joshua.webp"
          alt="Josh"
        >
      </div>
      <div>
        <p>
          I'm currently a second year <strong>Games Computing 👨🏻‍🎓</strong> student.
        </p>
        <p>
          My interests include a collection of <strong>user experience 👬</strong>, <strong>games 🎮</strong>, <strong>web 🌍</strong>, <strong>open source software 🥣</strong>, and cool <strong>hardware 📦</strong>.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Hi! I\'m',
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
