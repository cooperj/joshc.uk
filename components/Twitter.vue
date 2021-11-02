<template>
    <a :href="'https://twitter.com/' + username" target="_blank">
        <i class="fab fa-twitter" aria-hidden="true" />
        <span class="username">@{{ username }}</span>
    </a>
</template>

<script>
export default {
 props: ['username'],
}
</script>