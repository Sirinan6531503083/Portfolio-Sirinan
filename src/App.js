import React, { useState } from "react";
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
} from "react-icons/fa";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const programming = [
    { icon: <FaCode />, title: "Programming Languages", desc: "Dart, HTML, CSS, JavaScript" },
    { icon: <FaTools />, title: "Frameworks & Libraries", desc: "Flutter, React.js, Vue.js, Nuxt.js, Node.js, Firebase" },
    { icon: <FaDesktop />, title: "Tools & Platforms", desc: "VS Code, Jupyter Notebook, GitHub, Figma" },
    { icon: <FaPaintBrush />, title: "Design Skills", desc: "UX/UI Design (Figma, basic prototyping)" },
    { icon: <FaLanguage />, title: "Languages", desc: "Thai (Native), English (Basic)" },
  ];

  const projects = [
  {
    title: "Chiangrungpark – Hotel Booking Website (2023)",
    description: `Book a room and order food at the hotel.

- Designed an attractive and user-friendly UX/UI for the hotel booking and food ordering system.
- Developed front-end pages using HTML and CSS with well-structured layouts.
- Communicated and collaborated with clients to gather requirements.
- Focused on creating a smooth and seamless user experience.`,
    github: "https://github.com/Sirinan6531503083/Chiangrung-Park",
    image: "/chiang.jpg",
  },
  {
    title: "Quiz for Study – Educational Mobile Application (2023–2024)",
    description: `An educational mobile application providing practice tests in 5 main subjects, randomly assigned for each test set, for students from grades 1 to 6. (Published on Google Play Store)


- Developed the front-end using Flutter (Dart and CSS)
- Designed the complete UX/UI for the app
- Ensured an interactive and user-friendly experience for students`,
    github: "https://github.com/Sirinan6531503083/QuizforStudy-main",
    image: "/study.jpg",
  },
  {
    title: "ParkPass – Digital Stamp Collection Website for Parks (2025 – Present)",
    description: `Developed a web application for collecting digital stamps of national parks, allowing users to track and view their collected stamps.

- Front-end development using React.js (JSX and CSS)
- Implemented user registration and login system (Authentication) with Firebase
- Designed and implemented the complete UI/UX for the website`,
    github: "https://github.com/Sirinan6531503083/ParkPass",
    image: "/parkpass.jpg",
  },
  {
    title: "Multi-Agent AI Service for Students – Web Application (2025–Present)",
    description: `A website featuring an AI Chatbot that answers questions and provides assistance to Mae Fah Luang University students 24/7.

- Developed and integrated the AI Chatbot using Google Gemini API (LLM) with Python
- Front-end development using Vue.js (JavaScript)
- Designed and implemented the complete UI/UX on Figma, focusing on a smooth and user-friendly experience`,
    github: "https://github.com/Sirinan6531503083/Project-Agent-ai-student-main",
    image: "/mfu.jpg",
  },
];


  const activities = [
    { image: "/at1.jpg", desc: "goda Tech Camp Day Join Agoda's tech camp to code Line bot (Chiang Mai University)" },
    { image: "/at2.jpg", desc: "goda Tech Camp Day Join Agoda's tech camp to code Line bot (Chiang Mai University)" },
    { image: "/at3.jpg", desc: "เข้าร่วมโครงการออมสินยุวพัฒน์รักษ์ถิ่น2566 ได้รับรางวัลชมเชย (ธนาคารออมสิน)" },
    { image: "/at4.jpg", desc: "เข้าร่วมโครงการออมสินยุวพัฒน์รักษ์ถิ่น2566 ได้รับรางวัลชมเชย (ธนาคารออมสิน)" },
    { image: "/at5.jpg", desc: "เข้าร่วมโครงการออมสินยุวพัฒน์รักษ์ถิ่น2566 ได้รับรางวัลชมเชย (ธนาคารออมสิน)" },
     { image: "/at6.jpg", desc: "TA at Code Camp 2023 – taught Figma." },
    { image: "/at7.jpg", desc: "TA at Code Camp 2023 – taught Figma." },
    { image: "/at8.jpg", desc: "TA at Code Camp 2023 – taught Figma." },
    { image: "/at9.jpg", desc: "TA, Line x MFU Hackathon 2025 (2-day event)" },
    { image: "/at10.jpg", desc: "TA, Line x MFU Hackathon 2025 (2-day event)" },
    { image: "/at11.jpg", desc: "TA, Line x MFU Hackathon 2025 (2-day event)" },
  ];

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  // ฟังก์ชันเลื่อน Projects
  const scrollProjects = (direction) => {
    const grid = document.getElementById("projectsGrid");
    if (grid) {
      const cardWidth = grid.querySelector(".project-card").offsetWidth + 32;
      grid.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  // ฟังก์ชันเลื่อน Activities
  const scrollActivities = (direction) => {
    const grid = document.getElementById("activitiesGrid");
    if (grid) {
      const cardWidth = grid.querySelector(".activity-card").offsetWidth + 24;
      grid.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">Portfolio</div>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#activity" onClick={() => setMenuOpen(false)}>Activities</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="profile-pic" onClick={() => openModal("/profile.jpg")}>
            <img src="/profile.jpg" alt="Sirinan Hongdamnean" />
          </div>
          <div className="about-text">
            <h2>Welcome to my Portfolio</h2>
            <h1>Sirinan Hongdamnean</h1>
            <h4>Software Developer (Internship)</h4>
            <p>
              Fourth-year Software Engineering student seeking a Software Developer Internship, with strong interest and proficiency in Front-End Developer  for websites and web applications.<br /><br />
              Skilled in team collaboration, with solid understanding of UI/UX design principles and a strong sense of responsibility.<br /><br />
              Passionate about creating user-friendly, visually appealing, and responsive web experiences, with the goal of contributing to innovative projects while continuously developing skills to grow into a professional Front-End Developer.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <h2>Education</h2>
        <div className="education-container">
          <div className="education-card">
            <h3>Latyaowittayakom School</h3>
            <p>High School Diploma</p>
            <span>2020 – 2022</span>
          </div>
          <div className="education-card">
            <h3>Mae Fah Luang University</h3>
            <p>
             Bachelor’s Degree Student in Software Engineering (Year 4)<br />
             Cumulative GPAX: 3.05
            </p>
            <span>2022 – Present</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {programming.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid" id="projectsGrid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card" onClick={() => openModal(proj.image)}>
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
              {proj.description.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <a href={proj.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
        <div className="project-controls">
          <button className="project-btn" onClick={() => scrollProjects(-1)}>‹</button>
          <button className="project-btn" onClick={() => scrollProjects(1)}>›</button>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activity" className="activity-section">
        <h2>Activities</h2>
        <div className="activity-scroll" id="activitiesGrid">
          {activities.map((act, i) => (
            <div key={i} className="activity-card" onClick={() => openModal(act.image)}>
              <img src={act.image} alt={act.desc} />
              <p>{act.desc}</p>
            </div>
          ))}
        </div>
        <div className="activity-controls">
          <button className="activity-btn" onClick={() => scrollActivities(-1)}>‹</button>
          <button className="activity-btn" onClick={() => scrollActivities(1)}>›</button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>Phone: 095-6395315</p>
          <p>Email: <a href="mailto:hongdamneansirinan@gmail.com">hongdamneansirinan@gmail.com</a></p>
          <p>Address: 542 Moo 1, Khao Chon Kan, Mae Wong, Nakhon Sawan 60150, Thailand</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/Sirinan6531503083" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:hongdamneansirinan@gmail.com"><FaEnvelope /></a>
          <a href="https://www.facebook.com/sinun.hongdamnurn/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/nanirisx.bm/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </section>

      {/* Modal */}
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
