<template>
  <main class="links">
    <summary>
      <picture>
        <source srcset="/images/joshua.webp" type="image/webp">
        <source srcset="/images/joshua.jpg" type="image/jpeg"> 
        <img aria-hidden="true"
            class="profile"
            src="/images/joshua.jpg"
            alt="Profile Picture of Joshua"
          >
      </picture>
    </summary>
    <article>
      <div v-for="section in sections" :key="section.title">
        <h2>{{ section.title }}</h2>
        <LinksLink
          v-for="link in section.links"
          :key="link.url"
          :link="link"
        ></LinksLink>
      </div>
    </article>
  </main>
</template>

<script>
import sections from "../links.json";
import LinksLink from "~/components/LinksLink.vue";

export default {
  data() {
    return { sections };
  },
  head() {
    return {
      title: "Links",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All my links",
        },
        {
          property: "og:description",
          content: "All my links",
        },
        {
          property: "og:title",
          content: "Links",
        },
      ],
    };
  },
  components: { LinksLink },
};
</script>