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
        { description: 'this.article.description' }
      ]
    }
  }
}
</script>
