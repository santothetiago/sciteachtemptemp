/**
 * Sci-Teach Library - Centralized Digital Resource Hub
 * University of Science and Technology of Southern Philippines (USTP)
 * Dynamic Renderer, Real-time Search/Filter, & UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initGlobalNavigation();
  initPageSpecificLogic();
});

/* ===================================================================
   1. GLOBAL NAVIGATION & SCROLL DYNAMICS
   =================================================================== */
function initGlobalNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  // Sticky header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close mobile menu on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active link based on current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-drawer-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ===================================================================
   2. PAGE SPECIFIC CONTROLLERS
   =================================================================== */
function initPageSpecificLogic() {
  const pageId = document.body.dataset.page;
  const data = window.SCITEACH_DATA;

  if (!data) {
    console.warn("SCITEACH_DATA not loaded.");
    return;
  }

  switch (pageId) {
    case 'home':
      initHomePage(data);
      break;
    case 'grade-11':
      initGrade11Page(data);
      break;
    case 'grade-12':
      initGrade12Page(data);
      break;
    case 'series':
      initSeriesPage(data);
      break;
    case 'contribute':
      initContributePage(data);
      break;
    default:
      break;
  }
}

/* ===================================================================
   3. LANDING PAGE LOGIC
   =================================================================== */
function initHomePage(data) {
  // Populate What's New dynamically
  const whatsNewContainer = document.getElementById('whatsNewContainer');
  if (whatsNewContainer && data.whatsNew) {
    whatsNewContainer.innerHTML = data.whatsNew.map(item => `
      <article class="announcement-card" data-category="${item.category}">
        <div>
          <div class="ann-card-header">
            <span class="ann-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              ${item.date}
            </span>
            <span class="ann-badge ${getBadgeClass(item.category)}">${item.badge}</span>
          </div>
          <h3 class="ann-title">${item.title}</h3>
          <p class="ann-desc">${item.description}</p>
        </div>
        <div>
          <a href="${getLinkForCategory(item.category)}" class="ann-footer-link">
            <span>Explore Updates</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </article>
    `).join('');
  }

  // Animate stats counter
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const rawValue = stat.dataset.value;
    if (rawValue) {
      stat.textContent = rawValue;
    }
  });
}

function getBadgeClass(cat) {
  switch (cat?.toLowerCase()) {
    case 'video': return 'badge-violet';
    case 'reviewers': return 'badge-green';
    default: return 'badge-gold';
  }
}

function getLinkForCategory(cat) {
  switch (cat?.toLowerCase()) {
    case 'video': return 'series.html';
    case 'reviewers': return 'grade-12.html';
    default: return 'grade-11.html';
  }
}

/* ===================================================================
   4. GRADE 11 HUB CONTROLLER
   =================================================================== */
function initGrade11Page(data) {
  let activeSubjectId = 'physical-science'; // Default subject tab
  let activeCategory = 'all';               // Category filter
  let searchQuery = '';

  const subjectTabs = document.querySelectorAll('[data-subject-target]');
  const categoryChips = document.querySelectorAll('[data-category-target]');
  const searchInput = document.getElementById('grade11Search');
  const searchClear = document.getElementById('searchClearBtn');
  const container = document.getElementById('grade11ModulesContainer');

  function render() {
    const subject = data.grade11.subjects.find(s => s.id === activeSubjectId);
    if (!subject || !container) return;

    let filteredModules = subject.modules.map(module => {
      // Filter resources within module
      const filteredResources = module.resources.filter(res => {
        // Category check
        const matchesCat = (activeCategory === 'all') || (normalizeCategory(res.type) === activeCategory);

        // Search check
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = !q || 
          res.title.toLowerCase().includes(q) ||
          res.description.toLowerCase().includes(q) ||
          res.contributor.toLowerCase().includes(q) ||
          res.tags.some(t => t.toLowerCase().includes(q)) ||
          module.title.toLowerCase().includes(q) ||
          module.topics.some(tp => tp.toLowerCase().includes(q));

        return matchesCat && matchesSearch;
      });

      return {
        ...module,
        matchedResources: filteredResources
      };
    }).filter(m => m.matchedResources.length > 0 || (searchQuery === '' && activeCategory === 'all'));

    if (filteredModules.length === 0) {
      container.innerHTML = renderEmptyState(searchQuery, activeCategory);
      return;
    }

    container.innerHTML = filteredModules.map(module => `
      <section class="module-accordion-card">
        <header class="module-header">
          <div class="module-title-group">
            <span class="module-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Module ${module.moduleNumber} • Physical Science
            </span>
            <h2 class="module-heading">${module.title}</h2>
          </div>
          <div class="module-contrib-pill" title="Module Contributors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>${module.contributors}</span>
          </div>
        </header>

        <div class="module-topics-list">
          ${module.topics.map(t => `
            <span class="topic-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              ${t}
            </span>
          `).join('')}
        </div>

        <div class="resources-table-wrap">
          <table class="resources-table">
            <thead>
              <tr>
                <th style="width: 40%;">Resource Title & Topic</th>
                <th style="width: 20%;">Category</th>
                <th style="width: 25%;">Contributor</th>
                <th style="width: 15%; text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${module.matchedResources.map(res => `
                <tr>
                  <td>
                    <div class="resource-title-cell">
                      <a href="${res.url}" target="${res.url.startsWith('http') ? '_blank' : '_self'}" class="resource-title-link">
                        ${highlightText(res.title, searchQuery)}
                      </a>
                      <span class="resource-sub-meta">${res.format || 'Study File'} • ${res.description}</span>
                    </div>
                  </td>
                  <td>
                    <span class="cat-badge ${getCategoryBadgeClass(res.type)}">
                      ${res.type}
                    </span>
                  </td>
                  <td>
                    <span class="resource-sub-meta">${res.contributor}</span>
                  </td>
                  <td style="text-align: right;">
                    ${renderActionBtn(res)}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `).join('');

    attachModalTriggers();
  }

  // Subject tab click listeners
  subjectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      subjectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeSubjectId = tab.dataset.subjectTarget;
      render();
    });
  });

  // Category filter chips
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.categoryTarget;
      render();
    });
  });

  // Search input with debounce
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClear) {
        searchClear.classList.toggle('visible', searchQuery.length > 0);
      }
      render();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.remove('visible');
      render();
    });
  }

  render();
}

/* ===================================================================
   5. GRADE 12 HUB CONTROLLER
   =================================================================== */
function initGrade12Page(data) {
  let activeSubjectId = 'general-physics';
  let activeSemester = 'all';
  let activeCategory = 'all';
  let searchQuery = '';

  const subjectTabs = document.querySelectorAll('[data-g12-subject]');
  const semesterTabs = document.querySelectorAll('[data-semester-target]');
  const categoryChips = document.querySelectorAll('[data-g12-cat]');
  const searchInput = document.getElementById('grade12Search');
  const searchClear = document.getElementById('g12SearchClearBtn');
  const container = document.getElementById('grade12Container');

  function render() {
    const subject = data.grade12.subjects.find(s => s.id === activeSubjectId);
    if (!subject || !container) return;

    let filteredSemesters = subject.semesters.map(sem => {
      // Semester filter
      if (activeSemester !== 'all' && sem.semester.toLowerCase() !== activeSemester.toLowerCase()) {
        return null;
      }

      // Filter resources within semester
      const filteredResources = sem.resources.filter(res => {
        const matchesCat = (activeCategory === 'all') || (normalizeCategory(res.category) === activeCategory);
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = !q ||
          res.title.toLowerCase().includes(q) ||
          res.description.toLowerCase().includes(q) ||
          res.contributor.toLowerCase().includes(q) ||
          (res.tags && res.tags.some(t => t.toLowerCase().includes(q))) ||
          sem.topics.toLowerCase().includes(q);

        return matchesCat && matchesSearch;
      });

      return {
        ...sem,
        matchedResources: filteredResources
      };
    }).filter(Boolean);

    // Further filter out semesters with 0 matched resources if search is active
    filteredSemesters = filteredSemesters.filter(s => s.matchedResources.length > 0 || (searchQuery === '' && activeCategory === 'all'));

    if (filteredSemesters.length === 0) {
      container.innerHTML = renderEmptyState(searchQuery, activeCategory);
      return;
    }

    container.innerHTML = filteredSemesters.map(sem => `
      <section class="module-accordion-card">
        <header class="module-header">
          <div class="module-title-group">
            <span class="module-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              ${subject.name} • ${sem.semester}
            </span>
            <h2 class="module-heading">${sem.topics}</h2>
          </div>
          <div class="module-contrib-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>${sem.leadContributor}</span>
          </div>
        </header>

        <div class="resources-table-wrap">
          <table class="resources-table">
            <thead>
              <tr>
                <th style="width: 42%;">Resource Topic & Details</th>
                <th style="width: 18%;">Category</th>
                <th style="width: 25%;">Contributor</th>
                <th style="width: 15%; text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${sem.matchedResources.map(res => `
                <tr>
                  <td>
                    <div class="resource-title-cell">
                      <a href="${res.url}" target="${res.url.startsWith('http') ? '_blank' : '_self'}" class="resource-title-link">
                        ${highlightText(res.title, searchQuery)}
                      </a>
                      <span class="resource-sub-meta">${res.format || 'Study Resource'} • ${res.description}</span>
                    </div>
                  </td>
                  <td>
                    <span class="cat-badge ${getCategoryBadgeClass(res.category)}">
                      ${res.category}
                    </span>
                  </td>
                  <td>
                    <span class="resource-sub-meta">${res.contributor}</span>
                  </td>
                  <td style="text-align: right;">
                    ${renderActionBtn(res)}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `).join('');

    attachModalTriggers();
  }

  subjectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      subjectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeSubjectId = tab.dataset.g12Subject;
      render();
    });
  });

  semesterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      semesterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeSemester = tab.dataset.semesterTarget;
      render();
    });
  });

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.g12Cat;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClear) {
        searchClear.classList.toggle('visible', searchQuery.length > 0);
      }
      render();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.remove('visible');
      render();
    });
  }

  render();
}

/* ===================================================================
   6. SCI-TEACH SERIES HUB CONTROLLER
   =================================================================== */
function initSeriesPage(data) {
  let activeSeason = 'all';
  let searchQuery = '';

  const seasonTabs = document.querySelectorAll('[data-season-target]');
  const searchInput = document.getElementById('seriesSearch');
  const searchClear = document.getElementById('seriesSearchClear');
  const container = document.getElementById('seriesGridContainer');

  function render() {
    if (!container || !data.series) return;

    let allEpisodes = [];
    data.series.forEach(seasonObj => {
      if (activeSeason === 'all' || activeSeason === seasonObj.season.toString()) {
        seasonObj.episodes.forEach(ep => {
          allEpisodes.push({
            ...ep,
            seasonNum: seasonObj.season,
            seasonTitle: seasonObj.title
          });
        });
      }
    });

    // Filter by search query
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      allEpisodes = allEpisodes.filter(ep => 
        ep.title.toLowerCase().includes(q) ||
        ep.description.toLowerCase().includes(q) ||
        ep.subject.toLowerCase().includes(q) ||
        ep.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (allEpisodes.length === 0) {
      container.innerHTML = renderEmptyState(searchQuery, `Season ${activeSeason}`);
      return;
    }

    container.innerHTML = allEpisodes.map(ep => `
      <article class="series-episode-card">
        <div class="episode-thumbnail-wrap">
          <span class="episode-badge-pill">S0${ep.seasonNum} • EP 0${ep.epNumber}</span>
          <span class="episode-duration-pill">${ep.duration || 'Facebook Reel'}</span>
          <a href="${ep.url}" target="_blank" rel="noopener noreferrer" class="play-circle-overlay" title="Watch on Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </a>
        </div>
        <div class="episode-content">
          <div>
            <div class="episode-subject-label">${ep.subject}</div>
            <h3 class="episode-title">${highlightText(ep.title, searchQuery)}</h3>
            <p class="episode-desc">${ep.description}</p>
          </div>
          <div>
            <div class="episode-tags">
              ${ep.tags.map(t => `<span class="shortcut-tag">#${t}</span>`).join('')}
            </div>
            <a href="${ep.url}" target="_blank" rel="noopener noreferrer" class="btn-watch-reel">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <span>Watch Reel on Facebook</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  seasonTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      seasonTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeSeason = tab.dataset.seasonTarget;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClear) {
        searchClear.classList.toggle('visible', searchQuery.length > 0);
      }
      render();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.remove('visible');
      render();
    });
  }

  render();
}

/* ===================================================================
   7. CONTRIBUTION PORTAL CONTROLLER
   =================================================================== */
function initContributePage(data) {
  const form = document.getElementById('contributeForm');
  const gradeLevelSelect = document.getElementById('gradeLevel');
  const subjectSelect = document.getElementById('targetSubject');
  const userSubmissionsList = document.getElementById('userSubmissionsList');

  // Dynamic subjects based on grade level
  const subjectsByGrade = {
    "11": [
      { id: "Physical Science", label: "Physical Science (Grade 11)" },
      { id: "Earth & Life Science", label: "Earth & Life Science (Grade 11)" }
    ],
    "12": [
      { id: "General Physics", label: "General Physics 1 & 2 (Grade 12)" },
      { id: "General Chemistry", label: "General Chemistry 1 & 2 (Grade 12)" },
      { id: "General Biology", label: "General Biology 1 & 2 (Grade 12)" }
    ]
  };

  function updateSubjects() {
    const val = gradeLevelSelect.value;
    const subjects = subjectsByGrade[val] || [];
    subjectSelect.innerHTML = subjects.map(s => `<option value="${s.id}">${s.label}</option>`).join('');
  }

  if (gradeLevelSelect && subjectSelect) {
    gradeLevelSelect.addEventListener('change', updateSubjects);
    updateSubjects();
  }

  // Render recent submissions from localStorage
  function renderLocalSubmissions() {
    if (!userSubmissionsList) return;
    const stored = JSON.parse(localStorage.getItem('sci_teach_user_contributions') || '[]');

    if (stored.length === 0) {
      userSubmissionsList.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-subtle); font-size: 0.85rem;">
          No contributions submitted from this device yet. Submit your reviewers above!
        </div>
      `;
      return;
    }

    userSubmissionsList.innerHTML = stored.map((item, index) => `
      <div class="sub-item-pill">
        <div>
          <div style="font-weight: 700; color: #fff; font-size: 0.88rem;">${item.topicTitle}</div>
          <div style="font-size: 0.75rem; color: var(--theme-gold-light);">
            ${item.subject} • ${item.resourceType} • Submitted by ${item.contributorName}
          </div>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <a href="${item.driveLink}" target="_blank" class="btn-table-action" style="padding: 0.3rem 0.75rem; font-size: 0.72rem;">View Link</a>
          <button onclick="deleteSubmission(${index})" style="color: #ef4444; font-size: 0.85rem; padding: 0.3rem;" title="Delete item">✕</button>
        </div>
      </div>
    `).join('');
  }

  window.deleteSubmission = function(index) {
    const stored = JSON.parse(localStorage.getItem('sci_teach_user_contributions') || '[]');
    stored.splice(index, 1);
    localStorage.setItem('sci_teach_user_contributions', JSON.stringify(stored));
    renderLocalSubmissions();
    showToast("Submission deleted from local device storage.", "info");
  };

  // Handle form submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const newContribution = {
        id: "contrib-" + Date.now(),
        date: new Date().toLocaleDateString('en-US'),
        contributorName: document.getElementById('contributorName').value.trim(),
        studentId: document.getElementById('studentId')?.value.trim() || 'N/A',
        gradeLevel: gradeLevelSelect.value,
        subject: subjectSelect.value,
        resourceType: document.getElementById('resourceType').value,
        topicTitle: document.getElementById('topicTitle').value.trim(),
        driveLink: document.getElementById('driveLink').value.trim(),
        description: document.getElementById('description').value.trim(),
        verified: false
      };

      // Save to localStorage
      const stored = JSON.parse(localStorage.getItem('sci_teach_user_contributions') || '[]');
      stored.unshift(newContribution);
      localStorage.setItem('sci_teach_user_contributions', JSON.stringify(stored));

      form.reset();
      updateSubjects();
      renderLocalSubmissions();

      showSuccessModal(newContribution);
    });
  }

  renderLocalSubmissions();
}

function showSuccessModal(item) {
  const modal = document.getElementById('resourceModal');
  const modalBody = document.getElementById('modalContent');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(245, 158, 11, 0.2); border: 2px solid var(--theme-gold-light); display: inline-flex; align-items: center; justify-content: center; color: var(--theme-gold-light); font-size: 1.8rem; margin-bottom: 1rem;">
        ✓
      </div>
      <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; margin-bottom: 0.5rem;">SUBMISSION LOGGED!</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Thank you, Spartan <strong>${item.contributorName}</strong>. Your study material has been registered and is queued for verification by the Sci-Tech Society Academic Officers.</p>
    </div>
    
    <div style="background: rgba(7, 10, 18, 0.7); border: 1px solid var(--glass-border); border-radius: var(--radius-sm); padding: 1.25rem; font-size: 0.82rem; margin-bottom: 1.5rem;">
      <div style="margin-bottom: 0.4rem;"><strong>Topic:</strong> ${item.topicTitle}</div>
      <div style="margin-bottom: 0.4rem;"><strong>Subject:</strong> ${item.subject} (Grade ${item.gradeLevel})</div>
      <div style="margin-bottom: 0.4rem;"><strong>Category:</strong> ${item.resourceType}</div>
      <div><strong>Link:</strong> <a href="${item.driveLink}" target="_blank" style="color: var(--color-primary-light);">${item.driveLink}</a></div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: center;">
      <button onclick="closeModal()" class="btn-hero-primary" style="padding: 0.65rem 1.75rem; font-size: 0.82rem;">Back to Portal</button>
    </div>
  `;

  modal.classList.add('open');
}

/* ===================================================================
   8. MODAL VIEWER & TOAST NOTIFICATION HELPERS
   =================================================================== */
function attachModalTriggers() {
  document.querySelectorAll('[data-preview-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.dataset.previewTitle;
      const desc = btn.dataset.previewDesc;
      const type = btn.dataset.previewType;
      const contrib = btn.dataset.previewContrib;
      const url = btn.dataset.previewUrl;

      openResourceDetailsModal({ title, desc, type, contrib, url });
    });
  });
}

function openResourceDetailsModal(item) {
  const modal = document.getElementById('resourceModal');
  const modalBody = document.getElementById('modalContent');
  if (!modal || !modalBody) return;

  const isExternal = item.url && item.url.startsWith('http');

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="cat-badge ${getCategoryBadgeClass(item.type)}" style="margin-bottom: 0.75rem;">
        ${item.type}
      </span>
      <h2 style="font-family: var(--font-serif); font-size: 1.5rem; color: #fff; line-height: 1.3; margin-bottom: 0.75rem;">
        ${item.title}
      </h2>
      <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.25rem;">
        ${item.desc}
      </p>
      <div style="padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(255, 255, 255, 0.04); border: 1px solid var(--glass-border); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.5rem;">
        <strong>Verified Contributor:</strong> ${item.contrib}
      </div>
    </div>
    
    <div style="display: flex; gap: 1rem; justify-content: flex-end; align-items: center;">
      <button onclick="closeModal()" class="btn-hero-secondary" style="padding: 0.6rem 1.25rem; font-size: 0.8rem;">Close</button>
      <a href="${item.url}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn-hero-primary" style="padding: 0.6rem 1.4rem; font-size: 0.8rem;">
        ${isExternal ? 'Open Resource ↗' : 'Download Material ↓'}
      </a>
    </div>
  `;

  modal.classList.add('open');
}

window.closeModal = function() {
  const modal = document.getElementById('resourceModal');
  if (modal) {
    modal.classList.remove('open');
  }
};

// Close modal when clicking on overlay background
document.addEventListener('click', (e) => {
  const modal = document.getElementById('resourceModal');
  if (modal && e.target === modal) {
    closeModal();
  }
});

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ===================================================================
   9. UTILITY HELPERS
   =================================================================== */
function normalizeCategory(typeStr) {
  if (!typeStr) return 'readable';
  const s = typeStr.toLowerCase();
  if (s.includes('watch') || s.includes('video')) return 'watchable';
  if (s.includes('note') || s.includes('doc')) return 'notes';
  if (s.includes('exercise') || s.includes('practice') || s.includes('quiz') || s.includes('drill')) return 'exercises';
  return 'readable';
}

function getCategoryBadgeClass(typeStr) {
  const norm = normalizeCategory(typeStr);
  switch (norm) {
    case 'watchable': return 'cat-watchable';
    case 'notes': return 'cat-notes';
    case 'exercises': return 'cat-exercises';
    default: return 'cat-readable';
  }
}

function renderActionBtn(res) {
  const isVideo = normalizeCategory(res.type || res.category) === 'watchable';
  const isExternal = res.url && res.url.startsWith('http');

  if (isVideo || isExternal) {
    return `
      <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn-table-action" style="background: rgba(124, 58, 237, 0.2); border-color: rgba(124, 58, 237, 0.4);">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        <span>Watch ↗</span>
      </a>
    `;
  }

  return `
    <button type="button" class="btn-table-action" data-preview-id="${res.id}" data-preview-title="${res.title}" data-preview-desc="${res.description}" data-preview-type="${res.type || res.category}" data-preview-contrib="${res.contributor}" data-preview-url="${res.url}">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      <span>Access</span>
    </button>
  `;
}

function highlightText(text, query) {
  if (!query || !query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark style="background: rgba(245, 158, 11, 0.35); color: #fff; padding: 0.1em 0.3em; border-radius: 3px;">$1</mark>');
}

function renderEmptyState(query, category) {
  return `
    <div style="text-align: center; padding: 4.5rem 1.5rem; background: var(--glass-bg); border: 1px dashed var(--glass-border); border-radius: var(--radius-lg); margin-top: 1.5rem;">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-subtle);">🛡️</div>
      <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem;">NO MATCHING SPARTAN RESOURCES FOUND</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 480px; margin: 0 auto 1.5rem;">
        No materials matched "${query || category}". Try adjusting your keywords or browse all modules.
      </p>
      <button onclick="document.querySelector('.search-input').value = ''; location.reload();" class="btn-hero-secondary" style="font-size: 0.8rem; padding: 0.6rem 1.5rem;">
        Reset Filters
      </button>
    </div>
  `;
}
