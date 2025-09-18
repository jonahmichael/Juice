import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline for a sequence of animations
    const tl = gsap.timeline();

    // Animate the h1 and p tags
    // .from() animates FROM the specified values to their current CSS values
    tl.from(h1Ref.current, {
      duration: 1,
      y: 50, // Start 50px below its final position
      opacity: 0,
      ease: 'power3.out',
    }).from(pRef.current, {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power3.out',
    }, "-=0.8"); // The "-=0.8" makes this animation start 0.8s before the previous one ends

  }, []); // The empty dependency array [] ensures this runs only once on mount

  return (
    <section className="hero" ref={heroRef}>
      <h1 ref={h1Ref}>Experience Freshness in Every Sip</h1>
      <p ref={pRef}>Scroll down to explore our vibrant flavors.</p>
    </section>
  );
};

export default Hero;