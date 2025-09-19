// src/App.js - REPLACE THE ENTIRE FILE

import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import './assets/styles/main.css'; // We will use this file for all our styles

// Import your images
import greenJuice from './assets/images/green-juice.png';
import pineappleJuice from './assets/images/pineapple-juice.png';
import carrotJuice from './assets/images/carrot-juice.png';
import beetJuice from './assets/images/beet-juice.png';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// The CLEANED UP data array. No more "details".
const juices = [
    {
      name: 'Green Goodness',
      description: 'A refreshing blend of green vegetables to kickstart your day.',
      image: greenJuice,
      color: '#2dcd17bb',
    },
    {
      name: 'Pineapple Power',
      description: 'A sweet and tangy mix that transports you to a tropical paradise.',
      image: pineappleJuice,
      color: '#f1ef40ff',
    },
    {
      name: 'Carrot Kick',
      description: 'Get your daily dose of vitamins with this vibrant and earthy carrot blend.',
      image: carrotJuice,
      color: '#f26b16ff',
    },
    {
      name: 'Beet Boost',
      description: 'A powerful and detoxifying juice to energize your body and mind.',
      image: beetJuice,
      color: '#c90d10ff',
    }
];

function App() {
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

export default App;