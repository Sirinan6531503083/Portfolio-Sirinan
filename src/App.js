import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaCode,
  FaTools,
  FaDesktop,
  FaPaintBrush,
  FaLanguage,
  FaBars,
  FaTimes,
  FaDatabase,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaLayerGroup,
  FaSun,
  FaMoon,
  FaCamera,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [activeNav, setActiveNav] = useState("about");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "experience", "skills", "projects", "activity", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programming = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript", "HTML", "CSS", "Dart", "C#"],
    },
    {
      icon: <FaTools />,
      title: "Frameworks & Libraries",
      items: ["React.js", "Flutter", "Vue.js", "Nuxt.js", "Node.js", "Tailwind CSS"],
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      items: ["Firebase", "MySQL"],
    },
    {
      icon: <FaDesktop />,
      title: "Tools & Platforms",
      items: ["Git", "Figma", "Canva", "Visual Studio Code", "Antigravity", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    },
    {
      icon: <FaPaintBrush />,
      title: "Design Skills",
      items: ["UX/UI Design (Figma, Basic Prototyping)"],
    },
    {
      icon: <FaLanguage />,
      title: "Languages",
      items: ["Thai (Native)", "English (Intermediate)"],
    },
  ];

  const projects = [
    {
      title: "Chiangrungpark – Hotel Booking Website",
      subtitle: "Web Application (2023)",
      category: "Web Application",
      description: `Book a room and order food at the hotel.

• Designed an attractive and user-friendly UX/UI for hotel booking and food ordering.
• Developed front-end pages using HTML and CSS with well-structured layouts.
• Communicated and collaborated with clients to gather requirements.
• Focused on creating a smooth and seamless user experience.`,
      tags: ["HTML5", "CSS3", "JavaScript", "UX/UI Design"],
      image: "/chiang.jpg",
    },
    {
      title: "Quiz for Study – Educational Mobile App",
      subtitle: "Mobile Application (2023–2024)",
      category: "Mobile Application",
      badge: "Published on Play Store",
      description: `An educational mobile application providing practice tests in 5 main subjects, randomly assigned for each test set, for students from grades 1 to 6.

• Developed the front-end using Flutter (Dart and CSS).
• Designed the complete UX/UI on Figma.
• Ensured an interactive and user-friendly experience for primary students.`,
      tags: ["Flutter", "Dart", "CSS", "Figma", "Google Play Store"],
      image: "/study.jpg",
    },
    {
      title: "Multi-Agent AI Service for Students",
      subtitle: "Web Application (2025)",
      category: "AI & Web Application",
      description: `A website featuring an AI Chatbot that answers questions and provides assistance to Mae Fah Luang University students 24/7.

• Developed and integrated the AI Chatbot using Google Gemini API (LLM) with Python.
• Front-end development using Vue.js (JavaScript).
• Designed and implemented the complete UI/UX on Figma, focusing on a smooth and user-friendly experience.`,
      tags: ["Vue.js", "Python", "Google Gemini API", "LLM", "Figma"],
      image: "/mfu.jpg",
    },
    {
      title: "Village Savings Management System",
      subtitle: "Web Application (In Development)",
      category: "Full-Stack Web App",
      badge: "In Development",
      description: `Digitizing village savings records for community administrators.

• Developed a full-stack web application using React and Supabase (PostgreSQL), replacing manual notebook-based savings records.
• Implemented automated balance calculation, role-based access control (RLS), and audit logging to prevent data loss and errors.`,
      tags: ["React.js", "Supabase", "PostgreSQL", "RLS Security", "Tailwind CSS"],
      image: "/village.jpg",
    },
    {
      title: "ParkPass – Digital Stamp Collection Website",
      subtitle: "Web Application (2025)",
      category: "Web Application",
      description: `Developed a web application for collecting digital stamps of national parks, allowing users to track and view their collected stamps.

• Front-end development using React.js (JSX and CSS).
• Implemented user registration and login system (Authentication) with Firebase.
• Designed and implemented the complete UI/UX for the website.`,
      tags: ["React.js", "Firebase Auth", "JSX", "CSS3", "UX/UI Design"],
      image: "/parkpass.jpg",
    },
  ];

  const activities = [
    { image: "/at1.jpg", desc: "Agoda Tech Camp Day – Joined Agoda's tech camp to code Line bot at Chiang Mai University" },
    { image: "/at2.jpg", desc: "Agoda Tech Camp Day – Coding session and team project showcase" },
    { image: "/at3.jpg", desc: "เข้าร่วมโครงการออมสินยุวพัฒน์รักษ์ถิ่น 2566 – ได้รับรางวัลชมเชย (ธนาคารออมสิน)" },
    { image: "/at4.jpg", desc: "โครงการออมสินยุวพัฒน์รักษ์ถิ่น – การนำเสนอผลงานร่วมกับชุมชน" },
    { image: "/at5.jpg", desc: "โครงการออมสินยุวพัฒน์รักษ์ถิ่น – บรรยากาศงานรับมอบรางวัล" },
    { image: "/at6.jpg", desc: "Teaching Assistant (TA) at Code Camp 2023 – Taught Figma & UI Design basics" },
    { image: "/at7.jpg", desc: "TA at Code Camp 2023 – Hands-on workshop with participants" },
    { image: "/at8.jpg", desc: "TA at Code Camp 2023 – Mentoring student design teams" },
    { image: "/at9.jpg", desc: "Teaching Assistant (TA), Line x MFU Hackathon 2025 (2-day event)" },
    { image: "/at10.jpg", desc: "TA, Line x MFU Hackathon 2025 – Technical support & guidance" },
    { image: "/at11.jpg", desc: "TA, Line x MFU Hackathon 2025 – Event wrap-up & group photo" },
  ];

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const scrollProjects = (direction) => {
    const grid = document.getElementById("projectsGrid");
    if (grid) {
      const cardWidth = grid.querySelector(".project-card")?.offsetWidth + 24 || 380;
      grid.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  const scrollActivities = (direction) => {
    const grid = document.getElementById("activitiesGrid");
    if (grid) {
      const cardWidth = grid.querySelector(".activity-card")?.offsetWidth + 24 || 320;
      grid.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className={`App ${darkMode ? "dark-theme" : ""}`}>
      {/* Background ambient glow shapes */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      {/* Navbar */}
      <header className="header">
        <nav className="navbar">
          <a href="#about" className="logo">
            <span className="logo-spark"><FaStar /></span> Sirinan<span className="logo-dot">.dev</span>
          </a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#about" className={activeNav === "about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#education" className={activeNav === "education" ? "active" : ""} onClick={() => setMenuOpen(false)}>Education</a></li>
              <li><a href="#experience" className={activeNav === "experience" ? "active" : ""} onClick={() => setMenuOpen(false)}>Experience</a></li>
              <li><a href="#skills" className={activeNav === "skills" ? "active" : ""} onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" className={activeNav === "projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#activity" className={activeNav === "activity" ? "active" : ""} onClick={() => setMenuOpen(false)}>Activities</a></li>
              <li><a href="#contact" className={activeNav === "contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
          <div className="header-actions">
            <button className="theme-toggle-btn" onClick={toggleDarkMode} title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              {darkMode ? <FaSun className="theme-icon sun-icon" /> : <FaMoon className="theme-icon moon-icon" />}
            </button>
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      </header>

      {/* About / Hero Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="profile-wrapper" onClick={() => openModal("/profile.jpg")}>
            <div className="profile-glow"></div>
            <div className="profile-pic">
              <img src="/profile.jpg" alt="Sirinan Hongdamnean" />
              <div className="profile-overlay">
                <span>Click to Expand</span>
              </div>
            </div>
            <div className="experience-badge">
              <FaCheckCircle /> Ready for Front-End Roles
            </div>
          </div>

          <div className="about-text">
            <div className="status-pill">
              <span className="status-dot"></span> Available for Front-End Developer Positions
            </div>
            <h1 className="hero-name">Sirinan Hongdamnean</h1>
            <h2 className="hero-title">Front-End Developer</h2>
            <p className="hero-bio">
              Recent <strong>Software Engineering graduate</strong> with a strong passion for Front-End development and creating modern, responsive, and user-friendly web applications. Skilled in developing websites and applications using front-end technologies, with a strong understanding of UI/UX design principles and a focus on creating engaging digital experiences. <br /><br />
              Experienced in working collaboratively within a team and applying design principles to develop intuitive and accessible user interfaces. Passionate about learning new technologies and continuously improving development skills to create efficient, responsive, and visually appealing web experiences. <br /><br />
              Committed to growing into a professional Front-End Developer who can combine technical knowledge with creative problem-solving to build high-quality, user-centered web applications that provide meaningful and enjoyable experiences.
            </p>

            {/* Quick Metrics */}
            <div className="hero-metrics">
              <div className="metric-box">
                <span className="metric-number">3.11</span>
                <span className="metric-label">GPAX (Software Eng)</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">5+</span>
                <span className="metric-label">Featured Projects</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">TCC Tech</span>
                <span className="metric-label">Internship Trainee</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <FaArrowRight />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me <FaEnvelope />
              </a>
              <a href="https://github.com/Sirinan6531503083" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding education-section">
        <div className="section-title-wrap">
          <span className="section-tag"><FaGraduationCap /> Academic Background</span>
          <h2>Education</h2>
        </div>
        <div className="education-container">
          <div className="education-card">
            <div className="edu-icon-wrap">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <div className="edu-header">
                <h3>Mae Fah Luang University</h3>
                <span className="badge badge-date">2022 – 2026</span>
              </div>
              <p className="edu-degree">Bachelor’s Degree in Software Engineering</p>
              <p className="edu-gpax">Cumulative GPAX: <strong>3.11</strong></p>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-icon-wrap">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <div className="edu-header">
                <h3>Latyaowittayakom School</h3>
                <span className="badge badge-date">2020 – 2022</span>
              </div>
              <p className="edu-degree">High School Diploma</p>
              <p className="edu-gpax">Science - Mathematics Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Internship Section */}
      <section id="experience" className="section-padding experience-section">
        <div className="section-title-wrap">
          <span className="section-tag"><FaBriefcase /> Practical Experience</span>
          <h2>Experience & Internship</h2>
        </div>

        <div className="experience-container">
          {/* T.C.C. Technology Company Limited */}
          <div className="experience-card main-exp-card">
            <div className="exp-badge-type">Company Internship</div>
            <div className="experience-header">
              <div>
                <h3>T.C.C. Technology Company Limited</h3>
                <h4 className="exp-role">IoT Engineer Trainee | Smart Solutions Team</h4>
              </div>
              <span className="badge badge-date">5 January – 24 April 2026</span>
            </div>

            <div className="exp-tech-tags">
              <span>React.js</span>
              <span>REST APIs</span>
              <span>AutoCAD DWG/SVG</span>
              <span>Microservices</span>
              <span>Excel Export Automation</span>
              <span>Unit Testing</span>
            </div>

            <ul className="exp-bullet-list">
              <li>Developed and maintained the EEP Report Management System and an internal factory monitoring dashboard serving 45 factory sites, covering UI design, frontend development, REST API integration, unit testing, and automated Excel export for daily reporting</li>
              <li>Built an interactive solar monitoring diagram with hover-based real-time data visualization for each string</li>
              <li>Developed the Alert & Alarm, System Management (dynamic input rows for target cost configuration), and User Management (role-based read/write access control) interfaces, integrated with REST APIs</li>
              <li>Converted AutoCAD (DWG) drawings into SVG format for integration into web dashboards</li>
              <li>Developed and enhanced backend microservices, including maintaining historical records and integrating frontend with backend services</li>
              <li>Collaborated with internal teams, third-party vendors, and clients in cross-functional meetings to gather requirements, align on technical specifications, and support solution planning</li>
            </ul>

            {/* T.C.C. Internship Activity Photos (4 Photos) */}
            <div className="internship-media-section">
              <h4 className="media-section-title"><FaLayerGroup /> T.C.C. Internship Activities (4 Photos)</h4>
              <div className="tcc-gallery-grid">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="tcc-photo-item" onClick={() => openModal(`/tcc_act${num}.jpg`)}>
                    <img
                      src={`/tcc_act${num}.jpg`}
                      alt={`T.C.C. Activity ${num}`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="tcc-empty-photo" style={{ display: 'none' }}>
                      <FaCamera className="tcc-photo-icon" />
                      <span>Activity Photo {num}</span>
                      <small>(/tcc_act{num}.jpg)</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* T.C.C. Internship Certificate */}
            <div className="internship-media-section">
              <h4 className="media-section-title"><FaAward /> T.C.C. Internship Certificate</h4>
              <div className="tcc-cert-container" onClick={() => openModal("/tcc_certificate.jpg")}>
                <img
                  src="/tcc_certificate.jpg"
                  alt="T.C.C. Internship Certificate"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="certificate-empty-state" style={{ display: 'none' }}>
                  <FaAward className="empty-cert-icon" />
                  <span className="empty-cert-title">T.C.C. Technology Internship Certificate</span>
                  <small className="empty-cert-hint">คลิกเพื่อดูภาพเต็ม หรือวางไฟล์รูปภาพที่ /public/tcc_certificate.jpg</small>
                </div>
              </div>
            </div>
          </div>

          {/* MFU INTERNSHIP SKILLS CERTIFICATE */}
          <div className="experience-card certificate-card">
            <div className="cert-header-icon">
              <FaAward />
            </div>
            <h3>MFU INTERNSHIP SKILLS CERTIFICATE</h3>
            <p className="certificate-subtitle">Mae Fah Luang University Internship Skill Certificate</p>
            
            <div className="certificate-placeholder" onClick={() => openModal("/mfu_certificate.jpg")}>
              <img
                src="/mfu_certificate.jpg"
                alt="MFU Internship Skills Certificate"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="certificate-empty-state" style={{ display: 'none' }}>
                <FaAward className="empty-cert-icon" />
                <span className="empty-cert-title">MFU INTERNSHIP SKILLS CERTIFICATE</span>
                <small className="empty-cert-hint">คลิกเพื่อดูภาพเต็ม หรือวางไฟล์รูปภาพที่ /public/mfu_certificate.jpg</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding skills-section">
        <div className="section-title-wrap">
          <span className="section-tag"><FaTools /> Technical Proficiency</span>
          <h2>Skills & Expertise</h2>
        </div>

        <div className="skills-grid">
          {programming.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
              </div>
              <div className="skill-pills">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding projects-section">
        <div className="section-title-wrap">
          <span className="section-tag"><FaCode /> Featured Work</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid" id="projectsGrid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card" onClick={() => openModal(proj.image)}>
              <div className="project-img-wrapper">
                <img src={proj.image} alt={proj.title} />
                <div className="project-category-tag">{proj.category}</div>
                {proj.badge && <div className="project-playstore-badge">{proj.badge}</div>}
                <div className="project-img-hover">
                  <span>View Full Image</span>
                </div>
              </div>

              <div className="project-card-content">
                <h3>{proj.title}</h3>
                <p className="project-subtitle">{proj.subtitle}</p>

                <div className="project-tags">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">#{tag}</span>
                  ))}
                </div>

                <div className="project-description">
                  {proj.description.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={() => scrollProjects(-1)} aria-label="Previous Project">
            <FaChevronLeft />
          </button>
          <span className="slider-hint">Scroll or use arrows to navigate projects</span>
          <button className="slider-btn" onClick={() => scrollProjects(1)} aria-label="Next Project">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activity" className="section-padding activity-section">
        <div className="section-title-wrap">
          <span className="section-tag"><FaLayerGroup /> Events & Community</span>
          <h2>Activities & Workshops</h2>
        </div>

        <div className="activity-scroll" id="activitiesGrid">
          {activities.map((act, i) => (
            <div key={i} className="activity-card" onClick={() => openModal(act.image)}>
              <div className="activity-img-wrap">
                <img src={act.image} alt={act.desc} />
                <div className="activity-overlay">
                  <span>Expand Photo</span>
                </div>
              </div>
              <div className="activity-info">
                <p>{act.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={() => scrollActivities(-1)} aria-label="Previous Activity">
            <FaChevronLeft />
          </button>
          <span className="slider-hint">Drag or use arrows to view activities</span>
          <button className="slider-btn" onClick={() => scrollActivities(1)} aria-label="Next Activity">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding contact-section">
        <div className="contact-card">
          <div className="section-title-wrap text-center">
            <span className="section-tag"><FaEnvelope /> Get In Touch</span>
            <h2>Let's Connect & Build Together!</h2>
            <p className="contact-lead">I am looking forward to contributing my Front-End development skills to your team.</p>
          </div>

          <div className="contact-details-grid">
            <div className="contact-item">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:0956395315">095-6395315</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:hongdamneansirinan@gmail.com">hongdamneansirinan<wbr />@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Address</h4>
                <p>Nakhon Sawan, Thailand 60150</p>
              </div>
            </div>
          </div>

          <div className="social-links-wrapper">
            <h3>Find Me On Social Media</h3>
            <div className="social-links">
              <a href="https://github.com/Sirinan6531503083" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sirinan-hongdamnean-9163132b7/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:hongdamneansirinan@gmail.com" title="Email"><FaEnvelope /></a>
              <a href="https://www.facebook.com/sinun.hongdamnurn/" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/nanirisx.bm/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Sirinan Hongdamnean. Built with React.js & CSS | Front-End Developer Portfolio</p>
      </footer>

      {/* Image Modal */}
      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default App;



