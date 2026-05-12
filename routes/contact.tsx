import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

const linkedInUrl = "https://www.linkedin.com/in/tirna-chakraborty/";

export default define.page(function Contact() {
  return (
    <>
      <Head>
        <title>Contact - The Journal by Tirna</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="/">The Journal by Tirna</a>
          <nav class="top-nav" aria-label="Primary navigation">
            <a href="/archive">Archive</a>
            <a class="active" href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main class="contact-shell">
        <section class="contact-intro">
          <h1>Let's Connect</h1>
          <p>
            Whether you want to discuss a post, collaborate, or just say hello,
            I'd love to hear from you.
          </p>
        </section>

        <section class="contact-grid" aria-label="Contact form">
          <div class="contact-form">
            <div class="form-field">
              <label for="name">Full Name</label>
              <input
                id="name"
                name="name"
                readonly
                type="text"
                value="Tirna Chakraborty"
              />
            </div>

            <div class="form-field">
              <label for="email">Email Address</label>
              <input
                id="email"
                name="email"
                readonly
                type="email"
                value="tirna.ac.nz@gmail.com"
              />
            </div>

            <div class="form-field">
              <label for="linkedin">LinkedIn Profile URL</label>
              <input
                id="linkedin"
                name="linkedin"
                readonly
                type="url"
                value={linkedInUrl}
              />
            </div>

            <div class="submit-row">
              <a class="contact-submit" href={linkedInUrl}>
                Send Connection Request
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer" id="contact">
        <div class="footer-brand">The Journal by Tirna</div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="/privacy">Privacy Policy</a>
          <a class="active" href="/contact">Contact</a>
          <a href="/archive">Archives</a>
        </nav>
        <div class="copyright">
          The Journal by Tirna Chakraborty, All rights reserved
        </div>
      </footer>
    </>
  );
});
