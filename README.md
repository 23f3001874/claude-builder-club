<div align="center">

<img src="claude_logo.jpg" alt="Claude logo" width="72" />

# Claude Builder Club @ IIT Madras

**A community of developers, designers & entrepreneurs at IIT Madras<br>building real products powered by Claude.**

[![Live site](https://img.shields.io/badge/Live-iitm.claudebuilders.club-D97757?style=for-the-badge)](https://iitm.claudebuilders.club/)
[![Join the club](https://img.shields.io/badge/Join-Express%20interest-8B9A6B?style=for-the-badge)](https://www.jotform.com/253555944387168)
[![License: MIT](https://img.shields.io/badge/License-MIT-1A1A1A?style=for-the-badge)](LICENSE)

[**Visit the site**](https://iitm.claudebuilders.club/) · [**Join the club**](https://www.jotform.com/253555944387168) · [**Report an issue**](https://github.com/23f3001874/claude-builder-club/issues)

<br>

<img src="docs/homepage.png" alt="Claude Builder Club homepage hero" width="820" />

</div>

---

## About the club

Claude Builder Club is a student community at IIT Madras for anyone who wants to learn, experiment, and ship with Claude. No AI background is required. Whether you write code, design products, or just have an idea, there is a place for you.

| | What we do |
| --- | --- |
| 🗓️ **CBC Meetings** | Regular sessions to share ideas, demo projects, and learn together |
| 🛠️ **Hands-on workshops** | Practical sessions on building with Claude, from prompting to shipping full apps |
| 🏆 **Campus-wide hackathon** | An annual build sprint where teams turn ideas into working products |

**Member perks:** 3 months of Claude Pro, Claude developer credits, hackathon bonuses, and exclusive swag.

👉 **Want in?** Fill out the [interest form](https://www.jotform.com/253555944387168) and we'll reach out before the next session.

---

## About this website

This repo is the source for [iitm.claudebuilders.club](https://iitm.claudebuilders.club/). It's a fast, dependency-free static site built with plain HTML, CSS, and JavaScript.

### Features

- 🎨 **Editorial design system:** Fraunces + DM Sans typography with Claude's warm orange, pink, olive, and blue palette
- 🌗 **Light and dark themes:** light by default; the visitor's choice is remembered in `localStorage`
- 📣 **Live updates:** a "Next workshop" status card in the hero and an updates grid for upcoming events
- 🚀 **Project showcase:** a submission form, tag filters, and a curator-picked top-3 leaderboard
- 📱 **Responsive everywhere:** mobile navigation, fluid layouts, and touch-friendly controls
- ✨ **Subtle motion:** scroll-reveal animations and hover states
- ⚡ **Zero build step:** no framework, no bundler, no runtime dependencies

### Page sections

| Section | Purpose |
| --- | --- |
| **Navbar** | Brand lockup, navigation, theme toggle, and join CTA |
| **Hero** | Club introduction, icon tiles, next-workshop card, and interest CTA |
| **About** | Community principles and who the club is for |
| **Activities** | Meetings, workshops, and the hackathon |
| **Perks & Resources** | Claude Pro, API credits, hackathon bonus, and swag |
| **Updates** | Workshop and event announcements |
| **Project Showcase** | Member projects and the leaderboard |
| **FAQ** | Answers about membership, meetings, and Claude |
| **Join** | Final call to action |

---

## Getting started

```bash
git clone https://github.com/23f3001874/claude-builder-club.git
cd claude-builder-club
python -m http.server 8000
```

Then open <http://localhost:8000>. Any static server works too, for example `npx serve`.

### Project structure

```text
claude-builder-club/
├── index.html        # Page structure and content
├── style.css         # Design tokens, layout, themes, responsive rules
├── script.js         # Theme, mobile menu, reveals, showcase and leaderboard
├── claude_logo.jpg   # Brand mark
├── docs/
│   └── homepage.png  # README preview screenshot
├── LICENSE
└── README.md
```

---

## Maintainer guide

Common content updates and where to make them:

| To change… | Edit |
| --- | --- |
| Next workshop status in the hero | the `.next-meeting` block in [`index.html`](index.html) |
| Event cards in **Latest updates** | the `.updates-grid` cards in [`index.html`](index.html) |
| Leaderboard top 3 | the `CURATOR_PICKS` array in [`script.js`](script.js) |
| Perks, FAQ, or activities copy | the matching `<section>` in [`index.html`](index.html) |
| Colors and fonts | the CSS custom properties at the top of [`style.css`](style.css) |
| README screenshot | replace [`docs/homepage.png`](docs/homepage.png) |

> **Note:** Project submissions are currently saved in the visitor's own browser (`localStorage`), so they aren't shared between visitors. A shared backend would be a welcome contribution.

### Design tokens

| Token | Hex | Used for |
| --- | --- | --- |
| `--orange` | `#D97757` | Primary accent, Claude mark |
| `--pink` | `#C87B8A` | Icon tiles, highlights |
| `--olive` | `#8B9A6B` | Icon tiles, cards |
| `--blue` | `#7B8FC0` | Icon tiles, cards |
| `--beige` | `#EDE7DE` | Page background (light) |
| `--text` | `#1A1A1A` | Body text |

---

## Deployment

The site has no build command or environment variables.

1. Import the repository into [Vercel](https://vercel.com/new).
2. Set the framework preset to **Other** and leave the build command empty.
3. Deploy. Every push to `master` ships automatically.

It also runs as-is on Netlify, GitHub Pages, or any static web server.

---

## Contributing

Contributions are welcome! Good first ideas:

- ♿ Accessibility improvements (contrast, focus states, ARIA)
- 📱 Responsive and cross-browser polish
- 📣 New workshop or event announcements
- 🗄️ A shared backend for project submissions

**How to contribute:**

1. Fork the repo and create a branch: `git checkout -b feature/your-feature`
2. Make your change and test it locally on desktop and mobile widths.
3. Commit with a clear message and open a pull request explaining what changed and how you tested it.

Please keep changes focused, preserve the existing visual language, and avoid adding a framework for small static-site changes.

---

## Contact

**Claude Builder Club, IIT Madras**

- 🌐 Website: [iitm.claudebuilders.club](https://iitm.claudebuilders.club/)
- 🐙 GitHub: [@23f3001874](https://github.com/23f3001874)

## License

Released under the [MIT License](LICENSE).

<div align="center">
<sub>Built with ☕ and Claude by the Claude Builder Club community at IIT Madras.</sub>
</div>
