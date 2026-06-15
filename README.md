# VYOM VADODARIYA — Portfolio Website

A clean, animated personal portfolio website built with **HTML**, **CSS**, and **JavaScript** — no frameworks, no build step, fully deployable on **GitHub Pages**.

---

## 🚀 Overview

This is a premium student portfolio for **Vyom Vadodariya**, an AI/ML-focused Computer Science student. The website is designed to make a strong impression on professors, recruiters, hackathon judges, startup founders, and investors.

### Features
- ✅ Sticky glassmorphism navbar with active section highlighting
- ✅ Animated hero section with live canvas AI neural-network orb
- ✅ Smooth reveal animations on scroll (Intersection Observer)
- ✅ Live GitHub projects fetched via GitHub API
- ✅ Animated skill tags, stat counters, project cards
- ✅ Achievements, education timeline, contact section
- ✅ Subtle cursor trail effect (desktop only)
- ✅ Hero headline typewriter effect
- ✅ Fully responsive — mobile hamburger menu
- ✅ Light theme — powder blue, cream, white, navy

---

## 📁 File Structure

```
PORTFOLIO/
├── index.html      ← Main HTML structure
├── style.css       ← All styles (CSS variables, animations, responsive)
├── script.js       ← Navbar, canvas orb, GitHub API, animations
├── resume.pdf      ← ⚠️  Add your actual resume here (see below)
└── README.md       ← This file
```

---

## 🌐 How to Host on GitHub Pages (Free)

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it exactly: `your-username.github.io` *(for a personal site at `https://your-username.github.io`)* **OR** any name like `portfolio` *(hosted at `https://your-username.github.io/portfolio`)*
4. Set it to **Public**
5. Do **NOT** initialise with a README (you already have one)
6. Click **Create repository**

### Step 2 — Push Your Code

Open a terminal / PowerShell in the `PORTFOLIO/` folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual values.

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Set **Branch** to `main` and folder to `/ (root)`
6. Click **Save**

✅ Your site will be live in ~1 minute at:
- `https://YOUR-USERNAME.github.io` (if repo is named `your-username.github.io`)
- `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME` (for any other repo name)

> **Tip:** GitHub Pages serves `index.html` from the root automatically — no configuration needed.

---

## ✏️ Personalisation Checklist

Before sharing your portfolio, complete these steps:

### 🔴 Required
- [ ] **Add `resume.pdf`** — Place your actual resume in the root `PORTFOLIO/` folder and name it exactly `resume.pdf`
- [ ] **LinkedIn link** — In `index.html`, replace `https://linkedin.com/in/YOUR-LINKEDIN` with your real LinkedIn URL (search for `YOUR-LINKEDIN`)
- [ ] **Email** — In `index.html`, replace `your.email@example.com` with your real email address
- [ ] **University name** — In `index.html`, replace `[Your University Name]` with your actual university
- [ ] **Year and CGPA** — Replace `[Year]` and `[X.X / 10]` in the education section

### 🟡 Optional
- [ ] **Project descriptions** — If GitHub API fetch works, descriptions are auto-populated. If not, edit the fallback descriptions in `script.js` inside the `FALLBACK_PROJECTS` array
- [ ] **Live demo links** — Add `homepage` URLs to fallback projects in `script.js` if you have deployed demos
- [ ] **Add more achievements** — Edit the achievements section in `index.html`
- [ ] **Coursework** — Update the course tags in the education section

---

## 🔄 Updating Your Site

After making changes, just push again:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will automatically redeploy within ~1 minute.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary accent | `#4a90d9` (powder blue) |
| Background | `#fdf9f4` (cream) |
| Text primary | `#0f172a` (navy) |
| Text secondary | `#475569` (charcoal) |
| Font | Inter, DM Sans |

---

## 📱 Browser Support

- ✅ Chrome / Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## 📜 License

Personal use only. Built for VYOM VADODARIYA.

---

*Built with HTML, CSS, and JavaScript — © 2026 VYOM VADODARIYA*
