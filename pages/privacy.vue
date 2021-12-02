<template>
  <main>
    <summary>
      <h1>Privacy Policy</h1>
    </summary>
    <article>
      <p>
        <em>This policy was last updated: Thursday, 2nd December 2021.</em>
      </p>
      <h2>Contact Details</h2>
      <p>
        For privacy/data-based requests contact:
        <a href="mailto:dpo@joshuacooper.co.uk">dpo@joshuacooper.co.uk</a>
      </p>
      <h2>Type of personal information collected</h2>
      <p>
        We collect information for the purpose of providing a service to you
        (including providing network connectivity, or to respond to an email) or
        to assist with a research topic.
      </p>
      <h2>How personal information is collected</h2>
      <p>
        Personal information is collected by contacting myself or participating
        in a research project. Information collected from a research project
        will have an additional privacy policy amended.
      </p>
      <p>
        Personal information is only collected with your consent. This can be
        withdrawn at any time.
      </p>
      <h2>How personal information is stored</h2>
      <p>
        When sending an email, data will be stored indefinitely. This is so it
        can be referred to in the future. All other information is kept if
        deemed necessary.
      </p>
      <p>All data when requested to be forgotten will be forgotten.</p>
      <h2>Processing personal information by third parties</h2>
      <h3>Cloudflare and Netlify</h3>
      <p>
        We use Cloudflare for CDN and DNS services, and netlify for webhosting.
      </p>
      <p>
        They collect data on our behalf for the purpose of network connectivity.
        This is an essential service, and you are unable to opt-out.
      </p>
      <p>
        Please see the privacy polices for
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank">
          Cloudflare
        </a>
        and
        <a href="https://www.netlify.com/privacy" target="_blank"> Netlify.</a>
      </p>
      <h4>Cloudflare Web Analytics</h4>
      <p>
        We use Cloudflare Web Analytics to provide basic information about the
        users of our website. The data provides information such as Device
        information (including Operating System, Web browser, and Type),
        referring domain, country, and page load time. This is used to provide
        insight onto how the website is working. This data is anonymised and
        cannot be reassociated by us.
      </p>
      <p>
        To opt-out, use a web browser extension such as
        <a href="https://ublockorigin.com/" target="_blank">uBlock origin.</a>
      </p>
      <h3>Microsoft 365</h3>
      <p>
        We use Microsoft 365 for processing information such as email messages.
        This is an essential service, and you are unable to opt-out.
      </p>
      <p>
        Please see the
        <a href="https://privacy.microsoft.com/" target="_blank">
          Microsoft Privacy microsite
        </a>
      </p>
      <h3>Formspark</h3>
      <p>
        We use Formspark to process contact form requests. This is a
        non-essential service, and you can opt-out by sending your emails
        directly to <a href="mailto:hi@joshc.uk">hi@joshc.uk</a>.
      </p>
      <p>
        Please refer to the
        <a href="https://formspark.io/legal/privacy-policy/" target="_blank">
          Formspark Privacy Policy.
        </a>
      </p>
      <h2>Your data protection rights</h2>
      <p>Under data protection law, you have rights including:</p>

      <ul>
        <li>
          <strong>Your right of access</strong>
          - You have the right to ask us for copies of your personal
          information.
        </li>
        <li>
          <strong>Your right to rectification</strong>
          - You have the right to ask us to rectify personal information you
          think is inaccurate. You also have the right to ask us to complete the
          information you think is incomplete.
        </li>
        <li>
          <strong>Your right to erasure</strong>
          - You have the right to ask us to erase your personal information in
          certain circumstances.
        </li>
        <li>
          <strong>Your right to restriction of processing</strong>
          - You have the right to ask us to restrict the processing of your
          personal information in certain circumstances.
        </li>
        <li>
          <strong>Your right to object to processing</strong>
          - You have the right to object to the processing of your personal
          information in certain circumstances.
        </li>
        <li>
          <strong>Your right to data portability</strong>
          - You have the right to ask that we transfer the personal information
          you gave us to another organisation, or you, in certain circumstances.
        </li>
      </ul>

      <p>
        You are not required to pay any charge for exercising your rights, and
        if you make a request, it will be responded to within one month.
      </p>
      <p>
        To request this, send an email to
        <a href="mailto:dpo@joshuacooper.co.uk">dpo@joshuacooper.co.uk</a>
      </p>
      <h2>Children: Under the age of 13</h2>
      <p>
        Our services, products and websites are not designed to be used by
        children aged 13 years or younger, and in the case that they are,
        (e.g. for research purposes) they will <strong>not</strong> be 
        covered by this privacy policy.
      </p>
      <p>
        We intend to not collect data of users aged 13 years or younger.
        We actively do not solicit data from children, 
        and where this happens, and when we are are made away of this, 
        such as being notified by a parent or guardian,
        we will take action to remove the data as soon as possible.
      </p>
      <h2>Complaints</h2>
      <p>
        If you would like to raise any concerns regarding your personal
        information you should make a complaint to our
        <a href="mailto:dpo@joshuacooper.co.uk">dpo@joshuacooper.co.uk</a> email
        address.
      </p>
      <p>
        You can also make a complaint to the ICO. Their contact details are:
      </p>

      <ul>
        <li>
          <a href="https://ico.org.uk/make-a-complaint/" target="_blank">
            ico.org.uk/make-a-complaint
          </a>
        </li>
        <li><a href="tel:+443031231113">0303 123 1113</a></li>
      </ul>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Privacy Policy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'View the privacy policy in a browser'
        },
        {
          property: 'og:description',
          content: 'View the privacy policy in a browser'
        },
        {
          property: 'og:title',
          content: 'Privacy Policy'
        }
      ]
    }
  }
}
</script>
