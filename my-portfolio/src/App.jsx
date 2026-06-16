function App() {
  return (
    <div>
      <section className="hero">
        <h1>Hi, I'm <span>Heiligard</span></h1>
        <p>Full-Stack Developer · React & Node.js · AI Integration</p>
        <a href="mailto:your@email.com" className="btn">Hire Me</a>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          {['React', 'Node.js', 'JavaScript', 'REST API', 'CSS', 'ChatGPT API', 'UI/UX', 'Git'].map(skill => (
            <span key={skill} className="skill">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="card">
          <h3>AI Chatbot</h3>
          <p>A customer support chatbot powered by GPT-4o-mini. Built with React and Node.js.</p>
          <span>Coming soon...</span>
        </div>
      </section>

      <section className="contact">
        <h2>Let's work together</h2>
        <p>Available for freelance projects worldwide</p>
        <a href="mailto:your@email.com">your@email.com</a>
      </section>
    </div>
  );
}

export default App;