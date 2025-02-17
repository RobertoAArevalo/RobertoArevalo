import React, {useEffect} from 'react';
import './App.css';
import myImage from './JavaApp.png';
import myImage2 from './JavaApp2.png';

function JavaApp() {
    useEffect(() => {
        const h1Element = document.querySelector(".JavaApp h1");
        if (h1Element) {
            // Delay the color and shadow change
            setTimeout(() => {
                h1Element.style.color = "gold"; // Change text color to gold
                h1Element.style.textShadow = `
                    0 0 20px #ffd700,
                    0 0 40px #ffd700,
                    0 0 60px #ffd700
                `; // Update text shadow for glow
            }, 100); // Delay for 100ms for smoother transition
        }
    }, []);

    return (
        <div className="JavaApp">
            <h1>Java App</h1>
            <p>
                My Java application was initially built as an assignment for my degree. <br/>
                After completing my degree, I published this application onto the Android Play Store. <br/>
                This application has different pages that explains different concepts of Java programming. <br/>
                It also has a built in Google search Feature. <br/>
                It was fun to create an application and learn the specifics to publish an application. <br/>

            </p>
            <a href = "https://play.google.com/store/apps/details?id=com.csu.module8finalproject" target = "_blank"
            rel="noopener noreferrer">
            <img src={myImage} alt="Java App" style={{ width: "100%", height: "auto", marginBottom: "30px" }}/>
            </a>

            <p>
                Below is an example of the code used to create the application.
                <img src={myImage2} alt="Java App2" style={{ width: "100%", height: "auto", marginTop: "30px" }}/>
            </p>

        </div>
    );
}

export default JavaApp;
