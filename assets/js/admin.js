/**
 * Sci-Teach Library — Officer Admin Publishing Dashboard
 * University of Science and Technology of Southern Philippines (USTP)
 * Senior High School STEM Program ("Spartans")
 *
 * Handles direct GitHub REST API Contents publishing:
 * GET & PUT /repos/{owner}/{repo}/contents/assets/js/data.js
 */

document.addEventListener('DOMContentLoaded', () => {
  initAdminDashboard();
});

const DEFAULT_OFFICER_PIN = 'SPARTAN2026';

function initAdminDashboard() {
  const form = document.getElementById('adminPublishForm');
  const gradeLevelSelect = document.getElementById('adminGradeLevel');
  const subjectSelect = document.getElementById('adminTargetSubject');
  const sectionSelect = document.getElementById('adminTargetSection');
  const settingsModal = document.getElementById('settingsModal');
  const settingsForm = document.getElementById('githubSettingsForm');
  const btnOpenSettings = document.getElementById('btnOpenSettings');
  const btnQuickConfig = document.getElementById('btnQuickConfig');

  // Load and display GitHub configuration status
  updateGitHubStatusDisplay();
  renderOfficerPublishes();

  // Subject and Module mapping
  const curriculumHierarchy = {
    "11": [
      {
        id: "physical-science",
        name: "Physical Science",
        sections: [
          { id: "ps-mod-1", label: "Module 1: Origin & Formation of Elements" },
          { id: "ps-mod-2", label: "Module 2: Synthesis of New Elements & Nuclear Chemistry" },
          { id: "ps-mod-3", label: "Module 3: Polarity & Intermolecular Forces (IMFA)" }
        ]
      },
      {
        id: "earth-life",
        name: "Earth & Life Science",
        sections: [
          { id: "els-mod-1", label: "Module 1: Origin and Structure of the Earth" },
          { id: "els-mod-2", label: "Module 2: Earth Materials, Minerals & Petrology" }
        ]
      }
    ],
    "12": [
      {
        id: "general-physics",
        name: "General Physics",
        sections: [
          { id: "sem-1", label: "1st Semester (Mechanics, Kinematics, Vectors, Fluids)" },
          { id: "sem-2", label: "2nd Semester (Electrostatics, Coulomb's Law, Circuits)" }
        ]
      },
      {
        id: "general-chemistry",
        name: "General Chemistry",
        sections: [
          { id: "sem-1", label: "1st Semester (Stoichiometry, Solutions, Gas Laws)" },
          { id: "sem-2", label: "2nd Semester (Kinetics, Equilibrium, Acid-Base)" }
        ]
      },
      {
        id: "general-biology",
        name: "General Biology",
        sections: [
          { id: "sem-1", label: "1st Semester (Cell Biology, Metabolism, Photosynthesis)" },
          { id: "sem-2", label: "2nd Semester (Genetics, Evolution, Human Systems)" }
        ]
      }
    ]
  };

  function updateSubjectOptions() {
    const grade = gradeLevelSelect.value;
    const subjects = curriculumHierarchy[grade] || [];
    subjectSelect.innerHTML = subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
    updateSectionOptions();
  }

  function updateSectionOptions() {
    const grade = gradeLevelSelect.value;
    const subjectId = subjectSelect.value;
    const subject = (curriculumHierarchy[grade] || []).find(s => s.id === subjectId);
    if (!subject) return;

    sectionSelect.innerHTML = subject.sections.map(sec => `
      <option value="${sec.id}">${sec.label}</option>
    `).join('');
  }

  if (gradeLevelSelect && subjectSelect) {
    gradeLevelSelect.addEventListener('change', updateSubjectOptions);
    subjectSelect.addEventListener('change', updateSectionOptions);
    updateSubjectOptions();
  }

  // Settings Modal Controls
  if (btnOpenSettings) {
    btnOpenSettings.addEventListener('click', openSettingsModal);
  }
  if (btnQuickConfig) {
    btnQuickConfig.addEventListener('click', openSettingsModal);
  }

  if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const owner = document.getElementById('cfgOwner').value.trim();
      const repo = document.getElementById('cfgRepo').value.trim();
      const branch = document.getElementById('cfgBranch').value.trim() || 'main';
      const token = document.getElementById('cfgToken').value.trim();

      if (!owner || !repo || !token) {
        showAdminToast("Please provide GitHub owner, repository, and token.", "error");
        return;
      }

      localStorage.setItem('sciTeachGithubOwner', owner);
      localStorage.setItem('sciTeachGithubRepo', repo);
      localStorage.setItem('sciTeachGithubBranch', branch);
      localStorage.setItem('sciTeachGithubPat', token);

      updateGitHubStatusDisplay();
      closeSettingsModal();
      showAdminToast("GitHub API configuration saved successfully!", "success");
    });
  }

  // Handle Publishing Form Submit
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Verify Passcode / PIN
      const enteredPin = document.getElementById('adminPasscode').value.trim();
      const configuredPin = localStorage.getItem('sciTeachOfficerPin') || DEFAULT_OFFICER_PIN;

      if (enteredPin !== configuredPin) {
        showAdminToast("Authorization Error: Incorrect Officer Passcode.", "error");
        document.getElementById('adminPasscode').focus();
        return;
      }

      // 2. Check GitHub Credentials
      const owner = localStorage.getItem('sciTeachGithubOwner');
      const repo = localStorage.getItem('sciTeachGithubRepo');
      const branch = localStorage.getItem('sciTeachGithubBranch') || 'main';
      const token = localStorage.getItem('sciTeachGithubPat');

      if (!owner || !repo || !token) {
        showAdminToast("GitHub credentials not configured. Opening Settings...", "info");
        openSettingsModal();
        return;
      }

      // 3. Extract Form Payload
      const gradeLevel = gradeLevelSelect.value;
      const targetSubjectId = subjectSelect.value;
      const targetSectionId = sectionSelect.value;
      const category = document.getElementById('adminCategory').value;
      const title = document.getElementById('adminTitle').value.trim();
      const contributor = document.getElementById('adminContributor').value.trim();
      const accessUrl = document.getElementById('adminUrl').value.trim();
      const description = document.getElementById('adminDescription').value.trim();

      // UI Loading state
      const btnPublish = document.getElementById('btnPublish');
      const btnText = document.getElementById('btnPublishText');
      const originalText = btnText.textContent;

      btnPublish.disabled = true;
      btnPublish.style.opacity = '0.75';
      btnText.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 0.5rem;">
          <svg style="animation: spin 1s linear infinite;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="12"></circle></svg>
          Committing to GitHub...
        </span>
      `;

      try {
        await executeGitHubPublish({
          owner,
          repo,
          branch,
          token,
          gradeLevel,
          targetSubjectId,
          targetSectionId,
          category,
          title,
          contributor,
          accessUrl,
          description
        });

        // Reset form on success
        form.reset();
        document.getElementById('adminPasscode').value = '';
        updateSubjectOptions();

      } catch (err) {
        console.error("Publishing failure:", err);
        showAdminToast(`Commit Error: ${err.message}`, "error");
      } finally {
        btnPublish.disabled = false;
        btnPublish.style.opacity = '1';
        btnText.textContent = originalText;
      }
    });
  }
}

/**
 * Executes GitHub Contents API GET -> Mutate -> PUT Workflow
 */
async function executeGitHubPublish(params) {
  const {
    owner,
    repo,
    branch,
    token,
    gradeLevel,
    targetSubjectId,
    targetSectionId,
    category,
    title,
    contributor,
    accessUrl,
    description
  } = params;

  const filePath = 'assets/js/data.js';
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;

  // STEP 1: Fetch current file contents and SHA
  const getResponse = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!getResponse.ok) {
    if (getResponse.status === 401) {
      throw new Error("Invalid or expired GitHub Personal Access Token.");
    }
    if (getResponse.status === 404) {
      throw new Error(`Repository "${owner}/${repo}" or path "${filePath}" not found on branch "${branch}".`);
    }
    const errData = await getResponse.json().catch(() => ({}));
    throw new Error(errData.message || `Failed to fetch data.js (HTTP ${getResponse.status})`);
  }

  const fileData = await getResponse.json();
  const currentSha = fileData.sha;
  const rawBase64 = fileData.content;

  // STEP 2: Decode Base64 to Unicode string
  const rawCode = decodeBase64Unicode(rawBase64);

  // STEP 3: Parse existing JavaScript data object
  const prefix = "window.SCITEACH_DATA = ";
  const startIndex = rawCode.indexOf(prefix);
  if (startIndex === -1) {
    throw new Error("Could not find 'window.SCITEACH_DATA =' inside assets/js/data.js");
  }

  const jsonString = rawCode.substring(startIndex + prefix.length).trim().replace(/;$/, '');
  let dataObj;
  try {
    dataObj = JSON.parse(jsonString);
  } catch (parseErr) {
    throw new Error("Syntax error parsing existing data.js JSON content.");
  }

  // STEP 4: Construct new resource object
  const newId = `res-${Date.now().toString(36)}`;
  const formatMap = {
    "Readable/Text": "PDF / Handout",
    "Watchable/Video": "Facebook Reel Video",
    "Personal Notes/Docs": "Personal Study Deck",
    "Practice Exercises": "Formative Practice Drill"
  };

  const newResource = {
    id: newId,
    title: title,
    type: category,
    format: formatMap[category] || "Verified Resource",
    fileSize: "Cloud Hosted",
    description: description,
    url: accessUrl,
    contributor: contributor,
    tags: [getSubjectLabel(targetSubjectId), category, "Officer Published"]
  };

  // STEP 5: Append to correct Grade array
  let subjectFound = false;

  if (gradeLevel === "11") {
    const subjects = dataObj.grade11?.subjects || [];
    const subject = subjects.find(s => s.id === targetSubjectId);
    if (!subject) {
      throw new Error(`Grade 11 subject "${targetSubjectId}" not found in data.js`);
    }

    // Locate target module or append to first module
    let targetModule = (subject.modules || []).find(m => m.moduleId === targetSectionId);
    if (!targetModule && subject.modules && subject.modules.length > 0) {
      targetModule = subject.modules[0];
    }

    if (!targetModule) {
      throw new Error(`No modules available under subject "${targetSubjectId}"`);
    }

    if (!targetModule.resources) targetModule.resources = [];
    targetModule.resources.unshift(newResource); // Add to top of list
    subjectFound = true;

  } else if (gradeLevel === "12") {
    const subjects = dataObj.grade12?.subjects || [];
    const subject = subjects.find(s => s.id === targetSubjectId);
    if (!subject) {
      throw new Error(`Grade 12 subject "${targetSubjectId}" not found in data.js`);
    }

    // Locate target semester (sem-1 or sem-2)
    const semIndex = targetSectionId === "sem-2" ? 1 : 0;
    const targetSem = (subject.semesters && subject.semesters[semIndex]) ? subject.semesters[semIndex] : (subject.semesters ? subject.semesters[0] : null);

    if (!targetSem) {
      throw new Error(`No semesters available under subject "${targetSubjectId}"`);
    }

    if (!targetSem.resources) targetSem.resources = [];
    targetSem.resources.unshift(newResource); // Add to top of list
    subjectFound = true;
  }

  if (!subjectFound) {
    throw new Error("Could not find matching curriculum category in data.js");
  }

  // Update telemetry stats
  if (dataObj.stats && typeof dataObj.stats.totalReviewers === 'number') {
    dataObj.stats.totalReviewers++;
  }
  if (dataObj.metadata) {
    dataObj.metadata.lastUpdated = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  // STEP 6: Reconstruct data.js formatted text
  const updatedFileContent = `/**
 * Sci-Teach Library - Centralized Digital Resource Hub
 * University of Science and Technology of Southern Philippines (USTP)
 * Senior High School STEM Program ("Spartans")
 * 
 * Centralized Data Store (ES6 / Vanilla JS)
 */

window.SCITEACH_DATA = ${JSON.stringify(dataObj, null, 2)};
`;

  // STEP 7: Re-encode to Base64 (Unicode safe)
  const updatedBase64 = encodeBase64Unicode(updatedFileContent);

  // STEP 8: Dispatch PUT request to GitHub Contents API
  const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
  const commitMessage = `feat(library): append "${title}" to Grade ${gradeLevel} via Officer Portal`;

  const putResponse = await fetch(putUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: commitMessage,
      content: updatedBase64,
      sha: currentSha,
      branch: branch
    })
  });

  if (!putResponse.ok) {
    if (putResponse.status === 409) {
      throw new Error("Merge Conflict (409): The repository was updated concurrently. Please refresh and retry.");
    }
    const errData = await putResponse.json().catch(() => ({}));
    throw new Error(errData.message || `Failed to commit to GitHub (HTTP ${putResponse.status})`);
  }

  const commitResult = await putResponse.json();

  // Log publication to localStorage
  logOfficerPublication({
    title,
    gradeLevel,
    subject: getSubjectLabel(targetSubjectId),
    category,
    contributor,
    commitSha: commitResult.commit?.sha?.substring(0, 7) || 'HEAD',
    commitUrl: commitResult.commit?.html_url || `https://github.com/${owner}/${repo}/commits/${branch}`,
    date: new Date().toLocaleString()
  });

  // Re-render publications list
  renderOfficerPublishes();

  // Show success modal
  showCommitSuccessModal({
    title,
    gradeLevel,
    subject: getSubjectLabel(targetSubjectId),
    contributor,
    commitSha: commitResult.commit?.sha?.substring(0, 7) || 'HEAD',
    commitUrl: commitResult.commit?.html_url || `https://github.com/${owner}/${repo}/commits/${branch}`
  });

  showAdminToast("Resource committed directly to GitHub repository!", "success");
}

/* ===================================================================
   HELPERS & ENCODERS
   =================================================================== */

// Safe Unicode Base64 Decoder
function decodeBase64Unicode(b64) {
  const cleanB64 = b64.replace(/\s/g, '');
  const binaryString = atob(cleanB64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new TextDecoder('utf-8').decode(bytes);
}

// Safe Unicode Base64 Encoder
function encodeBase64Unicode(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function getSubjectLabel(id) {
  const map = {
    "physical-science": "Physical Science",
    "earth-life": "Earth & Life Science",
    "general-physics": "General Physics",
    "general-chemistry": "General Chemistry",
    "general-biology": "General Biology"
  };
  return map[id] || id;
}

function updateGitHubStatusDisplay() {
  const owner = localStorage.getItem('sciTeachGithubOwner');
  const repo = localStorage.getItem('sciTeachGithubRepo');
  const branch = localStorage.getItem('sciTeachGithubBranch') || 'main';
  const token = localStorage.getItem('sciTeachGithubPat');

  const lblRepoDisplay = document.getElementById('lblRepoDisplay');
  const lblBranchDisplay = document.getElementById('lblBranchDisplay');
  const lblPatStatus = document.getElementById('lblPatStatus');
  const statusBadge = document.getElementById('githubStatusBadge');

  if (lblRepoDisplay) {
    lblRepoDisplay.textContent = (owner && repo) ? `${owner}/${repo}` : 'Not configured';
  }
  if (lblBranchDisplay) {
    lblBranchDisplay.textContent = branch;
  }
  if (lblPatStatus) {
    if (token) {
      lblPatStatus.textContent = 'Token Active (••••' + token.slice(-4) + ')';
      lblPatStatus.style.color = '#34d399';
    } else {
      lblPatStatus.textContent = 'Missing Token';
      lblPatStatus.style.color = 'var(--theme-gold-light)';
    }
  }

  if (statusBadge) {
    if (owner && repo && token) {
      statusBadge.textContent = 'GitHub API Connected';
      statusBadge.style.background = 'rgba(5, 150, 105, 0.2)';
      statusBadge.style.borderColor = 'rgba(5, 150, 105, 0.4)';
      statusBadge.style.color = '#34d399';
    } else {
      statusBadge.textContent = 'Setup Required';
      statusBadge.style.background = 'rgba(217, 119, 6, 0.2)';
      statusBadge.style.borderColor = 'rgba(217, 119, 6, 0.4)';
      statusBadge.style.color = 'var(--theme-gold-light)';
    }
  }

  // Pre-fill inputs in settings form if available
  const cfgOwner = document.getElementById('cfgOwner');
  const cfgRepo = document.getElementById('cfgRepo');
  const cfgBranch = document.getElementById('cfgBranch');
  const cfgToken = document.getElementById('cfgToken');

  if (cfgOwner && owner) cfgOwner.value = owner;
  if (cfgRepo && repo) cfgRepo.value = repo;
  if (cfgBranch && branch) cfgBranch.value = branch;
  if (cfgToken && token) cfgToken.value = token;
}

function logOfficerPublication(logItem) {
  const logs = JSON.parse(localStorage.getItem('sciTeachOfficerLogs') || '[]');
  logs.unshift(logItem);
  localStorage.setItem('sciTeachOfficerLogs', JSON.stringify(logs.slice(0, 20))); // Keep last 20
}

function renderOfficerPublishes() {
  const container = document.getElementById('officerPublishesList');
  if (!container) return;

  const logs = JSON.parse(localStorage.getItem('sciTeachOfficerLogs') || '[]');

  if (logs.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-subtle); font-size: 0.85rem;">
        No materials published from this device yet. Verified items published above will show here.
      </div>
    `;
    return;
  }

  container.innerHTML = logs.map(item => `
    <div class="sub-item-pill">
      <div>
        <div style="font-weight: 700; color: #fff; font-size: 0.88rem;">${item.title}</div>
        <div style="font-size: 0.75rem; color: var(--theme-gold-light); margin-top: 0.2rem;">
          Grade ${item.gradeLevel} • ${item.subject} • By ${item.contributor}
        </div>
        <div style="font-size: 0.7rem; color: var(--text-subtle); font-family: var(--font-mono); margin-top: 0.2rem;">
          Commit: <a href="${item.commitUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--theme-g11-light); text-decoration: underline;">${item.commitSha}</a> • ${item.date}
        </div>
      </div>
      <div>
        <a href="${item.commitUrl}" target="_blank" rel="noopener noreferrer" class="btn-table-action" style="padding: 0.35rem 0.85rem; font-size: 0.72rem;">
          Commit ↗
        </a>
      </div>
    </div>
  `).join('');
}

function showCommitSuccessModal(item) {
  const modal = document.getElementById('commitSuccessModal');
  const content = document.getElementById('commitModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(5, 150, 105, 0.2); border: 2px solid #34d399; display: inline-flex; align-items: center; justify-content: center; color: #34d399; font-size: 2rem; margin-bottom: 1rem;">
        ✓
      </div>
      <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; margin-bottom: 0.5rem; text-transform: uppercase;">
        COMMITTED TO GITHUB!
      </h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">
        The study material has been appended to <code style="color: var(--theme-gold-light); font-family: var(--font-mono);">assets/js/data.js</code> and pushed to the repository branch.
      </p>
    </div>

    <div style="background: rgba(7, 10, 18, 0.75); border: 1px solid var(--glass-border); border-radius: var(--radius-sm); padding: 1.25rem; font-size: 0.82rem; margin-bottom: 1.5rem;">
      <div style="margin-bottom: 0.5rem;"><strong>Resource:</strong> ${item.title}</div>
      <div style="margin-bottom: 0.5rem;"><strong>Curriculum:</strong> Grade ${item.gradeLevel} (${item.subject})</div>
      <div style="margin-bottom: 0.5rem;"><strong>Verified Contributor:</strong> ${item.contributor}</div>
      <div><strong>GitHub Commit SHA:</strong> <a href="${item.commitUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--theme-g11-light); font-family: var(--font-mono); font-weight: 700;">${item.commitSha} ↗</a></div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: center;">
      <button onclick="closeCommitModal()" class="btn-hero-primary" style="padding: 0.65rem 1.75rem; font-size: 0.82rem;">
        Done & Return to Dashboard
      </button>
    </div>
  `;

  modal.classList.add('open');
}

window.openSettingsModal = function() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.add('open');
};

window.closeSettingsModal = function() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.remove('open');
};

window.closeCommitModal = function() {
  const modal = document.getElementById('commitSuccessModal');
  if (modal) modal.classList.remove('open');
};

function showAdminToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  const color = type === 'error' ? '#ef4444' : (type === 'success' ? '#34d399' : 'var(--color-primary-light)');

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
