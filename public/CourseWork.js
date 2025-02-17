import React, {useEffect} from 'react';
import '../public/App.css';

function CourseWork() {
    useEffect(() => {
        const h1Element = document.querySelector(".CourseWork h1");
        if (h1Element) {
            // Trigger the glowing blue effect with a delay
            setTimeout(() => {
                h1Element.style.color = "green";
                h1Element.style.textShadow = `
                    0 0 20px #006400,
                    0 0 40px #006400,
                    0 0 60px #006400
                `;
            }, 100); // Delay to make transition visible
        }
    }, []);

    return (
        <div className = "CourseWork">
            <h1>Course Work</h1>
            <p>Details about course work.</p>
        </div>
    );
}

export default CourseWork;
