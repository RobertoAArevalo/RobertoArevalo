import React, { useEffect } from 'react';
import './App.css';


function CST489() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST489 h1");
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
        <div className="CST489">
            <h1>CST 489 Capstone Project Planning</h1>
            <p>Course Objective:
                The course covers  the start of creating a detailed proposal for a professional level project which
                will need approval of the student's capstone advisor. Students are able to practice collaborating,
                planning, and writing skills that they will use in the technology industry. <br/>

            </p>


        </div>
    );
}

export default CST489;
