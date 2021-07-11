<template>
  <main>
    <summary>
      <h1> Contact </h1>
    </summary>
    <article>
      <p>
        Hey 👋🏻 Thank you for reaching out!
      </p>
      <p>
        I would appreciate it if you could fill out the following form in as much detail as you can, so I can best deal with your issue.
      </p>
      <p>
        I have a
        <nuxt-link to="/contact/standing-invitation">
          Standing Invitation
        </nuxt-link>
        in place, you may find it helpful to review that first...
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
              I agree to be contacted following the <a href="privacy/">privacy</a> policy.
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
export default {
  head () {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with Josh Cooper!'
        }
      ]
    }
  }
}
</script>
