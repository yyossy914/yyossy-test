"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import './Projects.css';

// Import the images
import project_1 from '../../assets/Black_History_Month_Poster.png';
import project_2 from '../../assets/Build_Your_Own_Avatar.png';
import project_3 from '../../assets/DEIJB_Statement.png';
import project_4 from '../../assets/Coming_Out_Day.png';

function Item({ index, image }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center center", "end start"],
    });

    // Smooth progress animation
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 20,
        stiffness: 100,
    });

    // Display years from 2025 to 2020
    const year = 2024 - index;

    return (
        <section className="item-container">
            <div ref={ref} className="item">
                <figure className="progress-icon-container">
                    <svg
                        className="progress-icon"
                        width="75"
                        height="75"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            className="progress-icon-bg"
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="progress-icon-indicator"
                            style={{ pathLength: smoothProgress }}
                        />
                    </svg>
                </figure>
                {/* Display the year */}
                <p className="item-label">{year}</p>
                {/* Render the image passed as a prop */}
                <img src={image} alt={`Project ${year}`} className="item-image" />
            </div>
        </section>
    );
}

export default function Programs() {
    // An array of the images
    const images = [project_1, project_2, project_3, project_4];

    return (
        <div className="programs">
            {Array.from({ length: 4 }).map((_, index) => (
                <Item key={index} index={index} image={images[index % images.length]} />
            ))}
        </div>
    );
}
