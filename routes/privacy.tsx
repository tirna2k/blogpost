import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - The Journal by Tirna</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="/">The Journal by Tirna</a>
          <nav class="top-nav" aria-label="Primary navigation">
            <a href="/archive">Archive</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main class="legal-shell">
        <article class="legal-article">
          <header class="legal-header">
            <p class="legal-label">Legal Documentation</p>
            <h1>Privacy Policy</h1>
            <p class="legal-date">Effective Date: October 24, 2024</p>
          </header>

          <div class="legal-content">
            <section class="legal-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to The Journal by Tirna. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                explains how we look after your personal data when you visit the
                website and tells you about your privacy rights.
              </p>
              <p>
                It is important that you read this privacy policy together with
                any other notice we may provide when collecting or processing
                personal data about you, so that you understand how and why your
                data is used.
              </p>
            </section>

            <div class="legal-divider" />

            <section class="legal-section">
              <h2>2. Data Collection</h2>
              <p>
                We may collect, use, store, and transfer different kinds of
                personal data about you, grouped as follows:
              </p>
              <ul>
                <li>
                  <strong>Identity Data</strong>{" "}
                  includes your name, username, or similar identifier.
                </li>
                <li>
                  <strong>Contact Data</strong>{" "}
                  includes your email address and any contact details you choose
                  to share.
                </li>
                <li>
                  <strong>Technical Data</strong>{" "}
                  includes internet protocol (IP) address, browser type, browser
                  version, and usage details.
                </li>
                <li>
                  <strong>Usage Data</strong>{" "}
                  includes information about how you use this website and
                  interact with its pages.
                </li>
              </ul>
            </section>

            <div class="legal-divider" />

            <section class="legal-section">
              <h2>3. Cookies</h2>
              <p>
                You can set your browser to refuse all or some browser cookies,
                or to alert you when websites set or access cookies. If you
                disable or refuse cookies, some parts of this website may become
                inaccessible or may not function properly.
              </p>
              <p>
                Cookies may be used to distinguish visitors, improve browsing
                experience, and understand how the website is being used.
              </p>
            </section>

            <div class="legal-divider" />

            <section class="legal-section">
              <h2>4. Your Rights</h2>
              <p>
                Under certain circumstances, you may have rights under data
                protection laws in relation to your personal data. These include
                the right to:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <footer class="site-footer" id="contact">
        <div class="footer-brand">The Journal by Tirna</div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a class="active" href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
          <a href="/archive">Archives</a>
        </nav>
        <div class="copyright">
          The Journal by Tirna Chakraborty, All rights reserved
        </div>
      </footer>
    </>
  );
});
