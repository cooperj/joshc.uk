<template>
  <a :href="`${link.url}`" target="_blank" class="link-pill">
    <i :title="link.platform" :class="link.icon"></i> {{ link.name }}
  </a>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style scoped>
.link-pill {
  background-color: var(--secondary-background);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
  padding: 20px 40px;
  border-radius: 1em;
  border: none;
  -webkit-box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.1); 
box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.1);
overflow: auto;
}

.link-pill:active {
  background-color: var(--primary-selected);
}

.link-pill:hover {
  outline: 5px solid var(--primary);
}

.link-pill::selection {
  outline: 5px solid var(--primary);
}


.link-pill i {
  padding-right: 30px;
}
</style>