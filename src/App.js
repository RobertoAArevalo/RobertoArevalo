import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Roberto Arevalo</h1>
        <nav className = "nav-tabs">
          <a href="#home" className ="tab-link">Home</a>
          <a href="#classesApp" className ="tab-link">Classes App</a>
          <a href="#JavaApp" className ="tab-link">Java App</a>
          <a href="#Coursework" className ="tab-link">Coursework</a>
          <a href="#contact" className ="tab-link">Contact</a>
        </nav>
        <a
          className="github_site"
          href="https://github.com/RobertoAArevalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
      {/*Main content*/}
      <main className="App-body">
        <section>
          <h2>About Me</h2>
        <p>
          California State University Monterey Bay <br />
          B.S. Computer Science<br />
          I am a graduate from California State University - Monterey Bay.<br />
          I am eager to leverage my expertise and pursue new challenges in the technology industry<br />
          I am pursuing a profession in software engineering as a full stack engineer or product manager.<br />
          I enjoy developing websites and application on my spare time.<br />
        </p>
        </section>
      </main>
    </div>
  );
}

export default App;
