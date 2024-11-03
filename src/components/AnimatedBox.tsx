// components/AnimatedBox.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 100 },  // Start state: opacity 0, y offset 50px
        {
          opacity: 1,
          delay: 1,  // End state: opacity 1
          y: 0,  // End state: back to initial y position
          duration: 1,  // Animation duration
          ease: 'power3.out',
          scrollTrigger: {
            trigger: boxRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',  // Play animation once when triggered
          },
          
        }
        
      );
    }
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'teal',
        margin: '50px auto',
      }}
    >
      <h2 style={{ color: 'white', textAlign: 'center' }}>Animated Box</h2>
    </div>
  );
};

export default AnimatedBox;
