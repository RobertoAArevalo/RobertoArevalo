import './App.css';
import React, { useState } from 'react'; // Fix import issue
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Remove duplicate import
import ClassesApp from './ClassesApp';
import JavaApp from './JavaApp';
import CourseWork from './CourseWork';
import Contact from './Contact';
import myImage from './RaPhotolargecopy.jpeg';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Roberto Arevalo</h1>
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                    <nav className={`nav-tabs ${isOpen ? 'open' : ''}`}>
                        <Link to="/" className="tab-link" onClick={closeMenu}>Home</Link>
                        <Link to="/ClassesApp" className="tab-link" onClick={closeMenu}>Classes App</Link>
                        <Link to="/JavaApp" className="tab-link" onClick={closeMenu}>Java App</Link>
                        <Link to="/CourseWork" className="tab-link" onClick={closeMenu}>Course Work</Link>
                        <Link to="/Contact" className="tab-link" onClick={closeMenu}>Contact</Link>
                    </nav>
                </header>

                {/* Routes for different pages */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/ClassesApp" element={<ClassesApp/>}/>
                    <Route path="/JavaApp" element={<JavaApp/>}/>
                    <Route path="/CourseWork" element={<CourseWork/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}

// Home component for the home page
const Home = () => (
    <main className="App-body">
        <section>
            <h2>About Me</h2>
            <p>
                California State University Monterey Bay <br/>
                B.S. Computer Science<br/>
                I am a graduate from California State University - Monterey Bay.<br/>
                I am eager to leverage my expertise and pursue new challenges in the technology industry.<br/>
                I enjoy developing websites and applications in my spare time.<br/>
            </p>
            <img src={myImage} alt="MyPic" style={{ width: '100%', height: 'auto' }} /> {/* Add image here */}
        </section>
    </main>
);

export default App;
