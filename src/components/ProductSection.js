import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductSection = ({ juice }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleTopRef = useRef(null);
  const titleBottomRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          // --- Green Goodness Animation (Pinning) ---
          if (juice.name === 'Green Goodness') {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: true,
              }
            });
            tl.from(imageRef.current, { xPercent: -100, opacity: 0, ease: 'power2.inOut' })
              .from([titleTopRef.current, titleBottomRef.current], { opacity: 0, y: 50, stagger: 0.1 }, "<")
              .from(textRef.current.querySelector('.product-description'), { opacity: 0, y: 20 })
              .from(buttonRef.current, { opacity: 0, y: 20 }, "-=0.25");
          }
          // --- Pineapple Power Animation (Bouncy) ---
          else if (juice.name === 'Pineapple Power') {
            const tl = gsap.timeline({
              scrollTrigger: { trigger: sectionRef.current, start: 'top center' }
            });
            tl.from(imageRef.current, { scale: 0.5, opacity: 0, ease: 'elastic.out(1, 0.75)', duration: 1.5 })
              .from([titleTopRef.current, titleBottomRef.current], { opacity: 0, y: 50, stagger: 0.1 }, "-=1")
              .from(textRef.current.querySelector('.product-description'), { opacity: 0, y: 20 })
              .from(buttonRef.current, { opacity: 0, y: 20 }, "-=0.25");
          }
          // --- Fallback Animation (Slide Up) ---
          else {
            const tl = gsap.timeline({
              scrollTrigger: { trigger: sectionRef.current, start: 'top center' }
            });
            tl.from(imageRef.current, { y: 100, opacity: 0, duration: 1 })
              .from([titleTopRef.current, titleBottomRef.current], { opacity: 0, y: 50, stagger: 0.1 }, "-=0.5")
              .from(textRef.current.querySelector('.product-description'), { opacity: 0, y: 20 })
              .from(buttonRef.current, { opacity: 0, y: 20 }, "-=0.25");
          }
        },
        "(max-width: 767px)": function() {
          // Mobile animation remains simple and clean
          const tl = gsap.timeline({
            scrollTrigger: { trigger: sectionRef.current, start: 'top center+=100' }
          });
          tl.from([imageRef.current, textRef.current], {
              opacity: 0, y: 50, duration: 1, ease: 'power3.out', stagger: 0.2
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [juice.name]);

  // Keep the mouse-move effect
  useEffect(() => {
    // ... (This entire useEffect for mouse-move stays exactly the same)
    const section = sectionRef.current;
    if (!section) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = section.getBoundingClientRect();
      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;
      gsap.to(imageRef.current, {
        x: x * 0.05, y: y * 0.05, rotationY: x * 0.03, rotationX: -y * 0.03, ease: 'power2.out', duration: 1
      });
    };
    section.addEventListener('mousemove', handleMouseMove);
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="product-section" style={{ backgroundColor: juice.color }} ref={sectionRef}>
      <div className="product-image" ref={imageRef} data-speed="0.9">
        <img src={juice.image} alt={juice.name} />
      </div>

      <div className="product-text-content" ref={textRef} data-speed="1.05">
        <h2 className="product-title">
          <span ref={titleTopRef}>{juice.name.split(' ')[0] || ''}</span>
          <span ref={titleBottomRef}>{juice.name.split(' ')[1] || ''}</span>
        </h2>
        <p className="product-description">{juice.description}</p>
        <button className="buy-button" ref={buttonRef}>
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default ProductSection;