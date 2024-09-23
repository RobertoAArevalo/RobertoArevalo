import React, {useEffect} from 'react';
import './App.css';

function Contact() {
    useEffect(() => {
        const h1Element = document.querySelector(".contact h1");
        if (h1Element) {
            // Trigger the glowing blue effect with a delay
            setTimeout(() => {
                h1Element.style.color = "white";
                h1Element.style.textShadow = `
                    0 0 20px #FFFFFF
                `;
            }, 100); // Delay to make transition visible
        }
    }, []);
    return (
        <div className="contact">
            <h1>Contact Information</h1>
            <iframe
                title="Google Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdxHbJSFDTN4Z4yWQVtmzGMXuvGb84S9WilZWdScCxn8SP4IA/viewform?embedded=true"
                width="640"
                height="813"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{ backgroundColor: 'white' }}  // Set background color to white
            >
                Loading…
            </iframe>
        </div>
    );
}

export default Contact;
