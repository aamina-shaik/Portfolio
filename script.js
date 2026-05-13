/* ─── SKILL DATA ─── */
const skillData = {
    "Python": {
        category: "Language",
        desc: "A high-level, versatile programming language renowned for its clean, readable syntax. Python is used across web development, data science, AI, and automation — it's the primary language powering all of Aamina's backend systems and data pipelines.",
    },
    "JavaScript": {
        category: "Language",
        desc: "The language of the web. JavaScript runs in the browser to create dynamic, interactive interfaces and can also power servers via Node.js. It drives all frontend interactivity and AJAX calls across Aamina's projects.",
    },
    "SQL": {
        category: "Language",
        desc: "Structured Query Language — the standard for querying and managing relational databases. SQL lets you create, read, update, and delete records with precision. Aamina uses it alongside MySQL to handle structured data and relationships.",
    },
    "React.js": {
        category: "Frontend Framework",
        desc: "A JavaScript library by Meta for building fast, component-based user interfaces. React uses a virtual DOM for efficient rendering and enables reusable UI components. Aamina uses it to build dynamic, responsive frontends.",
    },
    "HTML5": {
        category: "Frontend",
        desc: "The latest standard of HyperText Markup Language — the backbone of every webpage. HTML5 introduced semantic elements, audio/video support, canvas, and improved forms, making web content more meaningful and accessible.",
    },
    "CSS3": {
        category: "Frontend",
        desc: "Cascading Style Sheets, version 3, brings styling to HTML with features like animations, flexbox, grid layout, custom properties, and media queries. Aamina uses it to craft polished, responsive visual designs.",
    },
    "Responsive Design": {
        category: "Frontend Concept",
        desc: "An approach ensuring websites look and work beautifully on all screen sizes — from phones to desktops. Achieved using fluid grids, flexible images, and CSS media queries to adapt layouts seamlessly.",
    },
    "Flask": {
        category: "Backend Framework",
        desc: "A lightweight Python web framework that follows the WSGI standard. Flask gives developers full control over application structure — it's minimal, flexible, and ideal for REST APIs and server-side logic. All of Aamina's backends are Flask-powered.",
    },
    "REST APIs": {
        category: "Backend Concept",
        desc: "Representational State Transfer APIs define a standard way for clients and servers to communicate over HTTP. They use verbs (GET, POST, PUT, DELETE) and JSON responses, enabling modular, scalable application architecture.",
    },
    "CRUD": {
        category: "Backend Concept",
        desc: "Create, Read, Update, Delete — the four fundamental operations of persistent storage. CRUD forms the backbone of any data-driven application, from user profiles to task lists, and is implemented across all of Aamina's database interactions.",
    },
    "MongoDB": {
        category: "Database",
        desc: "A leading NoSQL document database that stores data in flexible, JSON-like BSON documents. Unlike relational DBs, MongoDB allows schema-free collections ideal for rapidly evolving data structures. Aamina uses it as the primary DB in all major projects.",
    },
    "MySQL": {
        category: "Database",
        desc: "One of the world's most popular open-source relational database systems. MySQL organises data into structured tables with rows and columns, supports complex joins, and provides strong ACID compliance for reliable transactions.",
    },
    "Git": {
        category: "Version Control",
        desc: "A distributed version control system that tracks changes to code over time. Git enables branching, merging, and rollback, making solo and team development safer and more organised. Every project Aamina builds is version-controlled with Git.",
    },
    "GitHub": {
        category: "Platform",
        desc: "A cloud-based platform that hosts Git repositories and enables collaboration. GitHub provides pull requests, code review, issues, and CI/CD integrations — it's the central hub for Aamina's project hosting and open-source contributions.",
    },
    "VS Code": {
        category: "Tool",
        desc: "Visual Studio Code is a free, highly extensible source-code editor by Microsoft. With its rich ecosystem of extensions for Python, JavaScript, Git integration, and debugging, it's Aamina's primary development environment.",
    },
    "Postman": {
        category: "Tool",
        desc: "A powerful API testing and development platform. Postman allows developers to send HTTP requests, inspect responses, write automated tests, and document APIs — essential for testing and validating Flask REST endpoints.",
    },
    "DSA": {
        category: "CS Concept",
        desc: "Data Structures and Algorithms — the foundation of efficient programming. DSA covers arrays, linked lists, trees, graphs, sorting, and searching algorithms. A strong DSA foundation helps Aamina write optimised, performance-conscious code.",
    },
    "OOP": {
        category: "CS Concept",
        desc: "Object-Oriented Programming organises code around objects — instances of classes that bundle data (attributes) and behaviour (methods). Key principles are Encapsulation, Inheritance, Polymorphism, and Abstraction. Aamina applies OOP throughout Python development.",
    },
    "MVC": {
        category: "Architecture",
        desc: "Model-View-Controller is an architectural pattern that separates an application into three layers: the Model (data logic), the View (UI), and the Controller (request handling). Flask implements MVC natively, keeping code clean and maintainable.",
    },
    "NLP": {
        category: "AI / ML Concept",
        desc: "Natural Language Processing is a branch of AI that enables machines to understand, interpret, and generate human language. Aamina applied NLP to build a skill extractor that analyses resume text and maps it to a 70+ skill taxonomy for job matching.",
    }
};

/* ─── CUSTOM CURSOR ─── */
const cursorEl = document.getElementById('cursor'), ringEl = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursorEl.style.left = mx + 'px'; cursorEl.style.top = my + 'px'; });
(function loop() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ringEl.style.left = rx + 'px'; ringEl.style.top = ry + 'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a,button,.skill-tag,.interest-tag').forEach(el => {
    el.addEventListener('mouseenter', () => { cursorEl.style.width = '5px'; cursorEl.style.height = '5px'; ringEl.style.width = '50px'; ringEl.style.height = '50px'; });
    el.addEventListener('mouseleave', () => { cursorEl.style.width = '12px'; cursorEl.style.height = '12px'; ringEl.style.width = '36px'; ringEl.style.height = '36px'; });
});

/* ─── SKILL POPUP ─── */
const overlay = document.getElementById('skillOverlay');
const popupClose = document.getElementById('popupClose');

function openSkillPopup(skillName) {
    const d = skillData[skillName];
    if (!d) return;
    document.getElementById('popupCategory').textContent = d.category;
    document.getElementById('popupName').textContent = skillName;
    document.getElementById('popupDesc').textContent = d.desc;
    document.getElementById('popupUsed').textContent = d.used;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeSkillPopup() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', () => openSkillPopup(tag.dataset.skill));
});
popupClose.addEventListener('click', closeSkillPopup);
overlay.addEventListener('click', e => { if (e.target === overlay) closeSkillPopup(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSkillPopup(); });

/* ─── THEME SWITCHER ─── */
const themeNames = { pink: 'Pink', mint: 'Mint Cream', linen: 'Soft Linen', ash: 'Ash Grey', rouge: 'Petal Rouge', brown: 'Reddish Brown', noir: 'Noir Dark' };
const themeColors = { pink: '#e8879a', mint: '#4caf82', linen: '#c09060', ash: '#7878a8', rouge: '#d46060', brown: '#bf5a30', noir: '#9b8fff' };

function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const lbl = document.getElementById('themeLabel'), dot = document.getElementById('themeDot');
    if (lbl) lbl.textContent = themeNames[t];
    if (dot) dot.style.background = themeColors[t];
    document.querySelectorAll('.theme-option,.mobile-theme-opt').forEach(o => o.classList.toggle('active', o.dataset.theme === t));
}

const themeBtn = document.getElementById('themeBtn'), dd = document.getElementById('themeDropdown');
themeBtn.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('open'); });
document.addEventListener('click', () => dd.classList.remove('open'));
dd.addEventListener('click', e => e.stopPropagation());
document.querySelectorAll('.theme-option').forEach(b => b.addEventListener('click', () => { applyTheme(b.dataset.theme); dd.classList.remove('open'); }));
document.querySelectorAll('.mobile-theme-opt').forEach(b => b.addEventListener('click', () => applyTheme(b.dataset.theme)));

/* ─── HAMBURGER ─── */
const ham = document.getElementById('hamburger'), mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    ham.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.mob-link').forEach(a => a.addEventListener('click', () => {
    mob.classList.remove('open'); ham.classList.remove('open'); document.body.style.overflow = '';
}));

/* ─── SCROLL REVEAL ─── */
const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
document.querySelectorAll('.stat-card,.skill-group,.project-item,.exp-card,.cert-item,.contact-link,.quote-text,.quote-author').forEach(el => obs.observe(el));
