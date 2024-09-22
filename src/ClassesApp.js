import React from 'react';
import './App.css';
import myImage from './CsumbClasses.png';
import myImage2 from './CsumbClasses2.png';

function ClassesApp() {
    console.log('ClassesApp component is rendered'); // Add this for debugging
    return (
        <div className="Classes">
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
                <img src={myImage} alt="Classes App" style={{ width: "100%", height: "auto" }}/>
            </a>

            <a href = "https://play.google.com/store/apps/details?id=com.csu.module8finalproject" target = "_blank"
            rel="noopener noreferrer">
                <img src={myImage2} alt="Classes App2" style={{ width: "100%", height: "auto" }}/>
            </a>

        </div>
    );
}

export default ClassesApp;
