import React, { useEffect } from 'react';
import '../public/App.css';

function CST363() {
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
        <div className="CST363">
            <h1> CST 363  Introduction to Database Systems (SQL)</h1>
            <p>Course Objective:

                CST 363  Introduction to Database Systems (SQL)
                Course Objective:
                Database systems are used extensively by companies to store the customers’ personally identifiable
                information, sales tracking, product inventories, and by their servers connecting with applications.
                This course will provide the knowledge on how a database stores this content and how connections are
                made to databases. My company has a few database programmers and a reporting department who work with
                Crystal Reports, SSRS, and SQL to store automotive dealership sales Costco warehouse information.
                The sales reps and warehouse managers are then able to access this information.  Knowing how these
                interactions work from the backend will be invaluable to a computer scientist.

                A proposal and Marketing plan was created for prescription medications.
                <br/>
            </p>


        </div>
    );
}

export default CST363;
