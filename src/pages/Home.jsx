function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="section-tag">Personal Portfolio</p>

          <h1>Erdem YACEL</h1>

          <h2>Data Science Student</h2>

          <p className="hero-text">
            Turning data into meaningful insights through analytics,
            machine learning and modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects
            </a>

            <a href="/contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-orb">
            <div className="orb-ring"></div>
            <div className="orb-ring second"></div>
            <div className="orb-ring third"></div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills reveal">
        <div className="card">Python</div>
        <div className="card">SQL</div>
        <div className="card">Machine Learning</div>
        <div className="card">Data Analysis</div>
        <div className="card">Data Visualization</div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects reveal">
        <p className="section-tag">Featured Projects</p>
        <h2 className="section-heading">Recent Work</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Customer Analytics Dashboard</h3>
            <p>
              Interactive dashboard for analysing customer behaviour using
              SQL, Python and Power BI.
            </p>
            <span>Python • SQL • Power BI</span>
          </div>

          <div className="project-card">
            <h3>Sales Prediction Model</h3>
            <p>
              Machine learning model developed to predict future sales
              trends using historical data.
            </p>
            <span>Python • Scikit-Learn</span>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              Responsive portfolio website built with React,
              accessibility and dark mode support.
            </p>
            <span>React • CSS • Vite</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats reveal">
        <div className="stat-box">
          <h2>5+</h2>
          <p>Technical Skills</p>
        </div>

        <div className="stat-box">
          <h2>3</h2>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h2>2+</h2>
          <p>Programming Languages</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Dedication</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <p className="section-tag">Let's Connect</p>

        <h2>Interested in working together?</h2>

        <p>
          I'm always open to discussing new ideas,
          projects and opportunities.
        </p>

        <a href="/contact" className="cta-button">
          Contact Me
        </a>
      </section>
    </>
  );
}

export default Home;