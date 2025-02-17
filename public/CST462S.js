import React, { useEffect } from 'react';
import '../public/App.css';

function CST462S() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST462S h1");
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
        <div className="CST363">
            <h1> CST 462S Race, Gender, Class in the Digital World</h1>
            <p>Course Objective:
                Developing an understanding of different races, genders and classes in the digital world would give us
                a better perspective and will help us create better applications. The course will use scenario based
                situations and allow for students to reflect on discussions and presentations on the topics relating to
                race, gender and class.  Becoming more aware of problems in the world, currently or historically, allows
                for a more open understanding of what people go through. This course is important to us, computer
                scientists, because with the world becoming more digital and smaller via the internet.
                Most applications need a user, most of the time that user is human therefore an understanding of
                different races, genders and classes in the digital world is crucial in developing applications.
                <br/>
            </p>


        </div>
    );
}

export default CST462S;
