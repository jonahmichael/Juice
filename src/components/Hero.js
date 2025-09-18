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

  return (
    <section className="hero">
      <h1 ref={h1Ref}>Experience Freshness</h1>
      <p ref={pRef}>Our cold-pressed juices are crafted with the finest ingredients to bring you a vibrant taste of nature in every sip.</p>
    </section>
  );
};

export default Hero;