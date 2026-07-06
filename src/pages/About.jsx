function About() {
  return (
    <section className="about-premium reveal">
      <div className="identity-card">
        <span className="initials">Erdem Yacel</span>
        <span className="id-role">Data Science · Hamburg</span>
      </div>

      <div className="about-content">
        <p className="section-tag">About Me</p>

        <h1>Data Science Student</h1>

        <p>
          I am passionate about data, technology, and artificial
          intelligence. My focus is transforming data into meaningful
          insights and building solutions that create real value.
        </p>

        <div className="skill-tags">
          <span>Python</span>
          <span>SQL</span>
          <span>Machine Learning</span>
          <span>Data Analysis</span>
          <span>AI</span>
        </div>

        <div className="about-meta">
          <div className="meta-block">
            <p className="meta-label">Education</p>
            <p className="meta-value">
              B.Sc. Data Science
              <br />
              University of Europe for Applied Sciences
            </p>
          </div>

          <div className="meta-block">
            <p className="meta-label">Focus Areas</p>
            <p className="meta-value">
              Machine Learning, Analytics, Data Visualization
            </p>
          </div>

          <div className="meta-block">
            <p className="meta-label">Current Interests</p>
            <p className="meta-value">
              Applied AI, Statistical Modeling, Product Analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;