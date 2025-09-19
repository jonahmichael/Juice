// src/components/ProductSection.js

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'; // Correctly imported

const ProductSection = ({ juice }) => {
  const sectionRef = useRef(null);

  // This animation logic is correct and does not need to be changed.
  useEffect(() => {
    const image = sectionRef.current.querySelector('.product-image');
    const titleSpans = gsap.utils.toArray(sectionRef.current.querySelectorAll('.product-title span'));
    const description = sectionRef.current.querySelector('.product-description');
    const button = sectionRef.current.querySelector('.buy-button');
    const ctx = gsap.context(() => {
      gsap.set([image, ...titleSpans, description, button], { opacity: 0 });
      gsap.set(image, { xPercent: -100 });
      gsap.set([...titleSpans, description, button], { y: 50 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', toggleActions: 'play none none none' } });
      tl.to(image, { opacity: 1, xPercent: 0, duration: 1.2, ease: 'power3.out' })
        .to(titleSpans, { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }, "-=0.8")
        .to(description, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.6")
        .to(button, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.6");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="product-section" style={{ backgroundColor: juice.color }} ref={sectionRef}>
      <div className="product-image">
        <img src={juice.image} alt={juice.name} />
      </div>
      <div className="product-text-content">
        <div className="title-wrapper">
          <h2 className="product-title">
            <span>{juice.name.split(' ')[0] || ''}</span>
            <span>{juice.name.split(' ')[1] || ''}</span>
          </h2>
        </div>
        <p className="product-description">{juice.description}</p>

        {/* THIS IS THE KEY CHANGE: We now use juice.id for a reliable link */}
        <Link to={`/product/${juice.id}`} className="buy-button">
          Buy Now
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;