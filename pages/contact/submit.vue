<template>
  <main>
    <summary>
      <h1> Your message has been sent </h1>
    </summary>
    <article>
      <p>
        Thank you for your message!
      </p>
      <p>
        I will try to respond as soon as I can, please feel free to reach out again if you don't get a response, allowing me <strong>5 business days</strong> to respond.
      </p>
      <p>
        <nuxt-link to="/">
          Go back to the homepage...
        </nuxt-link>
      </p>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Thank you!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I will try to respond as soon as I can, please feel free to reach out again if you don\'t get a response, allowing me 5 business days to respond.'
        }
      ]
    }
  }
}
</script>
