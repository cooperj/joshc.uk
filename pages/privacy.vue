<template>
  <main>
    <summary>
      <h1> Privacy Policy </h1>
    </summary>
    <article>
      <p>
        Your privacy is important to us. It is Joshua Cooper's policy to respect your privacy regarding any
        information we may collect from you across our website (<a href="https://joshc.uk">joshc.uk</a>),
        email communication, and other sites we own and operate.
      </p>

      <p>
        We only ask for personal information when we truly need it to provide a service to you.
        We collect it by fair and lawful means, with your knowledge and consent.
        We also let you know why we’re collecting it and how it will be used.
      </p>

      <p>
        We only retain collected information for as long as necessary to provide you with your requested service,
        Joshua Cooper is within his right to keep this data for an extended period of time to assist with your future needs.
        What data we store, we’ll protect within commercially acceptable means to prevent loss and theft,
        as well as unauthorised access, disclosure, copying, use or modification.
      </p>

      <p>
        We don’t share any personally identifying information publicly or with third-parties,
        except when required to by law and deemed necessary.
      </p>

      <p>
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices of these sites,
        and cannot accept responsibility or liability for their respective privacy policies.
      </p>

      <p>
        To help operate the site, we use third party tools such as;
      </p>

      <ul>
        <li><a href="https://www.netlify.com/">Netlify</a></li>
        <li><a href="https://www.cloudflare.com/">Cloudflare</a></li>
        <li><a href="https://www.cloudflare.com/">CDNJS</a></li>
        <li><a href="https://www.getbootstrap.com/">Bootstrap</a></li>
        <li><a href="https://www.bootstrapcdn.com/">BootstrapCDN</a></li>
        <li><a href="https://fonts.google.com/">Google Fonts</a></li>
        <li><a href="https://fontawesome.com/">Font Awesome</a></li>
      </ul>

      <p>
        These third parties will gather data which they need for their service(s) to function.
        This is subject to their own individual privacy policies.
      </p>

      <p>
        You are free to refuse our request for your personal information,
        with the understanding that we may be unable to provide you with some of your desired services.
      </p>

      <p>
        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.
        If you have any questions about how we handle user data and personal information, feel free to contact us.
      </p>

      <p>
        For more information about our privacy practices, if you have questions, if you would like to make a complaint,
        or if you would like to request the data we have on you (this does not include third parties), please contact us by
        <nuxt-link to="/contact/">
          e-mail.
        </nuxt-link>
      </p>

      <p>
        If you decide to get in touch, you agree to have your data stored, this can be requested to be removed at any point.
        Requests must be made via email.
      </p>

      <p>
        <em>This policy is effective as of Saturday, 31st August 2019.</em>
      </p>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Privacy Policy',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Sample Text!"
        },
        { 
          property: "og:description", 
          content: "Sample Text!"
        },
        { 
          property: "og:title", 
          content: "Privacy Policy"
        },
      ]
    }
  }
}
</script>
