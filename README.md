# Claude Builder Club @ IIT Madras

The official community website for builders at IIT Madras who want to learn, experiment, and create with Claude. It gives students a clear path from discovering the club to joining the next workshop.

[![Live site](https://img.shields.io/badge/Live%20site-iitm.claudebuilders.club-D97757?style=flat-square)](https://iitm.claudebuilders.club/)
[![License: MIT](https://img.shields.io/badge/License-MIT-1A1A1A?style=flat-square)](LICENSE)

## Preview

![Claude Builder Club hero section](docs/homepage.png)

The focused preview above shows the landing-page identity: the Claude mark, the IIT Madras builder-club message, and the colorful activity icons that define the site.

## What is here

- A responsive landing page with an editorial visual system built around Claude's warm orange, pink, olive, and blue palette.
- Clear information about the club, activities, perks, FAQs, and member updates.
- A featured status card for the **Next Workshop session coming soon** state.
- Light mode by default, with an optional dark mode saved in `localStorage`.
- Mobile navigation, scroll reveals, hover states, and CTA links for joining the club.
- A lightweight static implementation with no build step or runtime dependency.

## Current sections

| Section | Purpose |
| --- | --- |
| Navbar | Brand lockup, navigation, theme switcher, and join actions |
| Hero | Club introduction, visual identity, and interest CTA |
| About | Community principles and who the club is for |
| Activities | Meetings, workshops, and the campus-wide hackathon |
| Perks & Resources | Claude Pro, API credits, swag, and member benefits |
| Updates | Workshop and event announcements |
| FAQ | Answers about membership, meetings, and Claude |

## Tech stack

- HTML5
- CSS3 with custom properties, Grid, Flexbox, and responsive media queries
- Vanilla JavaScript
- Google Fonts: Fraunces and DM Sans
- Vercel-compatible static deployment

## Run locally

```bash
git clone https://github.com/23f3001874/claude-builder-club.git
cd claude-builder-club
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. You can also use any static server, such as `npx serve`.

## Deploy

The project has no build command or environment variables.

1. Import the GitHub repository into [Vercel](https://vercel.com/new).
2. Leave the framework preset as **Other**.
3. Keep the build command empty and deploy.

The same static files can be hosted on Netlify, GitHub Pages, or any standard web server.

## Project structure

```text
claude-builder-club/
├── index.html          # Page structure and content
├── style.css           # Visual system, responsive layout, and themes
├── script.js           # Interactions, theme state, and UI behavior
├── claude_logo.jpg     # Brand asset
├── docs/
│   └── homepage.png    # README preview screenshot
├── LICENSE             # MIT open-source license
└── README.md
```

## Links

- [Live website](https://iitm.claudebuilders.club/)
- [GitHub repository](https://github.com/23f3001874/claude-builder-club)
- [Express interest](https://www.jotform.com/253555944387168)

## Contributing

Ideas and improvements are welcome. Good contributions include new workshop announcements, accessibility improvements, responsive refinements, content updates, and interactive features that help members discover or join the club.

1. Fork the repository.
2. Create a focused branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make and test your change locally.
4. Commit with a clear message and push your branch.
5. Open a pull request describing the change and how you tested it.

Please keep changes focused, preserve the existing visual language, and avoid adding a framework for small static-site improvements.

## License

This project is open source under the [MIT License](LICENSE). Contributions are welcome under the same license.

## Contact

**Claude Builder Club — IIT Madras**

- Email: 23f3001874@ds.study.iitm.ac.in
- GitHub: [@23f3001874](https://github.com/23f3001874)

Built by the Claude Builder Club community at IIT Madras.
