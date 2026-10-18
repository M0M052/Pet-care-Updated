# 🐾 Pet Care Reminders

A simple, modern pet care reminder app — pure HTML, CSS, and JavaScript with a
dark-violet glassmorphism design. Add reminders (feed, walk, medicine, or a
custom task), and the app keeps them in date-and-time order and flags anything
overdue. Reminders are stored locally in the browser.

Live demo: https://nova-companion.org

---

Notes and collaboration

- This repository (Pet-care-Updated) is a refreshed copy of the original site at https://nova-companion.org. The original site will be preserved separately so contributors can experiment here without affecting the archived site.
- If you'd like to collaborate, please fork the repo, create a branch for your changes, and open a pull request with a short description of what you changed and why.
- Contributions are welcome for:
  - accessibility and localization improvements
  - converting this into a Progressive Web App (PWA) or mobile app wrapper
  - adding sync/backup across devices (server-backed or using a portable store)
  - building browser extensions or companion apps that integrate with notifications
  - design/UX tweaks and new color themes

How to contribute (quick):
1. Fork this repository
2. Create a feature branch: `git checkout -b my-feature`
3. Make changes and commit: `git commit -am "Add feature X"`
4. Push and open a pull request from your fork

If you prefer, open an issue first to discuss larger changes before starting work.

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

Contact / ownership

This repo was created under the GitHub account: M0M052. If you'd like a different owner/org or a private visibility, tell me and I can recreate or transfer the repo accordingly.

