import React from 'react';
import './App.css';
import myImage from './JavaApp.png';
import myImage2 from './JavaApp2.png';

function JavaApp() {
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
            <img src={myImage} alt="Java App" style={{ width: "100%", height: "auto" }}/>
            </a>

            <a href = "https://play.google.com/store/apps/details?id=com.csu.module8finalproject" target = "_blank"
            rel="noopener noreferrer">
                <img src={myImage2} alt="Java App2" style={{ width: "100%", height: "auto" }}/>
            </a>

        </div>
    );
}

export default JavaApp;
