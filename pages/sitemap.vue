<template>
  <main>
    <summary>
      <h1>Sitemap</h1>
    </summary>
    <article>
      <ul>
        <li v-for="page in pages" :key="pages.indexOf(page)">
          <a :href="page.loc[0]">
            {{ getPageName(page.loc[0]) }}
          </a>
        </li>
      </ul>
    </article>
  </main>
</template>

<script>
const xml2js = require('xml2js')

export default {
  head () {
    return {
      title: 'Sitemap',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Map of all pages on the site'
        },
        {
          property: 'og:description',
          content: 'Map of all pages on the site'
        },
        {
          property: 'og:title',
          content: 'Sitemap'
        }
      ]
    }
  },
  data () {
    return {
      pages: []
    }
  },
  async fetch () {
    const url = process.env.baseUrl + '/sitemap.xml'
    const xmlData = await fetch(url)
      .then(res => res.text())
      .then((data) => {
        return (data.substring(38, data.length))
      })
    const jsonData = await this.xmlToJSON(xmlData)
    if (jsonData && jsonData.urlset && jsonData.urlset.url) {
      this.pages = jsonData.urlset.url
    }
  },
  methods: {
    xmlToJSON: (str, options) => {
      return new Promise((resolve, reject) => {
        xml2js.parseString(str, options, (err, jsonObj) => {
          if (err) {
            return reject(err)
          }
          resolve(jsonObj)
        })
      })
    },
    getPageName: (str) => {
      return str.replace('https://joshc.uk', '')
    }
  }
}
</script>
