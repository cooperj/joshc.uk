<template>
  <main>
    <summary>
      <h1>Links</h1>
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