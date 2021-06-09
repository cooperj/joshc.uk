<template>
  <main>
    <h1>404 - Page not found</h1>
    <p>
      The page could not be found.
    </p>
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
