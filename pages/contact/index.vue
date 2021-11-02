<template>
  <main>
    <summary>
      <h1> Contact </h1>
    </summary>
    <article>
      <p>
        Hey <span aria-hidden="true">👋</span> If you would like a longer guaranteed response, please fill in the form below.
      </p>
      <p>
        But, if you'd like to contact me via Twitter, albeit more informally, I'm <twitter username="joshcooperdev" />!
      </p>
      <p>
        I would appreciate it if you could fill out the form <span aria-hidden="true">📝</span> in as much detail as you can, so I can best deal with your query quickly <span aria-hidden="true">⏳</span>.
      </p>
      <p>
        Please feel free to send things that you think I would like <span aria-hidden="true">🐙</span>, but don't add me to your mailing list.
      </p>
      <div>
        <form action="/contact/submit/" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <div class="hidden">
            <label>Don’t fill this out if you're human:
              <input name="bot-field">
            </label>
          </div>
          <div class="form-group">
            <label for="contactForm_name">Name</label>
            <input
              id="contactForm_name"
              required
              type="text"
              name="name"
            >
          </div>
          <div class="form-group">
            <label for="contactForm_email">Email address</label>
            <input
              id="contactForm_email"
              name="email"
              required
              type="email"
            >
          </div>
          <div class="form-group">
            <label for="contactForm_msg">Message</label>
            <textarea
              id="contactForm_msg"
              name="msg"
              required
              rows="9"
            />
          </div>
          <div class="form-group">
            <input
              id="agreeToBeContacted"
              name="agreeToBeContacted"
              required
              type="checkbox"
            >
            <label for="agreeToBeContacted">
              I agree to be contacted following the <nuxt-link to="/privacy">privacy policy.</nuxt-link>
            </label>
          </div>
          <button
            type="submit"
            class="btn"
          >
            Send
          </button>
        </form>
      </div>
    </article>
  </main>
</template>

<script>
import Twitter from '~/components/Twitter.vue'
export default {
  components: { Twitter },
  head () {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with Josh Cooper!'
        },
        {
          property: 'og:description',
          content: 'Get in touch with Josh Cooper!'
        },
        {
          property: 'og:title',
          content: 'Contact'
        }
      ]
    }
  }
}
</script>
