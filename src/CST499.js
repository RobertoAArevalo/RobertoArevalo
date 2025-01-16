import React, { useEffect } from 'react';
import './App.css';


function CST499() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST499 h1");
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
        <div className="CST499">
            <h1>CST 499 Computer Science Capstone</h1>
            <p>Course Objective:
                The Computer Science Capstone course is definitely important since we are in a Computer Science Online
                Program which helps prepare us on what are some good ways to get a career with a company or corporation.
                This course is designed to give us students some experience with teamwork and real-life experiences when
                us students get a job. The course also educates us by giving us a task and then fulfilling that task and
                presenting it to our supervisors as known as the faculty. In my opinion I believe this course is a good
                way scholars can get hands-on skills and also be able to collaborate with peers like in a real job where
                you work together with a coworker to work on a big project that involves more than one person.  <br/>

            </p>


        </div>
    );
}

export default CST499;
