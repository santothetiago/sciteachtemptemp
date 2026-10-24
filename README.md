# 🏛️ Sci-Teach Library — Centralized STEM Resource Hub

> **"CONQUER STEM — UNSEEN, UNTOUCHABLE, SCHOLAR"**  
> *A centralized digital resource library designed for Senior High School STEM students ("Spartans") at the University of Science and Technology of Southern Philippines (USTP).*

---

## 📖 Overview

The **Sci-Teach Library** provides an organized, reliable, and comprehensive digital study repository for senior high school STEM Spartans. Built for **zero-config deployment on GitHub Pages**, it runs purely on vanilla web standards (**HTML5, modern CSS3, Vanilla ES6+ JavaScript**) without build steps, dependencies, or server overhead.

The platform's visual identity matches an epic **Spartan cinematic sci-fi aesthetic**:
- **Hero cover layout**: Dramatic dark celestial storm backdrop with an ornate Spartan hoplite warrior, liquid iridescent ribbons, and subtle ambient glows.
- **Top floating glassmorphic pill navigation bar**: Centered capsule links and distinct CTA pill buttons.
- **Cinematic serif typography**: Google Fonts *Cinzel* for bold headlines paired with high-legibility *Plus Jakarta Sans* body text.
- **Floating holographic glassmorphic status cards**: Floating over the warrior background displaying live hub telemetry and verification seals.
- **Subject-themed color coding**:
  - **Grade 11 Theme**: Soft Sky Blue / Cyan (`#0284c7`) — Blue Notebook
  - **Grade 12 Theme**: Bio/Chem Green (`#059669`) — Green Notebook
  - **Sci-Teach Series Theme**: Vibrant Violet (`#7c3aed`) — Video Tutorials Hub
  - **Spartan Bronze/Gold**: Accent & Verification (`#d97706`, `#fbbf24`)

---

## 🗂️ Repository Architecture

```text
/
├── index.html              # Landing Page / Home Hub with Cinematic Hero & Directory
├── grade-11.html           # Grade 11 Hub (Earth & Life Science, Physical Science)
├── grade-12.html           # Grade 12 Hub (Gen Physics, Gen Chem, Gen Bio, Midterm Reviewers)
├── series.html             # Sci-Teach Series Hub (Seasons 1–4 Facebook Reels)
├── contribute.html         # Spartan Contribution Portal (Student Submission Gateway)
├── assets/
│   ├── css/
│   │   └── style.css       # Full stylesheet with CSS custom properties & responsive grid/flexbox
│   ├── js/
│   │   ├── data.js         # Centralized JSON data object containing all modules & metadata
│   │   └── app.js          # Dynamic renderer, real-time client search, & interactions
│   └── images/
│       ├── hero-clean.jpg  # Pristine 16:9 Spartan warrior cinematic background
│       └── spartan-hero.jpg# Reference artwork asset
└── README.md               # GitHub Pages setup and documentation
```

---

## 🚀 Zero-Config Deployment on GitHub Pages

This project requires **no npm install, no bundlers, and no compilation**. To deploy:

1. **Push or Fork the Repository** to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sci-Teach Library for USTP Spartans"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** (tab at the top).
   - In the left sidebar, click **Pages** (under "Code and automation").
   - Under **Build and deployment**:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` (or `master`)
     - **Folder**: `/ (root)`
   - Click **Save**.

3. **Instant Live URL**:
   Within 30–60 seconds, your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

---

## ⚡ Core Features

### 1. Landing Page (`index.html`)
- **Cinematic Spartan Hero**: Exact layout match with centered floating glassmorphic pill navbar, circular action button `[ ↗ ]`, distinct pill CTA `[ CONTRIBUTE ]`, and floating iridescent status cards.
- **"What's New?" Section (3/14/2026)**:
  - Launching of the Sci-Teach Library
  - Added new Season 4 Episodes
  - Added exam-related review materials
- **Notebook Shortcut Cards**:
  - Grade 11 Materials (Blue Notebook)
  - Grade 12 Materials (Green Notebook)
  - Sci-Teach Series (Violet Reels)
  - Contribution Portal (Gold Box)
- **Live Spartan Telemetry**: Dynamic metrics displaying 34+ modules, 18 video reels, and 52+ reviewers.

### 2. Grade 11 Resource Hub (`grade-11.html`)
- **Subject Switcher**:
  1. *Physical Science* (Modules 1, 2, 3)
  2. *Earth & Life Science*
- **Curriculum-Aligned Data**:
  - **Module 1**: Origin of Light Elements, The Light Elements, Formation of Heavy Elements, Neutron Capture (s-process & r-process).
  - **Module 2**: Atomic Symbol, Atomic Number, Mass Number, Prediction & Discovery of New Elements.
  - **Module 3**: Chemical Bonding, Intermolecular Forces of Attraction (IMFA), Strength of IMFA & Physical Properties.
  - *Lead Contributors*: Ma'am Glea Maes Sales & Sci-Tech Society Officers.
- **Resource Categories**: Watchable / Video, Readable / Text, Personal Notes / Docs, Practice Exercises.
- **Client-Side Real-Time Search**: Instant filtering by topic, contributor, or keyword with search term highlighting.

### 3. Grade 12 Resource Hub (`grade-12.html`)
- **Subject Switcher**:
  1. *General Physics*
  2. *General Chemistry*
  3. *General Biology*
- **Semestral & Reviewer Coverage**:
  - **General Physics**:
    - *1st Sem*: Units & Physical Quantities, Error Analysis, Vectors, Kinematics, Projectile Motion. *(Contrib: Ma'am Naurah Malawi / Officers)*
    - *2nd Sem*: Electric Charge & Field, Electric Flux & Gauss’s Law, Electric Potential & Difference. *(Contrib: Ma'am Naurah Malawi / Officers)*
    - *Midterms Reviewer*: Comprehensive 2nd Semester Midterms Reviewer. *(Contrib: Sci-Tech Society Officers)*
  - **General Chemistry**:
    - *1st Sem*: Empirical & Molecular Formula, Stoichiometry, Chemical Reactions, Gas Laws, Limiting/Excess Reactants. *(Contrib: Ma'am Naurah Malawi / Officers)*
    - *2nd Sem*: Kinetic Molecular Theory, IMFA, Properties of Liquids, Solids, Phase Changes. *(Contrib: Ma'am Charisa Bee Aleonar / Officers)*
  - **General Biology**:
    - *1st Sem*: Spontaneous Generation Theory, Plant & Animal Organ Systems. *(Contrib: Ma'am Charisa Bee Aleonar / Officers)*
    - *2nd Sem*: Mendelian Inheritance, Gene Interaction, Pedigree Analysis. *(Contrib: Ma'am Charisa Bee Aleonar / Officers)*
- **Interactive Modals**: Detailed preview with one-click direct access.

### 4. Sci-Teach Series Hub (`series.html`)
- **All 18 Episodes across Seasons 1 to 4** streaming directly on Facebook Reels:
  - **Season 1**:
    - EP 1: *Origins of the Universe & Rock Cycle*
    - EP 2: *Photosynthesis & Cellular Respiration*
    - EP 3: *Gas Laws to Ideal Gas Laws*
    - EP 4: *Newton's Law to Projectile Motion*
  - **Season 2**:
    - EP 1: *Types of Decay*
    - EP 3: *Electric Charge to Coulomb's Law*
    - EP 4: *Electric Flux*
  - **Season 3**:
    - EP 1: *Stoichiometry in Action*
    - EP 2: *Science of Liquids and Solids*
    - EP 3: *Mendelian Inheritance*
    - EP 4: *Journey through Coulomb's Law*
    - EP 5: *The Big Bang Theory*
  - **Season 4**:
    - EP 1: *Rocks*
    - EP 2: *Auras of Electricity*
    - EP 3: *Nuclear Fusion Reactions*
    - EP 4: *Phase Changes of Matter*
    - EP 5: *Patterns of Inheritance and Pedigree Analysis*
- **Instant Search & Season Filter**: Filter by season or search for specific scientific terms.

### 5. Contribution Portal (`contribute.html`)
- **Student Submission Gateway**: Contributor Name, Grade Level, Dynamic Subject selector, Resource Type, Cloud link, and Description.
- **Client-Side Persistence**: Submissions are cached locally in `localStorage` so students see their contributions instantly under *"Submissions On This Device"*.
- **Confirmation Modal**: Generates verification logs and formatted summary cards.

---

## 🛠️ How to Add or Update Content in `assets/js/data.js`

To add a new reviewer or video episode, edit `assets/js/data.js`:

```javascript
// Example: Adding a resource to Grade 11 Physical Science Module 1
{
  id: "ps-m1-r6",
  title: "New Reviewer Title Here",
  type: "Practice Exercises", // 'Watchable/Video', 'Readable/Text', 'Personal Notes/Docs', 'Practice Exercises'
  format: "PDF Problem Set",
  description: "Brief summary of problems and topics covered.",
  url: "https://drive.google.com/your-file-link",
  contributor: "Your Name / Sci-Tech Officer",
  tags: ["Topic", "Keywords", "Reviewer"]
}
```

Save the file and commit to `main` — GitHub Pages updates automatically within seconds!

---

## 👥 Acknowledgments & Credits

- **University of Science and Technology of Southern Philippines (USTP)**
- **Senior High School STEM Program ("Spartans")**
- **Sci-Tech Society Officers & Academic Committee**
- **Faculty Reviewers & Mentors**:
  - Ma'am Glea Maes Sales *(Physical Science)*
  - Ma'am Naurah Malawi *(General Physics & General Chemistry 1st Sem)*
  - Ma'am Charisa Bee Aleonar *(General Biology & General Chemistry 2nd Sem)*

---

*“Scientia et Virtus — Defend your grades, conquer STEM.”*
