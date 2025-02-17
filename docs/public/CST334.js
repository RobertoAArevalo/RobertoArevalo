import React, { useEffect } from 'react';
import './App.css';

function CST334() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST334 h1");
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
        <div className="CST334">
            <h1>CST 334 Operating Systems</h1>
            <p>Course Objective:
                CST 334 - Operating Systems is taken during the second semester in the Online Computer Science Program.
                Operating Systems covers how to use and design operating systems that are modern with an emphasis on
                Linux operating systems. Linux command line, writing shell scripts, and building programs with GNU
                utilities. GNU is software that can be used as an operating system or with an operating system.
                The GNU utilities that will be covered will be sed, awk, and make. All of these are on the “use” side.
                Students will be learning about the “design” side as well. This will include topics such as managing
                memory, management process, concurrency, and file systems. Coverage of how all of these “design”
                side topics apply to cloud computing and virtualization will be done during this class.
                Prerequisites/Corequisites for this class include CST 238 - Introduction to Data Structures and
                Math 130 - Precalculus. This is an important and useful class in the curriculum because it provides
                knowledge of different operating systems on both the “use” side and the “design” side. This knowledge
                will be invaluable when working in the technology industry. Having experience with virtualization and
                cloud computing can also be advantageous when applying to companies that offer such services.

                This was one of the assignments from the Operating systems class.
                <br/>
            </p>


        </div>
    );
}

export default CST334;
