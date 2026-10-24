/**
 * Sci-Teach Library - Centralized Digital Resource Hub
 * University of Science and Technology of Southern Philippines (USTP)
 * Senior High School STEM Program ("Spartans")
 * 
 * Centralized Data Store (ES6 / Vanilla JS)
 */

window.SCITEACH_DATA = {
  metadata: {
    hubName: "Sci-Teach Library",
    institution: "University of Science and Technology of Southern Philippines",
    targetAudience: "Senior High School STEM Spartans",
    currentVersion: "2.4.0",
    lastUpdated: "March 14, 2026",
    academicYear: "2025–2026"
  },

  whatsNew: [
    {
      id: "ann-01",
      date: "3/14/2026",
      title: "Launching of the Sci-Teach Library",
      badge: "Major Launch",
      category: "Platform",
      description: "The official centralized digital resource hub for USTP SHS STEM Spartans is now live! Access peer-reviewed lecture notes, exam reviewers, study sheets, and series episodes in one zero-config location."
    },
    {
      id: "ann-02",
      date: "3/14/2026",
      title: "Added new Season 4 Episodes",
      badge: "Sci-Teach Series",
      category: "Video",
      description: "Season 4 of the Sci-Teach video tutorial reels is now integrated into the portal, covering Rocks, Auras of Electricity, Nuclear Fusion Reactions, Phase Changes of Matter, and Pedigree Analysis."
    },
    {
      id: "ann-03",
      date: "3/14/2026",
      title: "Added exam-related review materials",
      badge: "Exam Prep",
      category: "Reviewers",
      description: "Comprehensive 2nd Semester Midterms Reviewers for General Physics, General Chemistry, and General Biology are now downloadable with step-by-step problem-solving breakdowns."
    }
  ],

  stats: {
    totalModules: 34,
    totalEpisodes: 18,
    totalReviewers: 52,
    activeContributors: 14,
    passRateTarget: "99.8%"
  },

  grade11: {
    subjects: [
      {
        id: "physical-science",
        name: "Physical Science",
        shortName: "Phys Sci",
        themeColor: "#0284c7",
        icon: "atom",
        bannerNote: "Blue Notebook Theme",
        description: "Study of matter, atomic structure, stellar nucleosynthesis, chemical bonding, and intermolecular forces.",
        modules: [
          {
            moduleId: "ps-mod-1",
            moduleNumber: 1,
            title: "Origin & Formation of Elements",
            topics: [
              "Origin of Light Elements (Big Bang Nucleosynthesis)",
              "The Light Elements (H, He, Li, Be)",
              "Formation of Heavy Elements (Stellar Nucleosynthesis & Supernovae)",
              "Neutron Capture Processes (s-process & r-process)"
            ],
            contributors: "Ma'am Glea Maes Sales / Sci-Tech Society Officers",
            resources: [
              {
                id: "ps-m1-r1",
                title: "Big Bang Nucleosynthesis & Cosmic Abundances",
                type: "Readable/Text",
                format: "PDF Summary",
                fileSize: "2.4 MB",
                description: "Comprehensive lecture notes on cosmic inflation, light element formation, and deuterium-hydrogen ratios.",
                url: "#ps-m1-r1",
                contributor: "Ma'am Glea Maes Sales",
                tags: ["Origin of Elements", "Big Bang", "Nuclear Reactions"]
              },
              {
                id: "ps-m1-r2",
                title: "Stellar Nucleosynthesis & Neutron Capture (s & r process)",
                type: "Readable/Text",
                format: "Handout & Slides",
                fileSize: "3.8 MB",
                description: "In-depth guide detailing carbon burning, iron catastrophe, and rapid vs slow neutron captures.",
                url: "#ps-m1-r2",
                contributor: "Sci-Tech Society Officers",
                tags: ["Stellar Evolution", "Neutron Capture", "Heavy Elements"]
              },
              {
                id: "ps-m1-r3",
                title: "Sci-Teach Series S4 EP3: Nuclear Fusion Reactions",
                type: "Watchable/Video",
                format: "Facebook Reel",
                fileSize: "HD Video",
                description: "Animated breakdown of p-p chain and CNO cycle in high mass stars.",
                url: "https://www.facebook.com/share/v/1AphijhMzw/",
                contributor: "Sci-Teach Media Team",
                tags: ["Video Reel", "Nuclear Fusion", "Season 4"]
              },
              {
                id: "ps-m1-r4",
                title: "Spartan Summary Cheat Sheet: Nuclear Reactions",
                type: "Personal Notes/Docs",
                format: "Annotated Note",
                fileSize: "1.2 MB",
                description: "Student high-yield revision sheet on balancing nuclear equations and isotope notation.",
                url: "#ps-m1-r4",
                contributor: "Sci-Tech Academic Committee",
                tags: ["Cheat Sheet", "Student Notes", "High Yield"]
              },
              {
                id: "ps-m1-r5",
                title: "Formative Quiz & Practice Problem Set: Light vs Heavy Elements",
                type: "Practice Exercises",
                format: "Drill Sheet w/ Answer Key",
                fileSize: "1.6 MB",
                description: "30 items of multiple-choice and equation-balancing questions.",
                url: "#ps-m1-r5",
                contributor: "Ma'am Glea Maes Sales / Officers",
                tags: ["Practice Quiz", "Drills", "Self-Assessment"]
              }
            ]
          },
          {
            moduleId: "ps-mod-2",
            moduleNumber: 2,
            title: "Atomic Structure & Synthesis of New Elements",
            topics: [
              "Atomic Symbol, Atomic Number (Z), and Mass Number (A)",
              "Prediction & Discovery of New Elements",
              "Particle Accelerators & Transuranium Elements",
              "Periodic Trends and Modern Synthetic Nuclides"
            ],
            contributors: "Ma'am Glea Maes Sales / Sci-Tech Society Officers",
            resources: [
              {
                id: "ps-m2-r1",
                title: "Subatomic Particles, Isotopes & Nuclide Symbols",
                type: "Readable/Text",
                format: "Module Reading Deck",
                fileSize: "2.1 MB",
                description: "Deep dive into protons, neutrons, electrons, and calculating average atomic mass.",
                url: "#ps-m2-r1",
                contributor: "Ma'am Glea Maes Sales",
                tags: ["Atomic Number", "Mass Number", "Isotopes"]
              },
              {
                id: "ps-m2-r2",
                title: "Transuranium Elements & Particle Accelerator Techniques",
                type: "Readable/Text",
                format: "Illustrated Handout",
                fileSize: "3.2 MB",
                description: "How synthetic elements up to Oganesson (118) were created using cyclotrons and linacs.",
                url: "#ps-m2-r2",
                contributor: "Sci-Tech Society Officers",
                tags: ["Synthetic Elements", "Particle Accelerators"]
              },
              {
                id: "ps-m2-r3",
                title: "Sci-Teach Series S2 EP1: Types of Decay",
                type: "Watchable/Video",
                format: "Facebook Reel",
                fileSize: "HD Video",
                description: "Visual exploration of Alpha, Beta minus, Beta plus, and Gamma emission pathways.",
                url: "https://www.facebook.com/reel/1415990995701784",
                contributor: "Sci-Teach Media Team",
                tags: ["Radioactive Decay", "Alpha Beta Gamma", "Season 2"]
              },
              {
                id: "ps-m2-r4",
                title: "Condensed Officer Notes: Predicting Transuranium Synthesis",
                type: "Personal Notes/Docs",
                format: "Study Notebook Scan",
                fileSize: "1.9 MB",
                description: "Color-coded student notes summarizing particle bombardment targets and projectile particles.",
                url: "#ps-m2-r4",
                contributor: "Sci-Tech Society Officers",
                tags: ["Student Notes", "Officer Notebook"]
              },
              {
                id: "ps-m2-r5",
                title: "Speed Drill: Calculating Protons, Neutrons, Electrons & Nuclear Symbols",
                type: "Practice Exercises",
                format: "Timed Worksheet",
                fileSize: "1.1 MB",
                description: "40-item rapid fire drill for mastery of atomic notation and ion charges.",
                url: "#ps-m2-r5",
                contributor: "Ma'am Glea Maes Sales",
                tags: ["Mastery Drill", "Speed Challenge"]
              }
            ]
          },
          {
            moduleId: "ps-mod-3",
            moduleNumber: 3,
            title: "Chemical Bonding, IMFA & Physical Properties",
            topics: [
              "Chemical Bonding (Ionic, Covalent, Metallic)",
              "Intermolecular Forces of Attraction (IMFA)",
              "Types of IMFA: London Dispersion, Dipole-Dipole, Hydrogen Bonding, Ion-Dipole",
              "Strength of IMFA & Physical Properties (Boiling Point, Surface Tension, Viscosity, Vapor Pressure)"
            ],
            contributors: "Ma'am Glea Maes Sales / Sci-Tech Society Officers",
            resources: [
              {
                id: "ps-m3-r1",
                title: "Intermolecular Forces (IMFA) & Molecular Polarity Handbook",
                type: "Readable/Text",
                format: "PDF Master Guide",
                fileSize: "4.5 MB",
                description: "Determining polarity from Lewis structures and VSEPR geometry, and ranking relative IMFA strengths.",
                url: "#ps-m3-r1",
                contributor: "Ma'am Glea Maes Sales",
                tags: ["IMFA", "Polarity", "Lewis Structure"]
              },
              {
                id: "ps-m3-r2",
                title: "Sci-Teach Series S3 EP2: Science of Liquids and Solids",
                type: "Watchable/Video",
                format: "Facebook Reel",
                fileSize: "HD Video",
                description: "Real-world demonstrations showing how IMFA controls boiling point, capillary action, and evaporation.",
                url: "https://www.facebook.com/reel/1025185459476114",
                contributor: "Sci-Teach Media Team",
                tags: ["Liquids and Solids", "IMFA", "Season 3"]
              },
              {
                id: "ps-m3-r3",
                title: "Spartan Flowchart: Identifying Dominant IMFA in Any Molecule",
                type: "Personal Notes/Docs",
                format: "Digital Diagram / Mindmap",
                fileSize: "1.4 MB",
                description: "A 4-step decision tree flowchart guaranteed to get 100% on IMFA identification test questions.",
                url: "#ps-m3-r3",
                contributor: "Sci-Tech Society Officers",
                tags: ["Decision Tree", "Flowchart", "Exam Hack"]
              },
              {
                id: "ps-m3-r4",
                title: "Ranking Properties Practice Set: Boiling Point, Viscosity & Vapor Pressure",
                type: "Practice Exercises",
                format: "Analytical Problem Set",
                fileSize: "1.8 MB",
                description: "Problem-solving questions requiring justification of macroscopic properties based on microscopic forces.",
                url: "#ps-m3-r4",
                contributor: "Ma'am Glea Maes Sales / Officers",
                tags: ["Problem Set", "Ranking Drill", "Answer Key Included"]
              }
            ]
          }
        ]
      },
      {
        id: "earth-life",
        name: "Earth & Life Science",
        shortName: "ELS",
        themeColor: "#0284c7",
        icon: "globe",
        bannerNote: "Blue Notebook Theme",
        description: "Exploration of planetary systems, geological evolution, bioenergetics, genetics, and organismal biology.",
        modules: [
          {
            moduleId: "els-mod-1",
            moduleNumber: 1,
            title: "Earth Subsystems & Planetary Geology",
            topics: [
              "Characteristics of Earth that Support Life",
              "The Four Earth Subsystems (Atmosphere, Hydrosphere, Geosphere, Biosphere)",
              "Rock-Forming Minerals & The Rock Cycle",
              "Endogenic and Exogenic Processes"
            ],
            contributors: "USTP STEM Faculty / Sci-Tech Society Officers",
            resources: [
              {
                id: "els-m1-r1",
                title: "Sci-Teach Series S1 EP1: Origins of the Universe & Rock Cycle",
                type: "Watchable/Video",
                format: "Facebook Reel",
                fileSize: "HD Video",
                description: "Deep dive into igneous, sedimentary, and metamorphic transformations and plate boundaries.",
                url: "https://www.facebook.com/reel/359191646717894",
                contributor: "Sci-Teach Media Team",
                tags: ["Rock Cycle", "Origins", "Season 1"]
              },
              {
                id: "els-m1-r2",
                title: "Sci-Teach Series S4 EP1: Rocks & Petrology",
                type: "Watchable/Video",
                format: "Facebook Reel",
                fileSize: "HD Video",
                description: "Mineral crystallization, Bowen's reaction series, and identifying rock textures in the field.",
                url: "https://www.facebook.com/reel/1743899456269028",
                contributor: "Sci-Teach Media Team",
                tags: ["Petrology", "Rocks", "Season 4"]
              },
              {
                id: "els-m1-r3",
                title: "Earth Subsystems Interconnections & Biogeochemical Cycles",
                type: "Readable/Text",
                format: "Comprehensive Handout",
                fileSize: "3.6 MB",
                description: "Detailed analysis of carbon, nitrogen, and hydrologic transfers between Earth spheres.",
                url: "#els-m1-r3",
                contributor: "USTP STEM Faculty",
                tags: ["Subsystems", "Geosphere", "Hydrosphere"]
              },
              {
                id: "els-m1-r4",
                title: "Minerals Identification Key & Mohs Hardness Scale Guide",
                type: "Personal Notes/Docs",
                format: "Visual Study Card",
                fileSize: "1.5 MB",
                description: "Luster, streak, cleavage, fracture, and specific gravity diagnostic table for lab exams.",
                url: "#els-m1-r4",
                contributor: "Sci-Tech Society Officers",
                tags: ["Mineral ID", "Lab Prep", "Mohs Scale"]
              },
              {
                id: "els-m1-r5",
                title: "Geological Processes & Earth History Reviewer & Quiz",
                type: "Practice Exercises",
                format: "Review Questionnaire",
                fileSize: "2.0 MB",
                description: "Includes stratigraphic dating principles (superposition, cross-cutting) and plate tectonic scenarios.",
                url: "#els-m1-r5",
                contributor: "Sci-Tech Society Officers",
                tags: ["Stratigraphy", "Plate Tectonics", "Practice Exam"]
              }
            ]
          },
          {
            moduleId: "els-mod-2",
            moduleNumber: 2,
            title: "Bioenergetics & Organismal Biology",
            topics: [
              "Photosynthesis: Light-Dependent and Calvin Cycle Reactions",
              "Cellular Respiration: Glycolysis, Krebs Cycle, and Oxidative Phosphorylation",
              "Plant and Animal Organ Systems & Homeostasis",
              "Principles of Heredity & Evolution"
            ],
            contributors: "USTP STEM Faculty / Sci-Tech Society Officers",
            resources: [
              {
                id: "els-m2-r1",
                title: "Sci-Teach Series S1 EP2: Photosynthesis & Cellular Respiration",
                type: "Watchable/Video",
                format: "Facebook Reel",
                fileSize: "HD Video",
                description: "Master ATP generation, electron transport chains, and stomatal gas exchange in minutes.",
                url: "https://www.facebook.com/reel/6550566958405469",
                contributor: "Sci-Teach Media Team",
                tags: ["Bioenergetics", "Cellular Respiration", "Season 1"]
              },
              {
                id: "els-m2-r2",
                title: "Bioenergetics ATP Balance Sheet & Metabolic Pathway Handout",
                type: "Readable/Text",
                format: "Illustrated Guide",
                fileSize: "2.8 MB",
                description: "Step-by-step stoichiometric breakdown of 36–38 ATP production per glucose molecule.",
                url: "#els-m2-r2",
                contributor: "USTP STEM Faculty",
                tags: ["ATP Yield", "Metabolism", "Glycolysis"]
              },
              {
                id: "els-m2-r3",
                title: "Comparative Anatomy: Plant vs Animal Organ Systems Notes",
                type: "Personal Notes/Docs",
                format: "High-Yield Summary",
                fileSize: "2.2 MB",
                description: "Summary tables comparing vascular transport in angiosperms to human circulatory system.",
                url: "#els-m2-r3",
                contributor: "Sci-Tech Society Officers",
                tags: ["Organ Systems", "Circulation", "Homeostasis"]
              },
              {
                id: "els-m2-r4",
                title: "Bioenergetics & Organ Systems Spartan Drill Bank",
                type: "Practice Exercises",
                format: "Diagnostic Test",
                fileSize: "1.7 MB",
                description: "35 conceptual questions testing regulation, feedback loops, and metabolic pathway inhibitors.",
                url: "#els-m2-r4",
                contributor: "Sci-Tech Society Officers",
                tags: ["Feedback Loops", "Diagnostic Test", "Answer Key"]
              }
            ]
          }
        ]
      }
    ]
  },

  grade12: {
    subjects: [
      {
        id: "general-physics",
        name: "General Physics",
        shortName: "Gen Phys",
        themeColor: "#059669",
        icon: "compass",
        bannerNote: "Green Notebook Theme",
        description: "Classical mechanics, kinematics, vectors, electrostatics, Gauss's law, and electric potential.",
        semesters: [
          {
            semester: "1st Semester",
            topics: "Units & Physical Quantities, Uncertainty & Error Analysis, Absolute & Relative Uncertainties, Vectors, Kinematics, Free-Falling Bodies, Projectile Motion",
            leadContributor: "Ma'am Naurah Malawi / Sci-Tech Society Officers",
            resources: [
              {
                id: "gp-s1-r1",
                title: "Measurement, Precision & Error Analysis Handbook",
                category: "Readable/Text",
                format: "PDF Document",
                description: "Propagation of uncertainties, significant figures, and standard deviation calculations for laboratory measurements.",
                contributor: "Ma'am Naurah Malawi",
                url: "#gp-s1-r1",
                tags: ["Uncertainty", "Error Analysis", "Measurements"]
              },
              {
                id: "gp-s1-r2",
                title: "Vector Resolution & Component Method Tutorial",
                category: "Readable/Text",
                format: "Step-by-step Notes",
                description: "Graphical and analytical methods (unit vectors, dot and cross products) for 2D and 3D vectors.",
                contributor: "Sci-Tech Society Officers",
                url: "#gp-s1-r2",
                tags: ["Vectors", "Trigonometry", "Statics"]
              },
              {
                id: "gp-s1-r3",
                title: "Sci-Teach Series S1 EP4: Newton's Law to Projectile Motion",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Visual dynamics of projectile trajectories, range equations, and free-fall accelerations under gravity.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/reel/2105510459835704",
                tags: ["Projectile Motion", "Kinematics", "Season 1"]
              },
              {
                id: "gp-s1-r4",
                title: "Kinematics 1D & 2D Master Formula Sheet",
                category: "Personal Notes/Docs",
                format: "Formula & Derivations",
                description: "Student cheat sheet featuring UAM formulas, projectile equations, and velocity-time graph analysis.",
                contributor: "Sci-Tech Academic Committee",
                url: "#gp-s1-r4",
                tags: ["Formulas", "Kinematics", "Free Fall"]
              },
              {
                id: "gp-s1-r5",
                title: "Projectile Motion & Kinematics Problem Bank (w/ Full Solutions)",
                category: "Practice Exercises",
                format: "Problem Set",
                description: "25 challenging multi-step projectile problems with complete algebraic and numerical solutions.",
                contributor: "Ma'am Naurah Malawi / Officers",
                url: "#gp-s1-r5",
                tags: ["Problem Bank", "Full Solutions", "Kinematics"]
              }
            ]
          },
          {
            semester: "2nd Semester",
            topics: "Electric Charge & Field, Electric Flux & Gauss’s Law, Electric Potential & Difference",
            leadContributor: "Ma'am Naurah Malawi / Sci-Tech Society Officers",
            resources: [
              {
                id: "gp-s2-r1",
                title: "Electrostatics: Coulomb's Law, Electric Fields & Superposition",
                category: "Readable/Text",
                format: "Lecture Notes",
                description: "Vector calculations of electrostatic force between multiple point charges and electric field lines.",
                contributor: "Ma'am Naurah Malawi",
                url: "#gp-s2-r1",
                tags: ["Coulombs Law", "Electric Field", "Superposition"]
              },
              {
                id: "gp-s2-r2",
                title: "Sci-Teach Series S2 EP3: Electric Charge to Coulomb's Law",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Fast intuitive explanation of charge quantization, induction, and inverse-square force law.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/reel/1085553175867168",
                tags: ["Coulombs Law", "Electric Charge", "Season 2"]
              },
              {
                id: "gp-s2-r3",
                title: "Sci-Teach Series S2 EP4: Electric Flux",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Visualizing electric flux through planar and curved Gaussian surfaces.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/reel/1134090821073282",
                tags: ["Electric Flux", "Gauss Law", "Season 2"]
              },
              {
                id: "gp-s2-r4",
                title: "Sci-Teach Series S3 EP4: Journey through Coulomb's Law",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Advanced problem solving on point charge equilibrium and field superposition.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/reel/1011805547713437",
                tags: ["Coulomb Problem Solving", "Season 3"]
              },
              {
                id: "gp-s2-r5",
                title: "Sci-Teach Series S4 EP2: Auras of Electricity",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Electric potential surfaces, voltage gradients, and capacitors in STEM contexts.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/share/v/1GKVEzquEN/",
                tags: ["Electric Potential", "Auras of Electricity", "Season 4"]
              },
              {
                id: "gp-s2-r6",
                title: "Gauss's Law Symmetry & Surface Enclosures Guide",
                category: "Personal Notes/Docs",
                format: "Illustrated Study Notes",
                description: "Symmetry arguments for spherical, cylindrical, and planar charge distributions.",
                contributor: "Sci-Tech Society Officers",
                tags: ["Gauss Law", "Symmetry", "Flux Integration"]
              },
              {
                id: "gp-s2-r7",
                title: "Electrostatics & Electric Potential Exam Practice Bank",
                category: "Practice Exercises",
                format: "Worksheet & Answer Key",
                description: "30 exam-style problems on calculating work done, electric potential energy, and flux.",
                contributor: "Ma'am Naurah Malawi / Officers",
                url: "#gp-s2-r7",
                tags: ["Practice Exam", "Potential Energy", "Answer Key"]
              }
            ]
          },
          {
            semester: "Midterms Reviewer",
            topics: "2nd Semester Midterms Reviewer: Comprehensive Physics Synthesis",
            leadContributor: "Sci-Tech Society Officers",
            resources: [
              {
                id: "gp-mid-r1",
                title: "2nd Semester General Physics Midterms Master Reviewer",
                category: "Practice Exercises",
                format: "Full Exam Reviewer (45 Pages)",
                description: "Official comprehensive reviewer compiled by Sci-Tech Society Officers covering all electrostatics, flux, Gauss's law, and potential difference with step-by-step sample solutions.",
                contributor: "Sci-Tech Society Officers",
                url: "#gp-mid-r1",
                tags: ["Midterms Reviewer", "Comprehensive", "Officer Verified"]
              },
              {
                id: "gp-mid-r2",
                title: "Midterms Rapid Formula Sheet & Constant Values",
                category: "Personal Notes/Docs",
                format: "Laminated Cheat Sheet PDF",
                description: "Permittivity of free space, Coulomb constant, unit conversions, and key electrostatics formulas.",
                contributor: "Sci-Tech Academic Committee",
                url: "#gp-mid-r2",
                tags: ["Formula Sheet", "Constants", "Midterms"]
              }
            ]
          }
        ]
      },
      {
        id: "general-chemistry",
        name: "General Chemistry",
        shortName: "Gen Chem",
        themeColor: "#059669",
        icon: "flask",
        bannerNote: "Green Notebook Theme",
        description: "Quantitative chemistry, stoichiometry, gas laws, thermodynamics, intermolecular forces, and phase transitions.",
        semesters: [
          {
            semester: "1st Semester",
            topics: "Empirical & Molecular Formula, Stoichiometry, Chemical Reactions & Balancing, Gas Laws, Limiting & Excess Reactants",
            leadContributor: "Ma'am Naurah Malawi / Sci-Tech Officers",
            resources: [
              {
                id: "gc-s1-r1",
                title: "Empirical, Molecular Formula & Percent Composition Guide",
                category: "Readable/Text",
                format: "PDF Document",
                description: "Methodical determination of simplest integer ratios and true molecular formulas from combustion analysis data.",
                contributor: "Ma'am Naurah Malawi",
                url: "#gc-s1-r1",
                tags: ["Empirical Formula", "Combustion Analysis", "Stoichiometry"]
              },
              {
                id: "gc-s1-r2",
                title: "Limiting & Excess Reactant Stoichiometry Masterclass",
                category: "Readable/Text",
                format: "Lecture Notes",
                description: "BCA tables (Before, Change, After), theoretical yield, percent yield, and excess quantity remaining.",
                contributor: "Sci-Tech Officers",
                url: "#gc-s1-r2",
                tags: ["Limiting Reactant", "Theoretical Yield", "BCA Tables"]
              },
              {
                id: "gc-s1-r3",
                title: "Sci-Teach Series S1 EP3: Gas Laws to Ideal Gas Laws",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Boyle's, Charles's, Gay-Lussac's, Avogadro's, Combined, and Ideal Gas Law (PV = nRT) derivations.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/reel/391915776696928",
                tags: ["Gas Laws", "PV=nRT", "Season 1"]
              },
              {
                id: "gc-s1-r4",
                title: "Sci-Teach Series S3 EP1: Stoichiometry in Action",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Step-by-step visual stoichiometric conversion map: Mass -> Moles -> Mole Ratio -> Product Mass.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/reel/3851024501878209",
                tags: ["Stoichiometry", "Mole Ratio", "Season 3"]
              },
              {
                id: "gc-s1-r5",
                title: "Gas Laws & Stoichiometry Practice Problem Set w/ Key",
                category: "Practice Exercises",
                format: "Problem Bank",
                description: "30 balanced reaction and gas stoichiometry questions under STP and non-standard conditions.",
                contributor: "Ma'am Naurah Malawi / Sci-Tech Officers",
                url: "#gc-s1-r5",
                tags: ["Gas Laws Drill", "Stoichiometry", "Answer Key"]
              }
            ]
          },
          {
            semester: "2nd Semester",
            topics: "Kinetic Molecular Theory, IMFA, Properties of Liquids, Solids, Phase Changes",
            leadContributor: "Ma'am Charisa Bee Aleonar / Sci-Tech Officers",
            resources: [
              {
                id: "gc-s2-r1",
                title: "Kinetic Molecular Theory & Phase Changes Handbook",
                category: "Readable/Text",
                format: "PDF Document",
                description: "Postulates of KMT, Maxwell-Boltzmann molecular speed distribution, and heating/cooling curves.",
                contributor: "Ma'am Charisa Bee Aleonar",
                url: "#gc-s2-r1",
                tags: ["KMT", "Phase Changes", "Thermodynamics"]
              },
              {
                id: "gc-s2-r2",
                title: "Sci-Teach Series S4 EP4: Phase Changes of Matter",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Sublimation, deposition, critical points, and triple points decoded visually.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/share/v/1E1NstB5Kb/",
                tags: ["Phase Changes", "Triple Point", "Season 4"]
              },
              {
                id: "gc-s2-r3",
                title: "Phase Diagram Interpretation & Clausius-Clapeyron Notes",
                category: "Personal Notes/Docs",
                format: "Annotated Student Notes",
                fileSize: "1.9 MB",
                description: "Water vs Carbon Dioxide phase diagram anomalies (negative vs positive solid-liquid slope).",
                contributor: "Sci-Tech Officers",
                url: "#gc-s2-r3",
                tags: ["Phase Diagrams", "Supercritical Fluids", "Student Notes"]
              },
              {
                id: "gc-s2-r4",
                title: "General Chemistry 2nd Semester Comprehensive Reviewer",
                category: "Practice Exercises",
                format: "Exam Reviewer & Drill",
                fileSize: "3.5 MB",
                description: "Comprehensive midterms & finals prep booklet covering IMFA, liquid properties, crystal structures, and thermochemistry.",
                contributor: "Ma'am Charisa Bee Aleonar / Sci-Tech Officers",
                url: "#gc-s2-r4",
                tags: ["Midterms Reviewer", "Exam Reviewer", "Chemistry"]
              }
            ]
          }
        ]
      },
      {
        id: "general-biology",
        name: "General Biology",
        shortName: "Gen Bio",
        themeColor: "#059669",
        icon: "dna",
        bannerNote: "Green Notebook Theme",
        description: "Cellular biology, classical and molecular genetics, pedigree analysis, organ physiology, and evolutionary mechanisms.",
        semesters: [
          {
            semester: "1st Semester",
            topics: "Spontaneous Generation Theory, Plant & Animal Organ Systems",
            leadContributor: "Ma'am Charisa Bee Aleonar / Sci-Tech Officers",
            resources: [
              {
                id: "gb-s1-r1",
                title: "Historical Origin of Life: Abiogenesis vs Biogenesis",
                category: "Readable/Text",
                format: "PDF Document",
                description: "Redi, Needham, Spallanzani, and Louis Pasteur's swan-neck flask experiments disproving spontaneous generation.",
                contributor: "Ma'am Charisa Bee Aleonar",
                url: "#gb-s1-r1",
                tags: ["Spontaneous Generation", "Pasteur", "Cell Theory"]
              },
              {
                id: "gb-s1-r2",
                title: "Plant & Animal Organ Systems: Comparative Anatomy",
                category: "Readable/Text",
                format: "Comprehensive Handout",
                description: "Endocrine, nervous, digestive, excretory, and musculoskeletal systems across kingdoms.",
                contributor: "Sci-Tech Officers",
                url: "#gb-s1-r2",
                tags: ["Organ Systems", "Physiology", "Comparative Anatomy"]
              },
              {
                id: "gb-s1-r3",
                title: "Human Organ Systems & Hormonal Feedback Loops Cheat Sheet",
                category: "Personal Notes/Docs",
                format: "Visual Flowchart",
                description: "Negative and positive feedback loops: thermoregulation, blood glucose, and osmoregulation.",
                contributor: "Sci-Tech Academic Committee",
                url: "#gb-s1-r3",
                tags: ["Homeostasis", "Hormones", "Feedback Loops"]
              },
              {
                id: "gb-s1-r4",
                title: "Organ Systems Diagnostic & Practical Reviewer",
                category: "Practice Exercises",
                format: "Review Questionnaire",
                description: "Diagram labeling, scenario analysis, and system pathology multiple-choice exam prep.",
                contributor: "Ma'am Charisa Bee Aleonar / Officers",
                url: "#gb-s1-r4",
                tags: ["Diagnostic Test", "Anatomy Drill"]
              }
            ]
          },
          {
            semester: "2nd Semester",
            topics: "Mendelian Inheritance, Gene Interaction, Pedigree Analysis",
            leadContributor: "Ma'am Charisa Bee Aleonar / Sci-Tech Officers",
            resources: [
              {
                id: "gb-s2-r1",
                title: "Sci-Teach Series S3 EP3: Mendelian Inheritance",
                category: "Watchable/Video",
                format: "Facebook Reel",
                description: "Monohybrid and dihybrid cross ratios, Law of Segregation, and Law of Independent Assortment.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/reel/635601682597805",
                tags: ["Mendel", "Punnett Square", "Season 3"]
              },
              {
                id: "gb-s2-r2",
                title: "Sci-Teach Series S4 EP5: Patterns of Inheritance and Pedigree Analysis",
                category: "Watchable/Video",
                format: "Facebook Reel & Module Deck",
                description: "Autosomal dominant, autosomal recessive, X-linked, and mitochondrial trait mapping in family trees.",
                contributor: "Sci-Teach Media Team",
                url: "https://www.facebook.com/watch/",
                tags: ["Pedigree Analysis", "Inheritance", "Season 4"]
              },
              {
                id: "gb-s2-r3",
                title: "Non-Mendelian Genetics Handbook: Incomplete, Codominance, Epistasis",
                category: "Readable/Text",
                format: "PDF Document",
                description: "Multiple alleles (ABO blood typing), polygenic traits, sex-linked and sex-influenced traits.",
                contributor: "Ma'am Charisa Bee Aleonar",
                url: "#gb-s2-r3",
                tags: ["Non-Mendelian", "Epistasis", "Codominance"]
              },
              {
                id: "gb-s2-r4",
                title: "Spartan Pedigree Analysis Solver & Decision Flowchart",
                category: "Personal Notes/Docs",
                format: "Officer Strategy Sheet",
                description: "How to instantly diagnose whether a pedigree is autosomal dominant, recessive, X-linked dominant, or X-linked recessive.",
                contributor: "Sci-Tech Society Officers",
                url: "#gb-s2-r4",
                tags: ["Pedigree Solver", "Flowchart", "High Yield"]
              },
              {
                id: "gb-s2-r5",
                title: "General Biology 2nd Semester Midterms Reviewer & Pedigree Problem Bank",
                category: "Practice Exercises",
                format: "Comprehensive Reviewer & Drills",
                description: "50-item problem set with 15 full pedigree charts to analyze and solve.",
                contributor: "Ma'am Charisa Bee Aleonar / Sci-Tech Officers",
                url: "#gb-s2-r5",
                tags: ["Midterms Reviewer", "Pedigree Problems", "Answer Key"]
              }
            ]
          }
        ]
      }
    ]
  },

  series: [
    {
      season: 1,
      title: "Season 1: Foundations of STEM",
      description: "Fundamental concepts in astrophysics, bioenergetics, thermodynamics, and Newtonian mechanics.",
      episodes: [
        {
          epNumber: 1,
          title: "Origins of the Universe & Rock Cycle",
          subject: "Earth & Life Science",
          url: "https://www.facebook.com/reel/359191646717894",
          description: "Explore the cosmic origins of matter and how tectonic and thermal forces continuously regenerate Earth's crust through igneous, sedimentary, and metamorphic transformations.",
          tags: ["Cosmology", "Rock Cycle", "Geology"],
          duration: "2:45",
          highlight: "Cosmic Genesis & Crustal Cycle"
        },
        {
          epNumber: 2,
          title: "Photosynthesis & Cellular Respiration",
          subject: "Earth & Life Science / Gen Bio",
          url: "https://www.facebook.com/reel/6550566958405469",
          description: "Follow the energy cycle of life: from photons capturing electrons in chloroplast thylakoids to ATP generation inside the mitochondrial matrix.",
          tags: ["Photosynthesis", "Cellular Respiration", "Bioenergetics"],
          duration: "3:10",
          highlight: "ATP Synthesis & Energy Flux"
        },
        {
          epNumber: 3,
          title: "Gas Laws to Ideal Gas Laws",
          subject: "General Chemistry",
          url: "https://www.facebook.com/reel/391915776696928",
          description: "Demystifying pressure, volume, and temperature relationships with real-life demonstrations leading to the universal gas equation PV = nRT.",
          tags: ["Gas Laws", "Thermodynamics", "PV=nRT"],
          duration: "2:55",
          highlight: "Mastering PV = nRT"
        },
        {
          epNumber: 4,
          title: "Newton's Law to Projectile Motion",
          subject: "General Physics",
          url: "https://www.facebook.com/reel/2105510459835704",
          description: "Analyzing the vector physics of objects hurled through air: decomposing velocity components, independence of orthogonal motions, and gravity.",
          tags: ["Newtonian Mechanics", "Projectile Motion", "Kinematics"],
          duration: "3:20",
          highlight: "Vector Trajectory Dynamics"
        }
      ]
    },
    {
      season: 2,
      title: "Season 2: Nuclear Transitions & Electromagnetism",
      description: "Subatomic transformations, radioactive decay mechanisms, electrostatic forces, and Gauss's law.",
      episodes: [
        {
          epNumber: 1,
          title: "Types of Decay",
          subject: "Physical Science",
          url: "https://www.facebook.com/reel/1415990995701784",
          description: "Alpha, Beta, and Gamma radiation explained clearly. Understand nuclear stability, half-lives, and how unstable isotopes release energy to reach ground state.",
          tags: ["Nuclear Physics", "Alpha Decay", "Beta Decay", "Radiation"],
          duration: "2:50",
          highlight: "Nuclear Stability & Half-Life"
        },
        {
          epNumber: 3,
          title: "Electric Charge to Coulomb's Law",
          subject: "General Physics",
          url: "https://www.facebook.com/reel/1085553175867168",
          description: "How static charges interact across space: charge quantization, Coulombic repulsion and attraction, and electrostatic vector calculation.",
          tags: ["Electrostatics", "Coulomb's Law", "Point Charges"],
          duration: "3:15",
          highlight: "The Electrostatic Force Equation"
        },
        {
          epNumber: 4,
          title: "Electric Flux",
          subject: "General Physics",
          url: "https://www.facebook.com/reel/1134090821073282",
          description: "Understanding the flow of electric field lines passing through defined surfaces, dot products with normal vectors, and the foundation of Gauss's Law.",
          tags: ["Electric Flux", "Gauss Law", "Surface Integrals"],
          duration: "2:40",
          highlight: "Surface Vector Field Dynamics"
        }
      ]
    },
    {
      season: 3,
      title: "Season 3: Matter, Molecules & Heredity",
      description: "Stoichiometric conversions, intermolecular attractions, genetics, and cosmological history.",
      episodes: [
        {
          epNumber: 1,
          title: "Stoichiometry in Action",
          subject: "General Chemistry",
          url: "https://www.facebook.com/reel/3851024501878209",
          description: "Master mole-to-mole and mass-to-mass conversions with foolproof step-by-step ratio mapping for balanced chemical equations.",
          tags: ["Stoichiometry", "Mole Ratio", "Limiting Reactant"],
          duration: "3:05",
          highlight: "Foolproof Mole Ratio Map"
        },
        {
          epNumber: 2,
          title: "Science of Liquids and Solids",
          subject: "Physical Science / Gen Chem",
          url: "https://www.facebook.com/reel/1025185459476114",
          description: "How intermolecular forces dictate macroscopic traits: boiling points, viscosity, surface tension, and crystalline lattice packaging.",
          tags: ["IMFA", "Liquids and Solids", "Vapor Pressure"],
          duration: "3:30",
          highlight: "Macroscopic Properties Decoded"
        },
        {
          epNumber: 3,
          title: "Mendelian Inheritance",
          subject: "General Biology",
          url: "https://www.facebook.com/reel/635601682597805",
          description: "Gregor Mendel's classical pea plant experiments, alleles, dominant and recessive traits, and mastering 3:1 and 9:3:3:1 phenotypic ratios.",
          tags: ["Genetics", "Mendelian Inheritance", "Punnett Square"],
          duration: "3:12",
          highlight: "Punnett Cross Masterclass"
        },
        {
          epNumber: 4,
          title: "Journey through Coulomb's Law",
          subject: "General Physics",
          url: "https://www.facebook.com/reel/1011805547713437",
          description: "Advanced numerical applications of Coulomb's Law, solving for equilibrium points on 1D and 2D multi-charge configurations.",
          tags: ["Coulomb's Law", "Equilibrium", "Vector Sums"],
          duration: "3:25",
          highlight: "Multi-Charge Equilibrium Mastery"
        },
        {
          epNumber: 5,
          title: "The Big Bang Theory",
          subject: "Physical Science / Earth Science",
          url: "https://www.facebook.com/reel/8848769948561458",
          description: "Cosmic microwave background radiation, Hubble's redshift expansion, and the chronological timeline of our observable universe.",
          tags: ["Big Bang", "Cosmology", "Redshift"],
          duration: "3:45",
          highlight: "Cosmic Timeline of Space-Time"
        }
      ]
    },
    {
      season: 4,
      title: "Season 4: Advanced Frontiers & Real-World Physics",
      description: "The newest 2026 releases: Petrology, electrostatic potential, fusion astrophysics, thermodynamics, and pedigree analysis.",
      episodes: [
        {
          epNumber: 1,
          title: "Rocks",
          subject: "Earth & Life Science",
          url: "https://www.facebook.com/reel/1743899456269028",
          description: "Detailed petrological classification of rocks: intrusive vs extrusive igneous textures, sedimentary stratification, and metamorphic foliation.",
          tags: ["Petrology", "Rocks", "Minerals", "Geology"],
          duration: "3:00",
          highlight: "Igneous, Sedimentary, Metamorphic"
        },
        {
          epNumber: 2,
          title: "Auras of Electricity",
          subject: "General Physics",
          url: "https://www.facebook.com/share/v/1GKVEzquEN/",
          description: "Visualizing electric potential around charged geometries, equipotential surfaces, electric dipole moments, and capacitor storage.",
          tags: ["Electric Potential", "Equipotential Lines", "Capacitance"],
          duration: "3:15",
          highlight: "Equipotential Lines & Voltage"
        },
        {
          epNumber: 3,
          title: "Nuclear Fusion Reactions",
          subject: "Physical Science",
          url: "https://www.facebook.com/share/v/1AphijhMzw/",
          description: "How stars generate power: proton-proton chain, triple-alpha process, binding energy curves, and the quest for terrestrial fusion energy.",
          tags: ["Nuclear Fusion", "Stellar Physics", "Binding Energy"],
          duration: "3:40",
          highlight: "Stellar Nucleosynthesis & Fusion"
        },
        {
          epNumber: 4,
          title: "Phase Changes of Matter",
          subject: "Physical Science / Gen Chem",
          url: "https://www.facebook.com/share/v/1E1NstB5Kb/",
          description: "Latent heat of fusion and vaporization, thermodynamic phase equilibrium, sublimation, and reading phase diagrams under pressure changes.",
          tags: ["Phase Changes", "Latent Heat", "Thermodynamics"],
          duration: "3:10",
          highlight: "Triple Point & Phase Diagrams"
        },
        {
          epNumber: 5,
          title: "Patterns of Inheritance and Pedigree Analysis",
          subject: "General Biology",
          url: "https://www.facebook.com/share/v/1AphijhMzw/",
          externalNote: "Premiered Season 4 Episode 5",
          description: "Deciphering genealogical pedigree charts: tracking sex-linked traits, autosomal recessive genetic disorders, and calculating carrier risks.",
          tags: ["Pedigree Analysis", "Human Genetics", "Inheritance Patterns"],
          duration: "3:35",
          highlight: "Pedigree Chart Diagnostic Rules"
        }
      ]
    }
  ]
};
