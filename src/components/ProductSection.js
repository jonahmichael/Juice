import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductSection = ({ juice }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const detailsRef = useRef([]);

  // Effect for all scroll-triggered animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop Animations (screens wider than 768px)
        "(min-width: 768px)": function() {
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
              .from(detailsRef.current, { y: 50, opacity: 0, stagger: 0.3, ease: 'power2.out' });
          }
          else if (juice.name === 'Pineapple Power') {
            const tl = gsap.timeline({
              scrollTrigger: { trigger: sectionRef.current, start: 'top center+=100' }
            });
            tl.from([imageRef.current, textRef.current], {
                opacity: 0, scale: 0.5, duration: 1.2, ease: 'elastic.out(1, 0.75)', stagger: 0.2
            });
          }
          else {
            const tl = gsap.timeline({
              scrollTrigger: { trigger: sectionRef.current, start: 'top center+=100' }
            });
            tl.from([imageRef.current, textRef.current], {
                y: 100, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out'
            });
          }
        },
        // Mobile Animations (screens 767px wide or less)
        "(max-width: 767px)": function() {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center+=100',
            }
          });
          tl.from([imageRef.current, textRef.current], {
              opacity: 0, y: 50, duration: 1, ease: 'power3.out', stagger: 0.2
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [juice.name]);


  // Effect for the subtle mouse-move interaction
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = section.getBoundingClientRect();
      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;

      gsap.to(imageRef.current, {
        x: x * 0.05,
        y: y * 0.05,
        rotationY: x * 0.03,
        rotationX: -y * 0.03,
        ease: 'power2.out',
        duration: 1
      });
    };

    section.addEventListener('mousemove', handleMouseMove);

    // Cleanup to prevent memory leaks
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once


  return (
    <section className="product-section" style={{ backgroundColor: juice.color }} ref={sectionRef}>
      <div className="product-info" ref={textRef} data-speed="0.9">
        <h2>{juice.name}</h2>
        <p>{juice.description}</p>
        {juice.details && (
          <ul className="product-details">
            {juice.details.map((detail, i) => (
              <li key={i} ref={el => detailsRef.current[i] = el}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="product-image" ref={imageRef} data-speed="1.1">
        <img src={juice.image} alt={juice.name} />
      </div>
    </section>
  );
};

export default ProductSection;