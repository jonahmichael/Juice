import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // We are now animating TO a visible state, which is more reliable.
    gsap.to([h1Ref.current, pRef.current], {
      duration: 1.5,
      y: 0,           // Animate TO y-position 0 (from 50px)
      opacity: 1,     // Animate TO full opacity (from 0)
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.2      // A small delay to ensure everything is loaded
    });
  }, []); // The empty array ensures this effect runs only once

  // src/components/Hero.js - Add the arrow inside the section

// ... (imports and useEffect)

  return (
    <section className="hero">
      <h1 ref={h1Ref}>Experience Freshness</h1>
      <p ref={pRef}>Our cold-pressed juices are crafted with the finest ingredients to bring you a vibrant taste of nature in every sip.</p>
      
      {/* THE NEW ARROW ELEMENT */}
      <div className="scroll-arrow" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;