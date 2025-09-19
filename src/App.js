// src/App.js

import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ProductDetailPage from './components/ProductDetailPage';
import './assets/styles/main.css';

// Import the single source of truth for our data
import { juices } from './data/juices';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HomePage = () => {
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
          {juices.map((juice) => (
            <ProductSection key={juice.id} juice={juice} />
          ))}
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Use the URL-friendly ID for the route */}
        <Route path="/product/:productId" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;