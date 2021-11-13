<template>
    <a :href="'https://linkedin.com/in/' + username" target="_blank">
        <i class="fab fa-linkedin" aria-hidden="true" />
        <span class="username">/in/{{ username }}</span>
    </a>
</template>

<script>
export default {
 props: ['username'],
}
</script>