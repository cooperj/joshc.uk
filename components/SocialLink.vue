<template>
    <a :href="'https://' + site + '/' + username" target="_blank">
        <i :class="'fab fa-' + icon" aria-hidden="true" />
        <span class="username">@{{ username }}</span>
    </a>
</template>

<script>
export default {
 props: ['username', 'icon', 'site'],
}
</script>