// https://redfern.dev/articles/adding-a-sitemap-using-nuxt-content/

export default async () => {
  const { $content } = require("@nuxt/content")
  const files = await $content({ deep: true }).only(["path"]).fetch()

  return files.map((file) => (file.path === "/index" ? "/" : file.path))
}
