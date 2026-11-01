# 🏛️ Sci-Teach Library — Centralized STEM Resource Hub - MAIN OVERVIEW + GUIDE FOR OFFICERS

> **"SCI-TEACH LIBRARY — STAY PREPARED, TRAILBLAZERS!"**  
> *A centralized digital resource library designed for Senior High School STEM students ("Spartans") at the University of Science and Technology of Southern Philippines (USTP).*

---

## 📖 Overview

The **Sci-Teach Library** provides an organized, reliable, and comprehensive digital study repository for senior high school STEM Spartans. Built for **zero-config deployment on GitHub Pages**, it runs purely on vanilla web standards (**HTML5, modern CSS3, Vanilla ES6+ JavaScript**) without build steps, dependencies, or server overhead.

---

## 🗂️ Repository Architecture

```text
/
├── index.html              # Landing Page / Home Hub with Dominant Hero & Directory
├── grade-11.html           # Grade 11 Hub (Earth & Life Science, Physical Science)
├── grade-12.html           # Grade 12 Hub (Gen Physics, Gen Chem, Gen Bio, Midterm Reviewers)
├── series.html             # Sci-Teach Series Hub (Seasons 1–4 Facebook Reels)
├── contribute.html         # Spartan Contribution Portal (Student Submission Gateway)
├── admin.html              # Officer Admin Publishing Dashboard (Direct GitHub API Publishing)
├── backend/
│   └── Code.gs             # Google Apps Script backend to log submissions to Google Sheets
├── assets/
│   ├── css/
│   │   └── style.css       # Full stylesheet with CSS custom properties & responsive design
│   ├── js/
│   │   ├── data.js         # Centralized JSON data object containing all modules & metadata
│   │   ├── app.js          # Dynamic renderer, real-time client search, & form submissions
│   │   └── admin.js        # GitHub REST API direct-to-repository publishing controller
│   └── images/
│       ├── hero-library.png        # High-resolution library background scene (shifted right)
│       ├── spartan-raw.jpg         # Hero cover background image
│       ├── glass-iridescent.png    # Procedural iridescent liquid-glass wave reflection texture
│       ├── ustp-logo.png           # Official USTP University logo
│       └── ustp-logo-transparent.png# Official USTP University logo (transparent emblem)
└── README.md               # GitHub Pages setup and documentation
```

## ⚡ Core Features

### 1. Landing Page (`index.html`)
- **"What's New?" Section (3/14/2026)**:
  - Launching of the Sci-Teach Library
  - Added new Season 4 Episodes
  - Added exam-related review materials
- **Shortcut Cards**:
  - Grade 11 Materials (Blue Notebook)
  - Grade 12 Materials (Green Notebook)
  - Sci-Teach Series (Violet Reels)
  - Contribution Portal (Gold Box)

### 2. Grade 11 Resource Hub (`grade-11.html`)
- **Subject Switcher**:
  1. *Physical Science* (Modules 1, 2, 3)
  2. *Earth & Life Science*
- **Curriculum-Aligned Data**: Origin of light elements, stellar nucleosynthesis, IMFA, polarity, and geological materials.
- **Instant Search & Category Filtering**: Filter between *Watchable/Video*, *Readable/Text*, *Personal Notes/Docs*, and *Practice Exercises*.

### 3. Grade 12 Resource Hub (`grade-12.html`)
- **Subject Switcher**:
  1. *General Physics*
  2. *General Chemistry*
  3. *General Biology*
- **Semester Separation**: Clean tabs to filter between 1st Semester and 2nd Semester competencies.
- **Midterms Reviewer Hub**: Direct downloads for comprehensive midterm reviewers.

### 4. Sci-Teach Series Hub (`series.html`)
- **18 Video Reel Episodes**: Direct links to Facebook Reels across Seasons 1 to 4.
- **Instant Search & Season Filter**: Filter by season or search for specific scientific terms.

### 5. Contribution Portal (`contribute.html`) & Google Apps Script Backend (`backend/Code.gs`)
- **Student Submission Gateway**: Contributor Alias, Student ID / Section, Grade Level, Dynamic Subject selector, Resource Category, Topic Title, Cloud file link, and Description.
- **Google Sheets Cloud Integration**: Form submissions POST to a Google Apps Script Web App endpoint (`Code.gs`) that appends entries in real time to an active Google Sheet.
- **Client-Side Persistence (`sciTeachCache`)**: Submissions are cached locally in `localStorage` under `sciTeachCache` so students see their contributions instantly under *"Submissions On This Device"*.
- **Confirmation Modal**: Generates verification logs and formatted summary cards.

#### Setting Up Google Sheets Cloud Backend:
1. Create a Google Sheet for incoming contributions.
2. Go to **Extensions** → **Apps Script**.
3. Paste the contents of `backend/Code.gs`.
4. Click **Deploy** → **New deployment** → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL and replace `GOOGLE_APPS_SCRIPT_URL` at the top of `assets/js/app.js`.

---

### 6. Officer Admin Publishing Dashboard (`admin.html` & `assets/js/admin.js`)
- **Direct GitHub Contents API Integration**: Sci-Tech Society officers can publish vetted study materials directly to `assets/js/data.js` without manual coding or local Git tools.
- **Workflow**:
  1. Access `admin.html` (protected with Officer Passcode / PIN, default `SPARTAN2026`).
  2. Configure your GitHub Personal Access Token (PAT with `repo` or `Contents: Read & Write` scope), Owner, and Repo name in the GitHub Settings modal.
  3. Enter resource metadata (Grade, Subject, Target Module/Semester, Category, Title, Contributor, Drive Link, and Description).
  4. Click **Publish to Sci-Teach Library**: The dashboard fetches `assets/js/data.js`, decodes the base64 content, inserts the new resource object into the corresponding subject/module array, increments the verified resources counter, and sends a `PUT` request with an automated commit message.
  5. GitHub Pages will build and deploy the update live automatically.

---

## 🛠️ How to Add or Update Content in `assets/js/data.js`

To manually add a new reviewer or video episode, edit `assets/js/data.js`:

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

*“Scientia et Virtus — Stay Prepared, Trailblazers!”*
