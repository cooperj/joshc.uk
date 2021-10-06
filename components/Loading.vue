<template>
    <div v-if="loading" class="loading">
        loading text here lolol
    </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      anim: null // for saving the reference to the animation
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style>
.loading {
  background: var(--background);
  opacity: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 100;
  left: 0;
  z-index: 10;
}
</style>
