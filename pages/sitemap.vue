<template>
  <main>
    <summary>
      <h1>Sitemap</h1>
    </summary>
    <article>
      <p>
        An automatically generated list of pages on the site.
        Also, available as 
        <a href="/sitemap.xml">sitemap.xml</a>
        and
        <a href="/sitemap.xml.gz">sitemap.xml.gz</a>.
      </p>
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

// Standard metadata
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
      // Json array of pages fetched from sitemap
      pages: []
    }
  },
  async fetch () {
    // Get the sitemap file
    const url = process.env.baseUrl + '/sitemap.xml'
    const xmlData = await fetch(url)
      .then(res => res.text())
      .then((data) => {
        return (data.substring(38, data.length))
      })

    // Convert sitemap xml to json
    const jsonData = await this.xmlToJSON(xmlData)
    if (jsonData && jsonData.urlset && jsonData.urlset.url) {
      this.pages = jsonData.urlset.url
    }
  },
  methods: {
    // Convert XML to Json method
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

    // Remove domain name and stuff
    getPageName: (str) => {
      return str.replace('https://www.joshc.uk', '')
    }
  }
}
</script>
