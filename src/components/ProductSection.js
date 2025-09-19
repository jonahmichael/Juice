import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ProductSection = ({ juice }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Select all the animatable child elements
    const image = sectionRef.current.querySelector('.product-image');
    const titleSpans = gsap.utils.toArray(sectionRef.current.querySelectorAll('.product-title span'));
    const description = sectionRef.current.querySelector('.product-description');
    const button = sectionRef.current.querySelector('.buy-button');

    const ctx = gsap.context(() => {
      // The timeline will now animate TO the final state
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%', // Start a bit earlier
          toggleActions: 'play none none none', // Play once on entry
        }
      });

      // Animate TO the final, visible state from the initial CSS state
      tl.to(image, {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'expo.out'
      })
      .to(titleSpans, {
        y: 0,
        skewY: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out'
      }, "-=1")
      .to([description, button], {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out'
      }, "-=0.8");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="product-section" style={{ backgroundColor: juice.color }} ref={sectionRef}>
      <div className="product-image anim-child">
        <img src={juice.image} alt={juice.name} />
      </div>

      <div className="product-text-content">
        <div className="title-wrapper">
          <h2 className="product-title">
            <span className="anim-child">{juice.name.split(' ')[0] || ''}</span>
            <span className="anim-child">{juice.name.split(' ')[1] || ''}</span>
          </h2>
        </div>
        <p className="product-description anim-child">{juice.description}</p>
        <button className="buy-button anim-child">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default ProductSection;