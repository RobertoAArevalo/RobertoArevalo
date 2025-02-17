import './App.css';
import React, { useState, useEffect } from 'react'; // Fix import issue
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Remove duplicate import
import ClassesApp from './ClassesApp';
import JavaApp from '../src/JavaApp';
import CourseWork from '../src/CourseWork';
import Contact from './Contact';
import myImage from '../src/RaPhotolargecopy.jpeg';
import CST300 from '../src/CST300';
import CST338 from '../src/CST338';
import CST363 from '../src/CST363';
import CST334 from '../src/CST334';
import CST311 from '../src/CST311';
import CST336 from '../src/CST336';
import CST462S from '../src/CST462S';
import CST370 from '../src/CST370';
import CST383 from '../src/CST383';
import CST438 from '../src/CST438';
import CST489 from '../src/CST489';
import CST499 from '../src/CST499';




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
                    {/*<h1 className="header-title">Roberto Arevalo</h1>*/}
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                    <nav className={`nav-tabs ${isOpen ? 'open' : ''}`}>
                        <Link to="/" className="tab-link" onClick={closeMenu}>Home</Link>
                        <Link to="/ClassesApp" className="tab-link" onClick={closeMenu}>Classes App</Link>
                        <Link to="/JavaApp" className="tab-link" onClick={closeMenu}>Java App</Link>
                        <div className="dropdown">
                            <Link to="/CourseWork" className="tab-link" onClick={closeMenu}>Course Work</Link>
                            <div className="dropdown-content">
                                <Link to="/CourseWork/CST300" className="tab-link" onClick={closeMenu}>CST 300</Link>
                                <Link to="/CourseWork/CST338" className="tab-link" onClick={closeMenu}>CST 338</Link>
                                <Link to="/CourseWork/CST363" className="tab-link" onClick={closeMenu}>CST 363</Link>
                                <Link to="/CourseWork/CST334" className="tab-link" onClick={closeMenu}>CST 334</Link>
                                <Link to="/CourseWork/CST311" className="tab-link" onClick={closeMenu}>CST 311</Link>
                                <Link to="/CourseWork/CST336" className="tab-link" onClick={closeMenu}>CST 336</Link>
                                <Link to="/CourseWork/CST462S" className="tab-link" onClick={closeMenu}>CST 462S</Link>
                                <Link to="/CourseWork/CST370" className="tab-link" onClick={closeMenu}>CST 370</Link>
                                <Link to="/CourseWork/CST383" className="tab-link" onClick={closeMenu}>CST 383</Link>
                                <Link to="/CourseWork/CST438" className="tab-link" onClick={closeMenu}>CST 438</Link>
                                <Link to="/CourseWork/CST489" className="tab-link" onClick={closeMenu}>CST 489</Link>
                                <Link to="/CourseWork/CST499" className="tab-link" onClick={closeMenu}>CST 499</Link>


                            </div>
                        </div>
                        <Link to="/Contact" className="tab-link" onClick={closeMenu}>Contact</Link>
                    </nav>
                </header>

                {/* Routes for different pages */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/ClassesApp" element={<ClassesApp/>}/>
                    <Route path="/JavaApp" element={<JavaApp/>}/>
                    <Route path="/CourseWork" element={<CourseWork/>}/>
                    <Route path="/CourseWork/CST300" element={<CST300/>}/>
                    <Route path="/CourseWork/CST338" element={<CST338/>}/>
                    <Route path="/CourseWork/CST363" element={<CST363/>}/>
                    <Route path="/CourseWork/CST334" element={<CST334/>}/>
                    <Route path="/CourseWork/CST311" element={<CST311/>}/>
                    <Route path="/CourseWork/CST336" element={<CST336/>}/>
                    <Route path="/CourseWork/CST462S" element={<CST462S/>}/>
                    <Route path="/CourseWork/CST370" element={<CST370/>}/>
                    <Route path="/CourseWork/CST383" element={<CST383/>}/>
                    <Route path="/CourseWork/CST438" element={<CST438/>}/>
                    <Route path="/CourseWork/CST489" element={<CST489/>}/>
                    <Route path="/CourseWork/CST499" element={<CST499/>}/>


                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}

// Home component for the home page
const Home = () => {
    useEffect(() => {
        const h1Element = document.querySelector(".App-body h1");
        if (h1Element) {
            // Trigger the glowing blue effect
            setTimeout(() => {
                h1Element.style.color = "gradient";
                h1Element.style.textShadow = `
                    0 0 20px #003300,
                    0 0 40px #3399ff,
                    0 0 60px #3399ff
                `;
            }, 100); // Delay to make transition visible
        }
    }, []);

    return (
        <main className="App-body">
            <section style ={{ padding: "20px" }}>
                <h1 className="about-title">About Me</h1>
                <p>
                    California State University Monterey Bay <br/>
                    B.S. Computer Science with an emphasis in Software Engineering <br/>
                    I am a graduate from California State University - Monterey Bay. <br/>
                    I am eager to leverage my expertise and pursue new challenges in the technology industry. <br/>
                    I enjoy developing websites and applications in my spare time.
                </p>
            </section>
                    <div style = {{margin: "0", padding: "0"}}>
                        <img src={myImage} alt="MyPic" style={{width: '100%', height: 'auto'}}/>
                    </div>

                <section style ={{ padding: "20px" }}>
                    <p>
                Education Continued: <br/>
                • Associate of Science for Transfer in Computer Science; San Diego Miramar College <br/>
                • Master of Education in Inspired Teaching and Learning
                - with an Emphasis in English Language Learner Education; National University <br/>
                • Bachelor of Science - Nursing; San Diego State University <br/>
                • Associate of Science - Nursing; Imperial Valley College <br/>
                • Emergency Medical Technician - Basic (EMT-B); San Diego Miramar College <br/>
                • Bachelor of Science - Biochemistry/Chemistry; UC San Diego <br/>
                    </p>
                </section>

        </main>
    );
};

export default App;
