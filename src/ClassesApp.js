import React, { useEffect } from 'react';
import './App.css';
import myImage from './CsumbClasses.png';
import myImage2 from './CsumbClasses2.png';

function ClassesApp() {
    useEffect(() => {
        const h1Element = document.querySelector(".ClassesApp h1");
        if (h1Element) {
            // Trigger the glowing blue effect with a delay
            setTimeout(() => {
                h1Element.style.color = "blue";
                h1Element.style.textShadow = `
                    0 0 20px #00f,
                    0 0 40px #00f,
                    0 0 60px #00f
                `;
            }, 100); // Delay to make transition visible
        }
    }, []);

    return (
        <div className="ClassesApp">
            <h1>Classes App</h1>
            <p>This app has information regarding the CSUMB CS Program <br/>
                including the necessary classes that have to be passed <br/>
                to obtain the degree. It focuses on the upper level classes.<br/>
                I published the application on the Android Play Store after graduating <br/>
                Publishing the application allowed me go through the process and learn <br/>
                how to publish an application. <br/>

            </p>
            <a href = "https://play.google.com/store/apps/details?id=com.csu.module8finalproject" target = "_blank"
            rel="noopener noreferrer">
                <img src={myImage} alt="Classes App" style={{ width: "100%", height: "auto",marginBottom: "30px" }}/>
            </a>

            <p>
                Below is an example of the code used to create the application.
                <img src={myImage2} alt="Classes App2" style={{ width: "100%", height: "auto", marginTop: "30px" }}/>
            </p>

        </div>
    );
}

export default ClassesApp;
