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
        But, if you'd like to contact me via Twitter, albeit more informally, I'm <twitter username="joshcdev" />!
      </p>
      <p>
        I would appreciate it if you could fill out the form <span aria-hidden="true">📝</span> in as much detail as you can, so I can best deal with your query quickly <span aria-hidden="true">⏳</span>.
      </p>
      <p>
        Please feel free to send things that you think I would like <span aria-hidden="true">🐙</span>, but don't add me to your mailing list.
      </p>
      <div>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="contactForm_name">Name</label>
            <input
              id="contactForm_name"
              required
              type="text"
              name="name"
              v-model="name"
            >
          </div>
          <div class="form-group">
            <label for="contactForm_email">Email address</label>
            <input
              id="contactForm_email"
              name="email"
              required
              type="email"
              v-model="email"
            >
          </div>
          <div class="form-group">
            <label for="contactForm_msg">Message</label>
            <textarea
              id="contactForm_msg"
              name="message"
              required
              rows="9"
              v-model="message"
            />
          </div>
          <div class="form-group">
            <input
              id="privacy-accept"
              name="privacy-accept"
              required
              type="checkbox"
              v-model="privacyAccept"
            >
            <label for="privacy-accept">
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
      <div>
        <strong>
          <p>
            {{ formError }}
          </p>
        </strong>
      </div>
    </article>
  </main>
</template>

<script>
import LinkedIn from '~/components/LinkedIn.vue';
const FORMSPARK_ACTION_URL = "https://submit-form.com/U3XU3uws";

import Twitter from '~/components/Twitter.vue'
export default {
  components: { Twitter, LinkedIn },
  head () {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This page tells you the best ways to get in contact with me!'
        },
        {
          property: 'og:description',
          content: 'This page tells you the best ways to get in contact with me!'
        },
        {
          property: 'og:title',
          content: 'Contact Josh'
        }
      ]
    }
  },

  data () {
    return {
      name: '',
      email: '',
      message: '',
      privacyAccept: '',
      formError: ''
    }
  },

   methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
          privacyAccept: this.privacyAccept
        }),
      })
      .then((res) => {
          let response = res.json()
          if (res.ok) {
            // redirect
            this.$router.push('/contact/submit')
          }
          else {
            throw 'Could not send to server'
          }

        }).catch((e) => {
          console.warn(e.message)
          this.formError = `An error occured while trying to submit the form, please try again later... (${e.message})`
        })
    }
  }
}
</script>