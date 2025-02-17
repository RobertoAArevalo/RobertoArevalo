import React, { useEffect } from 'react';
import '../public/App.css';


function CST300() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST300 h1");
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
        <div className="CST300">
            <h1>CST 300 Major Pro Seminar</h1>
            <p>Course Objective:
                CST 300 - Major ProSeminar is a class is a writing class
                that allow students to able to practice their professional writing. Students are able to articulate
                their thoughts, ambitions, and professional goals. This class allows for students to integrate computer
                science and communication skills. Students are also able to develop a plan for their learning goals.
                Presentation, writing, research and critical-thinking skills are covered in this information technology
                and communication design class. Students are able to predict, analyze, and articulate many trends that
                are happening in academia and industry. The ability to communicate effectively in the technology
                industry is invaluable. Team building skills and team working skills are also able to practiced while
                completing this course. <br/>

            </p>


        </div>
    );
}

export default CST300;
