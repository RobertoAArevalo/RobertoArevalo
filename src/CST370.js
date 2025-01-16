import React, { useEffect } from 'react';
import './App.css';

function CST370() {
    useEffect(() => {
        const h1Element = document.querySelector(".CST370 h1");
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
        <div className="CST370">
            <h1> CST 370 Design and Analysis of Algorithms</h1>
            <p>Course Objective:
                This course instructs on algorithms such as brute force, which I have used before to attempt to solve
                my lost passwords and other algorithms which appear to locate elements by sorting and/or elimination.
                Also taught, are data structures such as hash, heap, tree, and graph.  These data structures are the
                foundation on which social media apps, google maps, and search engines are built.  Our company uses
                Okta, which is an identity management company which receives brute force attacks.  A brute force attack
                will attempt to solve a problem by trying every iteration of a possible solution such as username and
                passwords.  It will be invaluable to learn how these, and other problem-solving algorithms are created.
                As a result, the CS student will learn how to protect against such attacks.  A computer scientist can
                also use these algorithms in automation scripts to solve repetitive tasks.

                This is one of the projects that was done in this algorithms class.
                <br/>
            </p>


        </div>
    );
}

export default CST370;
