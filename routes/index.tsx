import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

function AccountIcon() {
  return (
    <svg
      class="icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <path
        d="M8.2 18.2a4.6 4.6 0 0 1 7.6 0"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="1.8"
      />
      <path
        d="M12 12.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        stroke-width="1.8"
      />
    </svg>
  );
}

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCzNAd3ukaZ0GXj5xMQiMxX9xiVvwkQJfBPEcA6lVXjMWzXvGktP2EbrVSYvIhqjm2pEh73VEqlrsU0proF6RuXfy-PupWersw8XLqV6XpgAsaN0_gdIsQ9Xk3-OZlYk1MvJ4VBKUv9LmpZqNaxNW58crDJOI3b1GHWx-sILfaJmYC3CNdAWJApvCwmCWEBZl44_T5BWeeOkEurjOnaxVJ0Qk4nd9d6HCfNem3aqp4rzA60G5Q5EblQz2B8sMDot8XB_evWe0f-io8";

const artImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFOJt5gSkUbcXGLYesQwMIAJa-Dat-4EpkqmvTfqyWTvJsiH7dge5MW0NvC3qkdfHqFXRmEnu86SO8mKtGKSAkjyfLC2UyM4-5gM68N8Vvug845r_cu1-wpX6Bi5ABzyjwuaYtKPdxVysoNMPE4HWEFC4iRZE6r5h71l3aw41a4IgUfcCQQxuszLxy0jaN42V4bpVfMZc3z4TAwsU3laNzaSCVxSff7aLGaXlJ0GLqRNI_85R6pu51hswpYeyrof0zVT4NsFPiNRQ";

const musicImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDT-HotmIiZUG119hZ3qE-U9Wp5IOf0SblxO4xOGy1JSk7U9t--p0YZfmMb7ilW2tzwQqPQ_aDCNw3c4ovFNuGBEARdXDjHtjzKVBgdLwusaguWv8gdHzk2ndEFhWeNcOpAf16C96hNR5js7uKQJHehDe4gvZh20h8-dk5IN4zqJVN_KQ08-UvzxoBAV0whwA-BfSegTMpmQhxNsUgT4PLMqhIQykxNXXvt7cWRnvP8OgMOTYhcVYWou_JvAHDnUyj8jSMWsjBYbX0";

const foodImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyLF6SOBgTAdjZ8AXT-cZHaQR_J9K2USyWs00lIOth2hzwZNCWslWI40-lWY-8arQ38mxf-fdhD8csJawCfQEob5hJWnblQF4SBbLCIRLkSAgUwKGSmTXeT9Si7uXUmbYwe82XNlT2EPwoAsbvEjXdlthqBLB2aHQ1SHwQvKkaW_gW-4fDMmsSThyrHofy5M8rHIHp_nksk9i7Sw0Qrsh8qsiz3Cq1ilih5Z-wDULOQXJ_vhzPiEAxDRL6rLMh4oHKvWZN6I9pfD0";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>The journal By Tirna - Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Newsreader:ital,wght@0,500;0,600;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="/">The journal By Tirna</a>
          <nav class="top-nav" aria-label="Primary navigation">
            <a href="/archive">Archive</a>
            <a href="#contact">Contact</a>
          </nav>
          <button class="account-button" type="button" aria-label="Account">
            <AccountIcon />
          </button>
        </div>
      </header>

      <main class="page-shell">
        <section class="hero-section">
          <div class="hero-copy">
            <span class="section-label">Global Affairs</span>
            <h1>The Shifting Tides of Diplomacy</h1>
            <p>
              As geopolitical lines are redrawn, nations must navigate a complex
              web of alliances and economic pressures. A deep dive into the new
              era of international relations.
            </p>
            <div class="byline">
              <span class="author">Tirna Chakraborty</span>
              <span class="divider" aria-hidden="true">|</span>
              <span>8 min read</span>
            </div>
          </div>
          <div class="hero-image">
            <img
              alt="A solitary figure walks through a modern governmental building interior."
              src={heroImage}
            />
          </div>
        </section>

        <section class="culture-section" id="archive">
          <div class="section-heading">
            <h2>Culture</h2>
            <a href="/archive">See All</a>
          </div>

          <div class="culture-grid">
            <article class="feature-card">
              <img
                alt="A minimalist contemporary art gallery with an abstract canvas."
                src={artImage}
              />
              <div class="feature-body">
                <div>
                  <span class="section-label">Fine Art</span>
                  <h3>The Renaissance of Minimalist Expression</h3>
                </div>
                <span class="card-author">By Tirna Chakraborty</span>
              </div>
            </article>

            <article class="text-card">
              <span class="section-label">Architecture</span>
              <h3>Concrete Utopias: The Brutalist Revival</h3>
              <p>
                Why imposing concrete structures are finding new appreciation
                among modern urban planners.
              </p>
            </article>

            <article class="image-card">
              <img
                alt="A classical musician plays cello under dramatic light."
                src={musicImage}
              />
              <div>
                <span class="section-label">Music</span>
                <h3>Symphony in the Digital Age</h3>
              </div>
            </article>

            <article class="horizontal-card">
              <div class="horizontal-image">
                <img
                  alt="A meticulously plated modern dish on a dark ceramic plate."
                  src={foodImage}
                />
              </div>
              <div>
                <span class="section-label">Gastronomy</span>
                <h3>Deconstructing the Modern Menu</h3>
                <p>
                  How top chefs are rethinking the dining experience through
                  simplicity.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer class="site-footer" id="contact">
        <div class="footer-brand">The journal By Tirna</div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#">Privacy Policy</a>
          <a href="#contact">Contact</a>
          <a href="/archive">Archives</a>
        </nav>
        <div class="copyright">
          The Journal by Tirna Chakraborty, All rights reserved
        </div>
      </footer>
    </>
  );
});
