<template>
    <nuxt-link
        :to="`/${type}/${data.slug}`"
        class="card-link"
      >
        <div class="card">
          <!-- If Icon, use it Else use unsplash random image -->
          <div class="img" :style="'background-image: url(' + (data.icon ? data.icon : 'https://source.unsplash.com/300x300/?nature,water,landscape') + ');'" />
          <div class="card-body">
            <h1> {{ data.title }} </h1>
            <p>
              {{ data.description }}
            </p>
            <p class="date">
              <span class="label">Published:</span>
              {{ formatDate(data.publishDate) }}
            </p>
            <p>
              {{ data.readingTime }}
            </p>
          </div>
        </div>
      </nuxt-link>
</template>

<script>

export default {
  props: ['data', 'type'],
  methods: {
   formatDate (date) {
     const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>