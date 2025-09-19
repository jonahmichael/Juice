// src/components/MainPage.js

import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import Hero from './Hero';
import ProductSection from './ProductSection';
import '../assets/styles/main.css';

// Import images
import greenJuice from '../assets/images/green-juice.png';
import pineappleJuice from '../assets/images/pineapple-juice.png';
import carrotJuice from '../assets/images/carrot-juice.png';
import beetJuice from '../assets/images/beet-juice.png';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const juices = [
    { name: 'Green Goodness', description: 'A refreshing blend of green vegetables...', image: greenJuice, color: '#2dcd17bb' },
    { name: 'Pineapple Power', description: 'A sweet and tangy mix that transports you...', image: pineappleJuice, color: '#f1ef40ff' },
    { name: 'Carrot Kick', description: 'Get your daily dose of vitamins with this vibrant...', image: carrotJuice, color: '#f26b16ff' },
    { name: 'Beet Boost', description: 'A powerful and detoxifying juice to energize...', image: beetJuice, color: '#c90d10ff' }
];

const MainPage = () => {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });
    return () => smoother.kill();
  }, []);

  return (
    <div className="App">
      <div className="watermark">Jonah Michael</div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          {juices.map((juice, index) => (
            <ProductSection key={index} juice={juice} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;