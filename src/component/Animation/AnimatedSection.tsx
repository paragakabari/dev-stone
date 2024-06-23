import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedSection = ({ children, animationType, duration, delay, once }) => {
  // AOS.init();
  useEffect(() => {
    AOS.init({
      duration: duration,
      delay: delay,
      once: once, // Set 'once' option here
    });

    // Refresh AOS when props change
    AOS.refresh();
  }, [animationType, duration, delay, once]); // Add the relevant props here

  return (
    <div data-aos={animationType} data-aos-once={once} data-aos-duration={duration} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default AnimatedSection;
