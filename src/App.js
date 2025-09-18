// AFTER
import React from 'react';
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import './assets/styles/main.css';
// Import your images
import greenJuice from './assets/images/green-juice.png';
import pineappleJuice from './assets/images/pineapple-juice.png';
import carrotJuice from './assets/images/carrot-juice.png';
import beetJuice from './assets/images/beet-juice.png';

gsap.registerPlugin(ScrollTrigger); // Register the plugin


const juices = [
  {
    name: 'Green Goodness',
    description: 'A refreshing blend of green vegetables to kickstart your day.',
    image: greenJuice,
    color: '#52b788',
    // Add new bullet points
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
    color: '#d8f3dc'
  },
  {
    name: 'Carrot Kick',
    description: 'Get your daily dose of vitamins with this vibrant and earthy carrot blend.',
    image: carrotJuice,
    color: '#ff8c42'
  },
  {
    name: 'Beet Boost',
    description: 'A powerful and detoxifying juice to energize your body and mind.',
    image: beetJuice,
    color: '#e5383b'
  }
];

function App() {
  return (
    <div className="App">
      <Hero />
      {juices.map((juice, index) => (
        <ProductSection key={index} juice={juice} />
      ))}
    </div>
  );
}

export default App;