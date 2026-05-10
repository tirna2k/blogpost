import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

function SearchIcon() {
  return (
    <svg
      class="icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m20 20-4.4-4.4"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="1.8"
      />
      <path
        d="M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z"
        stroke="currentColor"
        stroke-width="1.8"
      />
    </svg>
  );
}

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

const archiveItems = [
  {
    month: "OCT",
    day: "28",
    category: "Culture",
    title: "The End of the Minimalist Era",
    summary:
      "A retrospective on how stark white spaces gave way to textured maximalism in modern domestic architecture and interior design.",
  },
  {
    month: "OCT",
    day: "15",
    category: "Economy",
    title: "Silent Shifts in Global Trade",
    summary:
      "As supply chains quietly realign across the eastern hemisphere, a new economic order is taking shape far from the media spotlight.",
  },
  {
    month: "OCT",
    day: "03",
    category: "Opinion",
    title: "The Illusion of Velocity",
    summary:
      "Why moving faster in the digital age often means arriving nowhere, and the radical case for intentional slowness.",
  },
  {
    month: "SEP",
    day: "22",
    category: "Politics",
    title: "Fractures in the Coalition",
    summary:
      "An inside look at the closed-door negotiations that nearly brought down the ruling government over the weekend.",
  },
  {
    month: "SEP",
    day: "08",
    category: "Science",
    title: "Mapping the Deep Ocean",
    summary:
      "Innovative sonar technologies and autonomous drones reveal landscapes previously hidden beneath miles of crushing water pressure.",
  },
];

export default define.page(function Archive() {
  return (
    <>
      <Head>
        <title>The Journal by Tirna - Archive</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="/">The Journal by Tirna</a>
          <nav class="top-nav" aria-label="Primary navigation">
            <a class="active" href="/archive">Archive</a>
            <a href="#contact">Contact</a>
          </nav>
          <div class="header-actions">
            <button class="icon-button" type="button" aria-label="Search">
              <SearchIcon />
            </button>
            <button class="icon-button" type="button" aria-label="Account">
              <AccountIcon />
            </button>
          </div>
        </div>
      </header>

      <main class="archive-shell">
        <section class="archive-intro">
          <h1>The Vault</h1>
          <p>
            Explore decades of reporting, deep-dive analysis, and essays. Search
            by keyword, author, or navigate chronologically below.
          </p>
        </section>

        <section class="archive-list" aria-label="Archive articles">
          {archiveItems.map((item) => (
            <article class="archive-card">
              <div
                class="archive-date"
                aria-label={`${item.month} ${item.day}`}
              >
                <span>{item.month}</span>
                <strong>{item.day}</strong>
              </div>
              <div class="archive-card-copy">
                <span class="archive-category">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </section>

        <div class="load-more-row">
          <button class="load-more-button" type="button">Load More</button>
        </div>
      </main>

      <footer class="site-footer" id="contact">
        <div class="footer-brand">The Journal by Tirna</div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#">Privacy Policy</a>
          <a href="#contact">Contact</a>
          <a class="active" href="/archive">Archives</a>
        </nav>
        <div class="copyright">
          The Journal by Tirna Chakraborty, All rights reserved
        </div>
      </footer>
    </>
  );
});
