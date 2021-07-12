<template>
  <main>
    <summary>
      <h1> Standing Invitation </h1>
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
      title: 'Standing Invitation',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Get in touch with Josh Cooper!"
        },
        { 
          property: "og:description", 
          content: "Get in touch with Josh Cooper!"
        },
        { 
          property: "og:title", 
          content: "Standing Invitation"
        },
      ]
    }
  }
}
</script>
