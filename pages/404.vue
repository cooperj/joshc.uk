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
        { description: 'The page you tried to reach could not be found...' }
      ]
    }
  }
}
</script>
