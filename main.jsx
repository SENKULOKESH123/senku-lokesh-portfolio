import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink,
  Code2, Database, Globe, Cpu, Menu, X, Sun, Moon, MapPin,
  BriefcaseBusiness, Trophy, Users, Terminal, HeartPulse, Search, Sparkles, DatabaseZap, Bot
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Senku Lokesh",
  headline: "Computer Science Student · Web Developer · AI Enthusiast",
  location: "India",
  email: "lokeshs.btech2023@iuraipur.edu.in",
  github: "https://github.com/LOKESH123999",
  linkedin: "https://linkedin.com/in/senkulokesh2004"
};

const skills = [
  ["Python", "Programming", Code2],
  ["JavaScript", "Programming", Terminal],
  ["React.js", "Frontend", Globe],
  ["FastAPI", "Backend", Cpu],
  ["SQL / MySQL", "Database", Database],
  ["REST APIs", "Integration", ArrowUpRight],
  ["Git & GitHub", "Tools", Github],
  ["Twilio API", "Integration", Mail]
];

const projects = [
  {
    title: "Blood Donation & Emergency Matching Platform",
    type: "Contributed Project · Nov–Dec 2025",
    description:
      "A responsive platform connecting hospitals with nearby blood donors through blood-group, location and availability filters.",
    tags: ["Bootstrap 5", "REST APIs", "Twilio", "Team of 5"],
    award: "Startup Chhattisgarh · Top 14",
    github: "https://github.com/LOKESH123999/Blood-Donor-Platform"
  },
  {
    title: "AI Research Funding & Innovation Intelligence Platform",
    type: "Infosys Springboard 7.0 · Aug 2026–Present",
    description:
      "An AI-powered platform for discovering funding opportunities, analyzing research trends, evaluating patent landscapes and generating innovation insights.",
    tags: ["Python", "FastAPI", "React.js", "NLP", "Docker", "Cloud"],
    award: "Team Project · Infosys Springboard",
    github: "#"
  }
];

function App() {
  const [dark, setDark] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">SL</span>
          <span>Senku Lokesh</span>
        </a>

        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Available for opportunities</div>
            <h1>Building useful things with <span>code & curiosity.</span></h1>
            <p className="hero-text">
              I'm Senku Lokesh, a Computer Science student focused on web development,
              backend APIs and practical AI-powered solutions.
            </p>
            <div className="hero-actions">
          <a className="btn btn-primary" href="/Resume.pdf" download="Senku-Lokesh-Resume.pdf">Download Resume</a>
              <a className="btn primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a>
              <a className="btn ghost" href="/Resume.pdf" target="_blank" rel="noreferrer">
                <Download size={17}/> Resume
              </a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={19}/> Email</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal-head"><span/><span/><span/></div>
            <div className="terminal-body">
              <div><span className="muted">const</span> developer = {"{"}</div>
              <div className="indent"><span className="key">name</span>: <span className="str">"Senku Lokesh"</span>,</div>
              <div className="indent"><span className="key">degree</span>: <span className="str">"B.Tech CSE"</span>,</div>
              <div className="indent"><span className="key">cgpa</span>: <span className="num">9.8</span>,</div>
              <div className="indent"><span className="key">focus</span>: [</div>
              <div className="indent2"><span className="str">"Web Development"</span>,</div>
              <div className="indent2"><span className="str">"AI Research"</span>,</div>
              <div className="indent2"><span className="str">"Real-world Solutions"</span></div>
              <div className="indent">]</div>
              <div>{"}"}</div>
              <div className="cursor">_</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 / About</div>
          <div className="two-col">
            <div>
              <h2>Curious by nature.<br/><span>Practical by choice.</span></h2>
            </div>
            <div className="prose">
              <p>
                I'm a B.Tech Computer Science student at The ICFAI University, Raipur,
                with a strong academic record and hands-on experience in web development,
                backend APIs and AI-based projects.
              </p>
              <p>
                I enjoy turning real problems into simple, usable technology and working
                with teams to take an idea from concept to a working solution.
              </p>
              <div className="facts">
                <div><strong>9.8/10</strong><small>Current CGPA</small></div>
                <div><strong>2</strong><small>Internships / experiences</small></div>
                <div><strong>Top 14</strong><small>Startup Chhattisgarh</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / Skills</div>
          <div className="section-heading">
            <h2>Tools I use to <span>build.</span></h2>
            <p>A growing toolkit across frontend, backend, APIs and data.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, group, Icon]) =>
              <div className="skill" key={name}>
                <div className="skill-icon"><Icon size={21}/></div>
                <div><strong>{name}</strong><small>{group}</small></div>
              </div>
            )}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">03 / Projects</div>
          <div className="section-heading">
            <h2>Selected <span>work.</span></h2>
            <p>Projects where technology meets a real-world problem.</p>
          </div>
          <div className="projects">
            {projects.map((p, i) =>
              <article className="project" key={p.title}>
                <div className="project-top">
                  <span className="project-number">0{i + 1}</span>
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="Project link">
                    <ExternalLink size={20}/>
                  </a>
                </div>
                <div className="project-content">
                  <div className={`project-preview preview-${i + 1}`} aria-label={`${p.title} animated preview`}>
                    {i === 0 ? (
                      <div className="preview-app blood-app">
                        <div className="preview-nav"><span className="mini-logo"><HeartPulse size={12}/></span><b>BloodConnect</b><span className="live-pill">LIVE</span></div>
                        <div className="preview-search"><Search size={13}/><span>Search nearby donors...</span></div>
                        <div className="donor-row"><span className="blood-badge">O+</span><span><b>Nearby donor</b><small>2.4 km · Available now</small></span><span className="ping-dot"/></div>
                        <div className="donor-row delay"><span className="blood-badge">B+</span><span><b>Verified donor</b><small>4.1 km · Available today</small></span><span className="ping-dot"/></div>
                      </div>
                    ) : (
                      <div className="preview-app ai-app">
                        <div className="preview-nav"><span className="mini-logo"><Bot size={12}/></span><b>Research Intelligence</b><span className="ai-scan">SCANNING</span></div>
                        <div className="ai-grid">
                          <div className="ai-card"><Sparkles size={14}/><span>Funding Match</span><strong>94%</strong></div>
                          <div className="ai-card"><DatabaseZap size={14}/><span>Patent Signal</span><strong>82%</strong></div>
                          <div className="ai-chart"><span/><span/><span/><span/><span/><i/></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="project-type">{p.type}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="award"><Trophy size={16}/> {p.award}</div>
                </div>
              </article>
            )}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">04 / Experience</div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-dot"/>
              <div className="timeline-date">Aug 2026 — Present</div>
              <div className="timeline-main">
                <h3>Virtual Intern · Infosys Springboard 7.0</h3>
                <p>Collaborating on an AI-powered research funding and innovation platform, contributing to research, development and testing.</p>
                <div className="tags"><span>Python</span><span>FastAPI</span><span>React.js</span><span>NLP</span><span>Docker</span></div>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-dot"/>
              <div className="timeline-date">Jun 2025 — Aug 2025</div>
              <div className="timeline-main">
                <h3>Frontend Web Development Intern · Shripriti Educational & IT Hub</h3>
                <p>Built responsive cross-browser pages with HTML, CSS, JavaScript and Bootstrap, integrated REST APIs and fixed UI issues.</p>
                <div className="tags"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Bootstrap</span></div>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-dot"/>
              <div className="timeline-date">Leadership</div>
              <div className="timeline-main">
                <h3>Workshop Lead · Tech Talks Club</h3>
                <p>Worked with a team to organize technical workshops and career-development events, supporting student engagement and the college technology community.</p>
                <div className="tags"><span>Leadership</span><span>Communication</span><span>Event Planning</span></div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-label">05 / Contact</div>
          <h2>Let's build something<br/><span>meaningful.</span></h2>
          <p>Open to internships, projects, collaborations and opportunities where I can learn and contribute.</p>
          <a className="btn primary big" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={19}/></a>
          <div className="contact-meta"><MapPin size={16}/> India <span>·</span> <BriefcaseBusiness size={16}/> Open to opportunities</div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Senku Lokesh</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
