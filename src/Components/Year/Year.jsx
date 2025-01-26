'use client';

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from 'lenis';
import Pic1 from '../../assets/Black_History_Month_Poster.png';
import Pic2 from '../../assets/Build_Your_Own_Avatar.png';
import Pic3 from '../../assets/DEIJB_Statement.png';
import Pic4 from '../../assets/Coming_Out_Day.png';
import './Year.css';

export default function Year() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative">
      <Section scrollYProgress={scrollYProgress} pic={Pic1} alt="Black History Month Poster" />
      <Section scrollYProgress={scrollYProgress} pic={Pic2} alt="Build Your Own Avatar" />
      <Section scrollYProgress={scrollYProgress} pic={Pic3} alt="DEIJB Statement" />
      <Section scrollYProgress={scrollYProgress} pic={Pic4} alt="Coming Out Day" />
    </main>
  );
}

const Section = ({ scrollYProgress, pic, alt }) => {
  // Control the position for each section as you scroll
  const yPosition = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["0%", "-100%", "-200%", "-300%", "-400%"]);

  return (
    <motion.div
      style={{ y: yPosition }} // Moves the image vertically based on the scroll progress
      className="sticky top-0 h-screen"
    >
      <div className="img-container">
        <img
          src={pic}
          alt={alt}
        />
      </div>
    </motion.div>
  );
};
