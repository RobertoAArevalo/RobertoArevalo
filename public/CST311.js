import React, { useEffect } from 'react';
import '../public/App.css';

function CST311() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST311 h1");
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
        <div className="CST311">
            <h1>CST 311 Intro to Computer Networks</h1>
            <p>Course Objective:
                CST 311 - Intro to Computer Networks is taken during the 2nd semester on the Online Computer Science
                Program. Intro to Computer Networks offers students the opportunity to learn about networking. These
                different networks include Data Comm Technology Fundamentals, Wide Area Network, Local Area Network,
                Telecomm, network security and performance, and industry trends that are barely coming to fruition.
                This class is a foundation for higher level classes and certificate programs centered around network
                studies. CST 311 also allows students to learn by conducting laboratories geared towards networking.
                These labs also incorporate Cisco CCNA components. This class has a Prerequisite(s)/Corequisite(s) of
                CST 238 - Introduction to Data Structures and Math 130 - Precalculus. This class is an ideal class for
                students wanting to learn about computer networking and Telecomm technology. CST 311 will be an asset
                for studies wanting to pursue a career in this specific sector of the Technology Industry. This class
                will also give students the opportunity to learn about this field which could be a promising career.
                This class will bring a lot of value to all the students taking it.

                The following was the deliverables of one of the last projects for this class.
                <br/>
            </p>


        </div>
    );
}

export default CST311;
