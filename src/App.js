import React, { useLayoutEffect } from 'react'; // Note: useRef is removed
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother'; // We will use this now

import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import './assets/styles/main.css';

// Import your images
import greenJuice from './assets/images/green-juice.png';
import pineappleJuice from './assets/images/pineapple-juice.png';
import carrotJuice from './assets/images/carrot-juice.png';
import beetJuice from './assets/images/beet-juice.png';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const juices = [
    {
      name: 'Green Goodness',
      description: 'A refreshing blend of green vegetables to kickstart your day.',
      image: greenJuice,
      color: '#75d793ff',
      details: [
        'Boosts Immunity',
        'Rich in Antioxidants',
        'Cleanses & Detoxifies'
      ]
    },
    {
      name: 'Pineapple Power',
      description: 'A sweet and tangy mix that transports you to a tropical paradise.',
      image: pineappleJuice,
      color: '#f1ef40ff'
    },
    {
      name: 'Carrot Kick',
      description: 'Get your daily dose of vitamins with this vibrant and earthy carrot blend.',
      image: carrotJuice,
      color: '#e1691dff'
    },
    {
      name: 'Beet Boost',
      description: 'A powerful and detoxifying juice to energize your body and mind.',
      image: beetJuice,
      color: '#bb3537ff'
    }
];

function App() {
  // This is the part that was likely missing.
  // It initializes ScrollSmoother and ties it to our wrapper divs.
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    // Cleanup function to prevent memory leaks
    return () => smoother.kill();
  }, []);

  return (
    <div className="App">
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