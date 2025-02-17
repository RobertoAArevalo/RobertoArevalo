import React, { useEffect } from 'react';
import './App.css';


function CST383() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST383 h1");
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
        <div className="CST383">
            <h1>CST 383  Introduction to Data Science</h1>
            <p>Course Objective:
                The course covers internet architecture, responsive design, RESTful web services, and web APIs.
                Internet architecture is the design and understanding of how the internet works. RESTful web services
                are meant to be lightweight, fast and simple. REST stands for Representational State Transfers that
                contain certain principles. The first being resource identification through URI, uniform interface,
                self- descriptive messages and stateful interactions through hyperlinks. Web APIs help the development
                of http services. All of these things would be the legs of the table that hold up internet applications.
                This understanding of internet programming is important to developers because the internet is becoming
                exceedingly prevalent. The need for applications to run through the internet is constantly growing.
                The following is a pdf of a website that was developed my team and myself during this class. I focused
                on connecting the API's as well as designing some of the pages.<br/>

            </p>


        </div>
    );
}

export default CST383;
