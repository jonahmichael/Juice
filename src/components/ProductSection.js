import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ProductSection = ({ juice }) => { // We'll add index later
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  // Create refs for the new detail points
  const detailsRef = useRef([]);

  // ... (imports and component definition)

  // ... (imports and component definition)

  useEffect(() => {
    // 1. Create a GSAP Context for our animations
    const ctx = gsap.context(() => {

      // All our GSAP code will go inside here...

      // Animation for Green Juice
      if (juice.name === 'Green Goodness') {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=1500',
            scrub: 1,
            pin: true,
          }
        });

        tl.from(imageRef.current, { xPercent: -100, opacity: 0, ease: 'power2.inOut' })
          .from(textRef.current, { xPercent: 100, opacity: 0, ease: 'power2.inOut' }, "<")
          .from(detailsRef.current, {
            y: 50,
            opacity: 0,
            stagger: 0.3,
            ease: 'power2.out'
          });

      }
      // Animation for Pineapple Juice
      else if (juice.name === 'Pineapple Power') {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          }
        });

        tl.from([imageRef.current, textRef.current], {
            opacity: 0,
            scale: 0.5,
            duration: 1.2,
            ease: 'elastic.out(1, 0.75)',
            stagger: 0.2
        });
        
      }
      // Fallback animation for Carrot and Beet
      else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          }
        });
        tl.from([imageRef.current, textRef.current], {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
      }

    }, sectionRef); // <-- 2. Scope the context to our component's main element

    // 3. The Cleanup Function
    return () => ctx.revert(); // <-- This is the magic line!

  }, [juice.name]); // Dependency array remains the same

  // ... (the return statement with your JSX)

  // ... (the return statement with your JSX) // Re-run the effect if the juice name changes

  return (
    <section className="product-section" style={{ backgroundColor: juice.color }} ref={sectionRef}>
      <div className="product-info" ref={textRef}>
        <h2>{juice.name}</h2>
        <p>{juice.description}</p>
        {/* Render the details if they exist */}
        {juice.details && (
          <ul className="product-details">
            {juice.details.map((detail, i) => (
              <li key={i} ref={el => detailsRef.current[i] = el}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="product-image" ref={imageRef}>
        <img src={juice.image} alt={juice.name} />
      </div>
    </section>
  );
};

export default ProductSection;