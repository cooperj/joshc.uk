<template>
  <main>
    <summary>
      <h1>Page not found</h1>
    </summary>
    <article>
      <p>
        The page you tried visit does not exist. You may have typed the address incorrectly or it may have been deleted. Check the address, and if it's still not working do <nuxt-link to="/contact"> get in touch </nuxt-link>.
      </p>

      <p>
        <img src="/assets/images/spin.gif" alt="Gorilla spinning in the centre, top text: I live in spain, bottom text: without the a" />
      </p>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Page not found',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Could not find the page you requested"
        },
        { 
          property: "og:description", 
          content: "Could not find the page you requested"
        },
        { 
          property: "og:title", 
          content: "Page not Found"
        },
      ]
    }
  }
}
</script>
