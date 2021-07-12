<template>
  <main>
    <summary>
      <h1>404 - Page not found</h1>
    </summary>
    <article>
      <p>
        The page could not be found.
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
