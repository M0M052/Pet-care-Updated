# 🐾 Pet Care Reminders

A simple, modern pet care reminder app — pure HTML, CSS, and JavaScript with a
dark-violet glassmorphism design. Add reminders (feed, walk, medicine, or a
custom task), and the app keeps them in date-and-time order and flags anything
overdue. Reminders are stored locally in the browser.

Live demo: https://nova-companion.org

---

Notes and collaboration

- This repository (Pet-care-Updated) is a refreshed copy of the original site at https://nova-companion.org. The original site will be preserved separately so contributors can experiment here without disrupting the live experience.
- This repo is intended for collaborative experimentation and improvements, especially around mobile UX, app-like behavior, and extension ideas.
- If you'd like to collaborate, please fork the repo, create a branch for your changes, and open a pull request with a short description of what you changed and why.
- Contributions are welcome for:
  - accessibility and localization improvements
  - converting this into a Progressive Web App (PWA) or mobile app wrapper
  - adding sync/backup across devices (server-backed or using a portable store)
  - building browser extensions or companion apps that integrate with notifications
  - design/UX tweaks and new color themes

Contributing

We welcome contributions from developers, designers, and testers.

If you want to help, the best workflow is:

1. Fork this repository.
2. Create a feature branch: `git checkout -b my-feature`
3. Make your changes locally.
4. Commit with a clear message: `git commit -am "Add feature X"`
5. Push and open a pull request from your fork.

For larger changes, please open an issue first so we can discuss scope and avoid duplicate work.

Good collaboration areas:

- PWA support and installability on mobile devices
- responsive/mobile-first layout improvements
- system notifications and reminder alerts
- accessibility and keyboard support
- localization and language support
- browser extension prototype ideas
- syncing across devices or portable backup storage
- design exploration and new themes

Suggested contribution flow:

```bash
git clone https://github.com/YOUR-USERNAME/Pet-care-Updated.git
cd Pet-care-Updated
git checkout -b feature/my-idea
# make your changes
git add .
git commit -m "Add my idea"
git push -u origin feature/my-idea
```

Before opening a large PR, describe the idea in an issue so contributors can coordinate around the same approach.

Deployment (Cloudflare)

To deploy the static site using Cloudflare Workers / Pages (example):

1. `npx wrangler deploy`
2. Add a custom domain in the Cloudflare dashboard under your Worker → Domains.

(If you want, open an issue and describe how you host the live site — I can help add CI, Pages, or Cloudflare configuration to this repo.)

---

Local dev / example layout

Repository structure used here:

```
pet-care-reminders/
├── public/
│   └── index.html
└── README.md
```

Example local setup:

```bash
mkdir pet-care-reminders && cd pet-care-reminders
# create the public/ folder and the files above
git init
git add .
git commit -m "Pet care reminders app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pet-care-reminders.git
git push -u origin main
```

Quick local preview:

```bash
cd public
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

Contact / ownership

This repo was created under the GitHub account: M0M052. If you'd like a different owner/org or a private visibility, tell me and I can recreate or transfer the repo accordingly.
