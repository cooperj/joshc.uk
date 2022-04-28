<template>
  <main>
    <summary>
      <h1> Contact </h1>
    </summary>
    <article>
      <div>
        <p>
          If you wanna get in touch with me, I'm available in most places. However, I do ask you that if you want a guaranteed longer response if you could send that as a email.
        </p>

        <p>
          <ul>
            <li>
              Email me at <strong><a href="mailto:hi@joshc.uk" target="_blank">hi@joshc.uk</a></strong>
            </li>
            <!-- <li>
              On the Air: <strong><a href="#" target="_blank">M7XXX</a></strong>
            </li> -->
            <li>
              Twitter: <strong><a href="https://twitter.com/joshcdev" target="_blank">@joshcdev</a></strong>
            </li>
            <li>
              GitHub: <strong><a href="https://github.com/cooperj" target="_blank">@cooperj</a></strong>
            </li>
            <li>
              LinkedIn: <strong><a href="https://www.linkedin.com/in/joshuaecooper/" target="_blank">/in/joshuaecooper</a></strong>
            </li>
          </ul>
        </p>
      </div>

      <div>
        <p>
          I am busy and may miss messages, but I try to reply within a week; so please be patient.
          If I've missed your message after a week, please feel free to send a follow up.
        </p>
        <p>
          Please feel free to send things that you think I would like, but don't add me to your mailing list.
          Email not personally directed at me or is generally spammy - will be marked as junk.
        </p>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "This page tells you the best ways to get in contact with me!",
        },
        {
          property: "og:description",
          content:
            "This page tells you the best ways to get in contact with me!",
        },
        {
          property: "og:title",
          content: "Contact Josh",
        },
      ],
    };
  },
};
</script>