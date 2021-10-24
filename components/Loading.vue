<template>
    <div v-if="loading" class="loading">
      <p></p>
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
@media (prefers-reduced-motion) {
  .loading {
    display: none;
  }
}

.loading {
  background: #018281;
  opacity: 0;
  width: 100%;
  height: 20px;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  animation: loading 2s infinite alternate linear;
}

@keyframes loading {
  0% {
    opacity: 0.3;
    height: 10px;
  }
  100% {
    opacity: 0.9;
    height: 35px;
  }
}
</style>
