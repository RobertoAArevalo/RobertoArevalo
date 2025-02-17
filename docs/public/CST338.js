import React, { useEffect } from 'react';
import './App.css';

function CST338() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST338 h1");
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
        <div className="CST338">
            <h1>CST 338 Software Design (Java)</h1>
            <p>Course Objective:

                CST 338 Software Design (Java)
                Course Objective:CST 338 - Software Design is taken during the first semester of the Online Computer
                Science Program. This class aids students with learning the fundamental concepts in order to create
                software on a large scale. It also focuses on techniques related to object-oriented programming.
                It covers the programming language Java, the life cycle of software and development processes.
                CST 338 also covers analysis requirements and GUI or graphical user interface development.
                This class will be great for a review of Java programming and as an introduction to software.
                Object-oriented programming is an important concept to study when wanting to learn how to properly
                program. Java programming language is still widely used in the technology industry. A prerequisite for
                this class is CST 238 - Introduction to Data Structures. Experience in software design will be
                invaluable when applying to jobs in the technology industry, and software design is ubiquitous
                in the technology industry.

                I created an Android application for this class which allowed the user to review what the CSUMB program
                classes were for the B.S. Online Computer Science program.  It also contains information
                about each class.
                <br/>
            </p>


        </div>
    );
}

export default CST338;
