<template>
  <main>
    <summary>
      <h1> About </h1>
    </summary>
    <article>
      <p>
        Sample Text!
      </p>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'About',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Sample Text!"
        },
        { 
          property: "og:description", 
          content: "Sample Text!"
        },
        { 
          property: "og:title", 
          content: "About Josh"
        },
      ]
    }
  }
}
</script>
