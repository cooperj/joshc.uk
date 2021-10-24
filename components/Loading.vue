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
  opacity: 1;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  animation: move-in-steps 1s alternate ease-in-out;
}

@keyframes move-in-steps {
  0% {
    left: 0;
    background: var(--primary);
  }
  100% {
    left: 100%;
    background: var(--background);
  }
}
</style>
